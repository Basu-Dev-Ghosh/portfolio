import React from 'react'
import './HeaderIcon.css'
const HeaderIcon = ({ color }) => {
    return (
        <div className='header-icon'><i style={{ color }} class="fa-solid fa-ghost"></i></div>
    )
}

export default HeaderIcon