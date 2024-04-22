import React from 'react'
import {Row,Col} from 'react-bootstrap';
import VideoCard from './VideoCard'

function View() {
  return (
    <>
    <Row>
      <Col className="mb-4" sm={12} md={6} lg={4}>
        <VideoCard/>
      </Col>
    </Row>
      
    </>
  )
}

export default View
