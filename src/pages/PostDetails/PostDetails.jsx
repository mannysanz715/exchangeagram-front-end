import { useLocation  } from "react-router-dom";
import { useState,useEffect } from "react";
import './PostDetails.css'
const PostDetails = () => {
  const location = useLocation()
  const [post, setPost] = useState({})
  useEffect(()=>{
    setPost(location.state.targetPost)
  },[location.state.targetPost])
  return ( 
    <div className="PostContainer">
    <img src={`${post.photo}`} alt='post'/>
    </div>
  );
}

export default PostDetails;