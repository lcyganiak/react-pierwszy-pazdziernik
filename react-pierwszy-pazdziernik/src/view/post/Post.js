import React from "react";
import Paragraf from "../../lib/typografia/paragraf/paragraf";
import Span from "../../lib/typografia/span/Span";

function Post (props) {
    return (
        <>
            <h2>tytuł posta</h2>
            <Paragraf value={props.value}></Paragraf>
            <Span></Span>
        </>
    )
}

export default Post;