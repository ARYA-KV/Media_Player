import React, { useState } from 'react'

import {  Link  } from 'react-router-dom'
import Add from '../Components/Add'
import Category from '../Components/Category'
import View from '../Components/View'

function Home() {
  const [addVideoResponse,setAddVideoResponse]=useState("")
  const [removeCategoryVideoResponse,setRemoveCategoryVideoResponse]=useState("")
  const [deleteVideoCategoryResponse,setDeleteVideoCategoryResponse]=useState("")
  return (
    <>
    <div className='container my-5 d-flex justify-content-between'>
      <Add setAddVideoResponse={setAddVideoResponse} />
      <Link to={'/history'}>Watch History</Link>

    </div><div className="container-fluid my-5 row">
      <div className="col-lg-6">
        <h3>All Videos</h3>
        <View setDeleteVideoCategoryResponse={setDeleteVideoCategoryResponse} addVideoResponse={addVideoResponse} removeCategoryVideoResponse={removeCategoryVideoResponse} />
      </div>
      <div className="col-lg-6">
        <Category deleteVideoCategoryResponse={deleteVideoCategoryResponse} setRemoveCategoryVideoResponse={setRemoveCategoryVideoResponse}/>
      </div>

    </div>
      </>
  )
}

export default Home
