import React, { useState } from "react"
import "./details.css"
import "../../components/header/header.css"
import img from "../../assets/images/b5.jpg"
import { BsPencilSquare } from "react-icons/bs"
import { AiOutlineDelete } from "react-icons/ai"
import { useParams } from "react-router-dom"
import { useEffect } from "react"
import { blog } from "../../assets/data/data"
import { useSelector } from "react-redux"


export const DetailsPages = () => {
  const { id } = useParams()
  const [blogs, setBlogs] = useState({})
  const posts  = useSelector(state => state.post.data?.find(post => post._id === (id)))
  
  if (!posts) {
    return <div>Loading...</div>;
  }


  return (
    <>
      {posts ? (
        <section className='singlePage'>
          <div className='container'>
            <div className='left'>
              <img src={posts?.image} alt='' />
            </div>
            <div className='right'>
              <h1>{posts.title}</h1>
              <p>{posts.description}</p>
              <p>Author: {posts.user.name}</p>
            </div>
          </div>
        </section>
      ) : null}
    </>
  )
}
