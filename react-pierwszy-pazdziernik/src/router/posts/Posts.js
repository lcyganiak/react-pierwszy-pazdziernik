import React from "react";
import Post from "../../view/post/Post";

function Posts(props) {
    return (
        <>
            <h1>Lista Postów</h1>
            <Post value={props.value}></Post>
            <Post value={props.value}></Post>
        </>
    )
}

export default Posts;