import React from 'react'
import { Link } from 'react-router-dom'


function Footer() {
  return (
    <div style={{height:'300px'}} className='container mt-5 w-100'>
      <div className="d-flex justify-content-between ">
        <div style={{width:'400px'}} className='intro'>
        <h5><i className="fa-solid fa-music me-2"></i> Media Player</h5>
          <p>Designed and Build with all the love in the world by the luminar team with the help of our contributers</p>
          <p>Code licensed Luminar, docs CC BY 3.0</p>
          <p>Currently v5.3.2</p>
        </div>

        <div className="links d-flex flex-column">
            <h5>Links</h5>
            <Link to={'/'} style={{textDecoration:'none',color:'white'}}>landing page</Link>
            <Link to={'/home'} style={{textDecoration:'none',color:'white'}}>Home page</Link>
            <Link to={'/history'} style={{textDecoration:'none',color:'white'}}>Watch page</Link>



        </div>
         <div className="guids d-flex flex-column">
          <h5>Guides</h5>
          <a href="https://react.dev/" style={{textDecoration:'none',color:'white'}} target='_blank'>React</a>
          <a href="https://react-bootstrap.github.io/" style={{textDecoration:'none',color:'white'}} target='_blank'>React Bootstrap</a>
          <a href="https://reactrouter.com/en/main" style={{textDecoration:'none',color:'white'}} target='_blank'>React Router</a>


         </div>
         <div className="contact d-flex flex-column">
          <h5>Contact Us</h5>
          <div className="d-flex">
            <input placeholder='Enter your email here' type="text"  className="form-container" />
            <button className="btn btn-success ms-1"><i className="fa-solid fa-arrow-right"></i></button>
          </div>
          <div className="icons d-flex justify-content-between mt-3">
            <a href="" style={{textDecoration:'none',color:'white'}} target='_blank'><i className="fa-brands fa-twitter"></i></a>
            <a href="" style={{textDecoration:'none',color:'white'}} target='_blank'><i className="fa-brands fa-instagram"></i></a>
            <a href="" style={{textDecoration:'none',color:'white'}} target='_blank'><i className="fa-brands fa-facebook"></i></a>
            <a href="" style={{textDecoration:'none',color:'white'}} target='_blank'><i className="fa-brands fa-linkedin"></i></a>
            <a href="" style={{textDecoration:'none',color:'white'}} target='_blank'><i className="fa-brands fa-github"></i></a>
            <a href="" style={{textDecoration:'none',color:'white'}} target='_blank'><i className="fa-solid fa-phone"></i></a>
          </div>
         </div>
      </div>
      <p className='text-center mt-3'>Copyright © 2024 Media Player. Built with React. </p>
      
    </div>
  )
}

export default Footer
