import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import Comments from '../Comments/Comments';

const PostDetails = () => {
    const {postId} = useParams();
    const [post, setPost] = useState({});
    const [comment, setComment] = useState([]);
    useEffect(() =>{
        const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setPost(data));
    }, [])


    useEffect(() =>{
        const url =`https://jsonplaceholder.typicode.com/comments?postId=${postId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setComment(data));

    }, []);

    const Style ={
        height:'250px',
        width: '400px',
        textAlign:'center',
        margin:'0 auto',
        marginBottom:'20px',
        marginTop:'20px',
        borderRadius:'5%',
        backgroundColor:'#F9A51A'

    }

    return (
        <div>

             <div style={Style}>
             <b>Id is: {post.id}</b>
             <p> <b> UserId is:</b> {post.userId}</p>
             <p><b>Post Title:</b> {post.title}</p>
             <p> <b> Post Body:</b>{post.body}</p>
             </div>
                <hr/>
                {
                    <h1 style={{textAlign:'center',paddingTop:'20px', color:'#2980B9'}}> Comment Section Is Here...</h1>
                }

                {
                    comment.map(comment => <Comments comment ={comment}></Comments>)
                }
          


        </div>



    );
};

export default PostDetails;