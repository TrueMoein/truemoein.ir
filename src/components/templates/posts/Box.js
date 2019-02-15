import React from 'react';

const PostBox = (props) => {
    return (
        <div>
            <h4>This is the post box</h4>
            {props.children}
        </div>
    )
}

export default PostBox