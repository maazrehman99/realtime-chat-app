import React from 'react'

const Search = () => {
  return (
    <div className="search">
      <div className="searchForm">
        <input type="text" placeholder="Search Any User" />
      </div>
      <div className="userChat">
        <img
          src="https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
          alt="user"
        />
        <div className="userChatInfo">
          <span>User 1</span>
        </div>
      </div>
    </div>
  );
}

export default Search