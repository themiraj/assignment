import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
export const Login = () => {
  const [logindetails, setLogindetailt] = useState({
    email:"", 
    password:""
  })
  const [loding, setLoading] = useState(false)
  const [error, setError] = useState("");
  const navgation = useNavigate()
  const user = JSON.parse(localStorage.getItem('user'))

  useEffect(()=> {
    if(user && user !== null){
        navgation('/')
    }
  },[])

  const handleLogin = async (e) => {
    setLoading(true)
    e.preventDefault();
    if(logindetails.email && logindetails.password){
        const res = await fetch('https://dummyjson.com/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    username: logindetails.email, //'kminchelle',
                    password: logindetails.password,//'0lelplR',
                })
        })
        if(res.status === 400){
            setError("Invalid credentials")
            setLoading(false)
            return;
        }
        const data = await res.json();
        localStorage.setItem('user',JSON.stringify(data));
        localStorage.setItem('token',JSON.stringify(data.token));
        setLoading(false)
        navgation('/')
        return;
    }
    setLoading(false)
    alert("please fill email and password both");
  } 

  const changedetails = (e, key) => {
   
    setLogindetailt((state) => ({
        ...state,
        [key]:e.target.value
    }))
  }
  return (
    <div className='container'>
        {loding && 
            <div className="position-fixed w-100 h-100 opacity-50 bg-dark d-flex justify-content-center align-items-center top-0 start-0">
                <div class="spinner-border text-primary" role="status">
                    <span class="sr-only"></span>
                </div>
            </div>
        }
       
        <div className='row mt-4'>
            <div className='col-md-8 offset-md-2'>
                {error ? 
                    <div className="alert alert-danger" role="alert">
                        {error}!
                    </div>
                    : null
                }
                <form>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input className="form-control" id="exampleInputEmail1" value={logindetails.email}
                            onChange={(e) => {
                                changedetails(e,'email')
                            }}
                        aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" 
                            value={logindetails.password}
                            onChange={(e) => {
                                changedetails(e,'password')
                            }}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary me-1" onClick={(e) => {handleLogin(e)}}>Submit</button>
                    <Link className="btn btn-dark" to="/">Back To Home</Link>
                </form>
            </div>
        </div>
    </div>
  )
}