import React, { useEffect, useState } from 'react'
import { Modal,Button,Form,FloatingLabel } from 'react-bootstrap'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addCategoryAPI, getAVideoAPI, getCategoryAPI, removeCategoryAPI, removeVideoAPI, updateCategoryAPI } from '../Services/allAPI';
import VideoCard from './VideoCard';


function Category({deleteVideoCategoryResponse,setRemoveCategoryVideoResponse}) {
  const [allCategories,setAllCategories]=useState([])
  const [categoryName,setCategoryName]=useState("")
  const [show, setShow] = useState(false);
  console.log(allCategories);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  useEffect(()=>{
    getAllCategory()

  },[deleteVideoCategoryResponse])
  const getAllCategory=async ()=>{
    try{
      const result= await getCategoryAPI()
      setAllCategories(result.data)

    }catch(err){
      console.log(err);

    }
  }
  const handleAddCategory=async()=>{
    if (categoryName) {
      //api call
      try{
        await addCategoryAPI({categoryName,allVideos:[]})
        setCategoryName("")
        handleClose()
        getAllCategory()

      }catch(err){
        console.log(err);

      }
      
    }else{
      toast.warning("please fill the form completely!!")
    }
  }
  const handleRemoveCategory=async(categoryId)=>{
    try{
      await removeCategoryAPI(categoryId)
      getAllCategory()

    }catch(err){
      console.log(err);
    }
  }
  const dragOverCategory=(e)=>{
    e.preventDefault()
    console.log("dragging over category");
  }
  const videoDropped=async (e,categoryId)=>{
    const videoId=e.dataTransfer.getData("videoId")
    console.log(`video id: ${videoId} dropped in category id : ${categoryId}` );
    try{
      const {data}=await getAVideoAPI(videoId)
      console.log(data);
      let selectedCategory=allCategories?.find(item=>item.id==categoryId)
      selectedCategory.allVideos.push(data)
      console.log(selectedCategory);
      await updateCategoryAPI(categoryId,selectedCategory)
      const result=await removeVideoAPI(videoId)
      setRemoveCategoryVideoResponse(result)
      getAllCategory()

    }catch(err){
      console.log(err);

    }
  }
  const videoDragStarted=(e,videoDetails,CategoryId)=>{
    console.log("video drag started from category");
    let dataShare ={CategoryId,videoDetails}
    e.dataTransfer.setData("dataShare",JSON.stringify(dataShare))
  }

  return (
    <>
    <div className="d-flex justify-content-around">
      <h3>All Categories</h3>
      <button onClick={handleShow} style={{width:'50px',height:'50px'}} className="btn btn-danger ms-3 rounded-circle fw-bolder fs-5">+</button>

    </div>
    <div className="container-fluid mt-3">
      {
        allCategories.length>0?
        allCategories?.map(item=>(
          <div droppable={true} onDragOver={e=>dragOverCategory(e)} onDrop={e=>videoDropped(e,item?.id)} className="border rounded p-3 mb-2">
            <div className="d-flex justify-content-between">
              <h5>{item?.categoryName}</h5>
              <button onClick={()=>handleRemoveCategory(item?.id)} className="btn"> <i className="fa-solid fa-trash text-danger"></i> </button>
            </div>
            <div className="row mt-2">
              {
                item.allVideos?.length>0 &&
                item.allVideos?.map(video=>(
                  <div draggable={true} onDragStart={e=>videoDragStarted(e,video,item.id)} key={video?.id} className="col-lg-6">
                    <VideoCard displayData={video} insideCategory={true}/>

                  </div>
                ))
              }
            </div>
          </div>


        ))
        :
        <div className="text-danger fw-bolder">
          No categories added
        </div>
      }

    </div>
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
    <Modal.Header closeButton>
          <Modal.Title>Category Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <FloatingLabel
        controlId="floatingInput"
        label="Category Name"
      >
        <Form.Control onChange={e=>setCategoryName(e.target.value)} type="text" placeholder="Category Name"/>
      </FloatingLabel>
         
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleAddCategory} className='btn btn-success'  >Add</Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer position='top-center'theme='colored' autoClose={3000}/>

    </>
  )
}

export default Category
