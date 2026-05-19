import axios from "axios";

const api = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com"
});

// Get Method
export const getPost = () => {
    return api.get("/posts");
}

// Delete Method 
export const deletePost = (id) => {
    return api.delete(`/posts/${id}`);
}

// Post Method
// when we are sending data to the server(API). we need to tell API what kind of data it is, thats why we need to set any varibale. In this we are using "post"
export const postdata = (post) => {
    return api.post("/posts", post);
}

// Put Method
export const updateData = (id, post) => {
    return api.put(`/posts/${id}`, post);
}