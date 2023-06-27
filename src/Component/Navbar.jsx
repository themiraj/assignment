import React, { Fragment } from 'react'
import {Link} from 'react-router-dom'
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const getUser = JSON.parse(localStorage.getItem('user'));
  const navgation = useNavigate();
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark" data-bs-theme="dark">
        <div className="container">
            <Link className="navbar-brand" to="/">Mohd Miraj</Link>
            <span className="navbar-text">
                {getUser && getUser !== null ?
                <Fragment> 
                <Link className='btn btn-success' to="/user">My profile</Link>
                <button className='btn btn-success ms-1'
                    onClick={() => {
                        localStorage.clear();
                        navgation('/login')
                    }}
                >Logout</button>
                </Fragment>
                :
                <Link className='btn btn-success' to="/login">login</Link>
                }
            </span>
        </div>
    </nav>
  )
}

export default Navbar