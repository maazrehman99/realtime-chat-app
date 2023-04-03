import React from 'react'

const Navbar = () => {
  return (
    <div className="navbar">
        <span className="logo">Messenger</span>
        <div className="user">
            <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="" />
            <span>John</span>
            <button>Log out</button>
        </div>
    </div>
  )
}

export default Navbar