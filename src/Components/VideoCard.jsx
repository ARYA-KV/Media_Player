import React,{useState} from 'react'
import { Card,Modal } from 'react-bootstrap'
import { removeVideoAPI, saveHistoryAPI } from '../Services/allAPI';


function VideoCard({displayData,setDeleteResponse,insideCategory}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async () =>{
    setShow(true);
    const {caption,youtubeURL}=displayData
    const systemTime = new Date()
    //  console.log(systemTime);
const formattedDate = systemTime.toLocaleString('en-US', { timeZoneName: 'short' });
console.log(formattedDate);
const videoHistory ={caption,youtubeURL,timeStamp:formattedDate}
try{
  await saveHistoryAPI(videoHistory)

}catch(err){
  console.log(err);
}
   

  } 
  const handleRemoveVideo = async (videoId)=>{
    try{
      const result = await removeVideoAPI(videoId)
      setDeleteResponse(result.data)

    }catch(err){
      console.log(err);

    }
  }
  const dragStarted=(e,videoId)=>{
    console.log(`dragging started with video id : ${videoId}`);
    e.dataTransfer.setData("videoId",videoId)
  }
  return (
   
    <>
    <Card draggable={true} onDragStart={e=>dragStarted(e,displayData?.id)}>
      <Card.Img onClick={handleShow} style={{height:'180px'}} variant="top" src={displayData?.imgURL} />
      <Card.Body>
        <Card.Title className='d-flex align-items-center justify-content-between '>
          <p>{displayData?.caption}</p>
          {
            !insideCategory &&
            <button onClick={()=>handleRemoveVideo(displayData?.id)} className="btn">
            <i className="fa-solid fa-trash text-danger"></i>
            </button>
          }
           
        </Card.Title>
        
      </Card.Body>
    </Card>
    {/* modal */}
   
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{displayData?.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="100%" height="480" src={`${displayData?.youtubeURL}?autoplay=1`} title="caption"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </Modal.Body>
       
      </Modal>
      
    </>
  )
}

export default VideoCard
