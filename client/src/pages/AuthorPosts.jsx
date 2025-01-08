import React,{useState} from 'react'
import { DUMMY_POSTS } from '../data'
import PostItem from '../components/PostItem'

const AuthorPosts = () => {
 const[posts,setPosts]=useState(DUMMY_POSTS)

  return (
<section className='posts'>
   { posts.length > 0 ? <div className='container posts__container'> {
   
   posts.map(({id,thumbnail,category,title,desc,authorId}) => 
    <PostItem  key={id} postId={id} thumbnail={thumbnail} category={category}
     title={title} description={desc} authorId={authorId} />)
}
   </div> : <h2 className='center'>No post Found </h2> }
   </section>
  )
}

export default AuthorPosts