import React, { Fragment, useEffect, useState } from 'react';
import Navbar from '../Component/Navbar';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
const Private = () => {
  const [data, setData] = useState({}) 
  const user = JSON.parse(localStorage.getItem('user'))
  const navgation = useNavigate()
  useEffect(()=> {
    if(!user || user === null){
        navgation('/login')
    }else{
        setData(user)
    }
  },[])
  return (
      Object.keys(data).length > 0 ? 
      <Fragment>
            <Navbar/>
            <section className="vh-100" style={{backgroundColor: "#9de2ff"}}>
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col col-md-9 col-lg-7 col-xl-5">
                        <div className="card" style={{borderRadius: "15px"}}>
                        <div className="card-body p-4">
                            <div className="d-flex text-black">
                            <div className="flex-shrink-0">
                                <img src={user.image} 
                                alt="imf" className="img-fluid"
                                style={{width: "180px", borderRadius: "10px"}}

                                />
                            </div>
                            <div className="flex-grow-1 ms-3">
                                <h5 className="mb-1">{user.firstName +' '+ user.lastName}</h5>

                                <div className="rounded-3 p-2 mb-2"
                                style={{backgroundColor: "#efefef"}}>
                                <p className="mb-2 pb-1" style={{color: "#2b2a2a"}}>UserName: {user.username}</p>
                                <p className="mb-2 pb-1" style={{color: "#2b2a2a"}}>Gender: {user.gender}</p>
                                <p className="mb-2 pb-1" style={{color: "#2b2a2a"}}>email: {user.email}</p>
                                </div>
                                <div className="d-flex pt-1">
                                <Link to={'/'} className="btn btn-primary flex-grow-1">Back To home</Link>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
                </div> 
            </section>
        </Fragment>
            : null
      
  )
}

export default Private