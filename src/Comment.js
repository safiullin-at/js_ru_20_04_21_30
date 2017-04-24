import React from 'react'

export default function Comment({comment}) {
    return (
        <div style={{marginTop: 15}}>
            <div><span style={{fontWeight: 700}}>{comment.user}</span></div>
            <div>{comment.text}</div>
        </div>
    )
}