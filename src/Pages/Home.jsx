import React from 'react'
import Navbar from '../Component/Navbar'

const Home = () => {
  return (
    <div>
        <Navbar />
        <div className='text-center'>
            <h1>Welcome to Home Page</h1>
            <pre children={`
                login detail
                user => kminchelle
                password => 0lelplR 

                // Note 
                '/user' is private route after login you can access this
                
            `}>
            </pre>
        </div>
    </div>
  )
}

export default Home