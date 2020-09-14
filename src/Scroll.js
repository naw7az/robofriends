import React from 'react'

function Scroll(props) {
    return (
        // first {} is for js and second {} is for object.
        <div style={{
            overflowY: 'scroll',
            border: '1px solid black',
            height: '600px'
        }}>
            {props.children}
        </div>
    )
}

export default Scroll
