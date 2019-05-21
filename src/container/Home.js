import React from 'react'
import {Link} from 'react-router-dom'
const Home = () => {
  return (
    <div className="background">

      <Link id="homebutton" className="waves-effect waves-light btn" to="/shop">Shop now!</Link>
    </div>
  )
}

export default Home;