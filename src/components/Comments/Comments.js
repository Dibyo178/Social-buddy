import React from 'react';

const Comments = (props) => {
    const commentStyle ={
       borderRadius:'5%',
        padding: '20px',
        
        textAlign:'center',
        width:'400px',
        margin:'0 auto',
        fontSize:'20px',
        marginBottom:'20px',
        backgroundColor:'#562EFF',
        color:"white"
    } 
    const imageStyle = {
        height: "50px", width: "50px", borderRadius: "50%"
    }
    return (
        <div style={commentStyle}> 
            <h4><img style={imageStyle} src={`https://loremflickr.com/600/400?random=${Math.random() * 100}`} alt="" /> {props.comment.name}</h4>

            <p>{props.comment.body}</p>
        </div>
    );
};

export default Comments;