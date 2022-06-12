import React from 'react'
import { Link } from 'react-router-dom'
import Img404 from './Login/images/Img404.jpg'
 


const PageNotFound = () => {
    return (
        <div className='Container'>
            <div className="row align-items-center">
                <div className="col">
                    <div style={{ textAlign: "center" }}>
                        <h1 style={{ marginTop: 30,fontSize:70 }}>OOPs!</h1>
                        <h3 >This page could not be found</h3>
                        <Link to="/">Back to Homepage...</Link>
                    </div>
                    <img  className='img-fluid'
                     style={{ alignSelf: 'center',height:"50%",width:"50%",marginLeft:"25%"}} src={Img404} />
                </div>
            </div>
        </div>
    )
}

export default PageNotFound