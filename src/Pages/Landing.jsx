import React from 'react'
import { Link } from 'react-router-dom'
import langingImg from '../assets/music-player.gif';
import {Card} from 'react-bootstrap'
import settingImg from '../assets/setting.gif';
import categoryImg from '../assets/music.gif';
import historyImg from '../assets/watch-history.gif';





function Landing() {
  return (
    <div className='landingsection container'>
      <div className="row align-items-center my-5">
        <div className="col-lg-5">
          <h3>Welcome to<span className='text-warning'> Media Player</span></h3>
          <p className='mt-3' style={{textAlign:'justify'}}>The media player app is your all-in-one companion for immersive entertainment. Seamlessly blending functionality with style, this app allows you to curate your music and video libraries effortlessly. With intuitive navigation and customizable features, you can create playlists, explore new artists, and enjoy your favorite podcasts with ease.</p>
          <Link to={'/home'} className='btn btn-warning mt-3'>Get Started</Link>
        </div>
        <div className="col"></div>
        <div className="col-lg-6">
          <img src={langingImg} alt="" />
        </div>
      </div>
      {/* features */}
      <div className="Features my-5">
        <h3 className='text-center'>Features</h3>
        <div className="row">
                <div className="col-lg-4">
                    <Card className='p-2' style={{ width: '22rem',height:'400px'}}>
                        <Card.Img variant="top" style={{height:'250px'}} src={settingImg}/>
                        <Card.Body>
                         <Card.Title>Managing Video</Card.Title>
                         <Card.Text>
                            Users can upload, view and remove the videos.
                          </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-lg-4">
                    <Card className='p-2' style={{ width: '22rem',height:'400px'}}>
                        <Card.Img variant="top" style={{height:'250px'}} src={categoryImg}/>
                        <Card.Body>
                         <Card.Title>Managing Video</Card.Title>
                         <Card.Text>
                            Users can categories the video by drag and drop feature.
                          </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-lg-4">
                    <Card className='p-2' style={{ width: '22rem',height:'400px'}}>
                        <Card.Img variant="top" style={{height:'250px'}} src={historyImg}/>
                        <Card.Body>
                         <Card.Title>Categories Video</Card.Title>
                         <Card.Text>
                           users can manage the watch history of all video.
                          </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
        </div> 
      </div>
      {/* footer-banner */}
      <div className="my-5 row border rounded p-5">
        <div className="col-lg-5">
          <h3 className="text-warning">Simple, Fast and powerfull</h3>
          <p className='fs-5' style={{textAlign:'justify'}}>Play Everything<span className='fs-5'>: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro adipisci. </span></p>
          <p className='fs-5' style={{textAlign:'justify'}}>Categorise video<span className='fs-5'>: Lorem ipsum dolor sit amet, consectetur adipisicing elit. impedit consequatur illum quae cupiditate aliquid corrupti.</span></p>
          <p className='fs-5' style={{textAlign:'justify'}}>Managing History<span className='fs-5'>: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro adipisci.</span></p>
        </div>
        <div className="col"></div>
        <div className="col-lg-6">
        <iframe width="100%" height="480" src="https://www.youtube.com/embed/cq2iTHoLrt0" title="Dark Season 3 | Official Trailer | Netflix" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </div>
    </div>
  )
}

export default Landing
