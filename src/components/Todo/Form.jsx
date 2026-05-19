import React from 'react'
import { useState, useEffect } from 'react';
import { postdata, updateData } from '../../api/PostApi';
import Button from './Button';

function Form({ data, setData, updateDataApi, setUpdateDataApi }) {

    const [addData, setAddData] = useState({
        title: "",
        body: "",
    });

    let isEmpty = Object.keys(updateDataApi).length === 0;

    useEffect(() => {
        updateDataApi &&
            setAddData({
                title: updateDataApi.title || "",
                body: updateDataApi.body || "",
            })
    }, [updateDataApi]);

    const handleInputChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setAddData((prev) => {
            return {
                ...prev,
                [name]: value,
            };
        });
    };

    //Below and above handleInputChange function is same as above, just different way to write the same code

    // const handleInputChange = (e) => {
    //     const { name, value } = e.target;
    //     setAddData((prevData) => ({
    //         ...prevData,
    //         [name]: value,
    //     }));
    // }

    const addPostData = async () => {
        const res = await postdata(addData);
        console.log("res", res);
        if (res.status === 201) {
            setData([...data, res.data]);
            setAddData({ title: "", body: "" });
        }
    }

    //updatePostData

    const updatePostData = async () => {
        try {
            const res = await updateData(updateDataApi.id, addData);
            console.log("res", res);

            if (res.status === 200) {
                setData((prev) => {
                    return prev.map((curElem) => {
                        return curElem.id === res.data.id ? res.data : curElem;
                    })
                })
                setAddData({ title: "", body: "" });
                setUpdateDataApi({});
            }
        } catch (error) {

        }
        updateData();
    };

    // form Submit Function

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const action = e.nativeEvent.submitter.value;
        if (action === "Add") {
            addPostData();
        } else if (action === "Edit") {
            updatePostData();
        }
    };

    return (
        <form onSubmit={handleFormSubmit} className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-[#2c3e50] rounded-lg">

            <input className="w-full text-[#212f3d] border border-gray-600 rounded-md py-3 px-4 bg-amber-50 text-sm"
                type="text"
                name="title"
                placeholder="Add Title"
                value={addData.title}
                onChange={handleInputChange}
            />

            <input className="w-full text-[#212f3d] border border-gray-600 rounded-md py-3 px-4 bg-amber-50 text-sm"
                type="text"
                name="body"
                placeholder="Add Post"
                value={addData.body}
                onChange={handleInputChange}
            />

            <Button
                type="submit" value={isEmpty ? "Add" : "Edit"}
                variant="primary" size="md"
            >
                {isEmpty ? "Add" : "Edit"}
            </Button>
        </form>
    )
}

export default Form
