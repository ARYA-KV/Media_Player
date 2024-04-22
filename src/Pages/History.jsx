import React from 'react'
import { Link } from 'react-router-dom'

function History() {
  return (
    <div className='container my-5'>
      <div className="d-flex justify-content-between">
        <h3>Watch History</h3>
        <Link to={'/home'}></Link>
      </div>
      <div className="table my-5">
        <thead>
          <tr>
           <th>#</th>

            <th>Caption</th>
            <th>Video Link</th>
            <th>Time Stamp</th>
            <th><div className="fa-solid fa-ellipsis-vertical"></div></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Little Women Trailer</td>
            <td> <a href="https://www.youtube.com/embed/AST2-4db4ic" target='_blank'>https://www.youtube.com/embed/AST2-4db4ic</a></td>
            <td>22/4/2024 10:45 AM</td>
            <td><button className="btn"><i className="fa-solid fa-trash text-danger"></i></button></td>
          </tr>
        </tbody>
      </div>
    </div>
  )
}

export default History
