import React from 'react'
import { NavLink } from 'react-router-dom'

const DwLink = () => {
  return (
    <div>
        <NavLink to ="/product/create"className="nav">Create Product</NavLink>
        <NavLink to ="/product"className="nav">Product</NavLink>
        <NavLink to ="/user/create"className="nav">Create User</NavLink>
        <NavLink to ="/user"className="nav">User</NavLink>
        <NavLink to ="/review/create"className="nav">Create Review</NavLink>
        <NavLink to ="/review"className="nav">Review</NavLink>
    
    </div>
  )
}

export default DwLink
