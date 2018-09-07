import React from 'react';

export default function Comment(props){
    const {comments} = props;
    return(
        <div>
            {comments.comment}
        </div>
    )
}