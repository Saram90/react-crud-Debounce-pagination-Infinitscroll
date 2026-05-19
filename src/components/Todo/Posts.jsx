import React from 'react';
import { useState, useEffect } from "react";
import { getPost, deletePost } from "../../api/PostApi";
import Form from "./Form";
import Button from './Button';



function Posts() {

    const [data, setData] = useState([]);
    const [updateDataApi, setUpdateDataApi] = useState({});
    const [loading, setLoading] = useState(true);

    const getPostData = async () => {
        try {
            const res = await getPost();
            setData(res.data);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getPostData();
    }, []);

    // Function to Delete Post
    const handleDeletePost = async (id) => {
        try {
            const res = await deletePost(id);
            if (res.status === 200) {
                const newUpdatedPosts = data.filter((curPost) => {
                    return curPost.id !== id;
                });
                setData(newUpdatedPosts);
            } else {
                console.log("Failed to delete the post:", res.status);
            }
        } catch (error) {
            console.log(error);
        }
    }

    // handle Update Post Function
    const handleUpdatePost = (curElem) => setUpdateDataApi(curElem);

    return (

        <>

            <section className="p-6 bg-[#212f3d] rounded-sm my-12 mx-auto">
                <Form
                    data={data}
                    setData={setData}
                    updateDataApi={updateDataApi}
                    setUpdateDataApi={setUpdateDataApi}
                />
            </section>

            <section className="section-post w-[90%] mx-auto text-white mt-4">
                {loading ? (
                    <p className="text-center text-lg">Loading posts...</p>
                ) : (
                    <ol className="list-decimal list-inside grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-base sm:text-lg">
                        {data.map((curElem) => (
                            <li key={curElem.id}
                                className="bg-linear-to-br from-[#1c2833] to-[#212f3d] p-6 sm:p-8 rounded-xl shadow-md hover:shadow-xl transition leading-relaxed">
                                <p className="mt-2 font-semibold mb-3 text-lg sm:text-xl">Title: {curElem.title}</p>
                                <p className="mb-4 text-base sm:text-lg">Body: {curElem.body}</p>
                                <div className="flex gap-4">
                                    <Button onClick={() => handleUpdatePost(curElem)} variant="primary" size="sm">
                                        Edit
                                    </Button>
                                    <Button onClick={() => handleDeletePost(curElem.id)} variant="secondary" size="sm">
                                        Delete
                                    </Button>
                                </div>
                            </li>
                        ))}
                    </ol>
                )}
            </section>


        </>
    )
}

export default Posts
