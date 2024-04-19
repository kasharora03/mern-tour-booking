import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const AdminLayout = () => {
    return (
        <div>
            <header>
                <div>
                    <nav>
                        <ul className='tw-flex tw-justify-around tw-gap-3 tw-w-full'>
                            <li> <NavLink to='/admin/users'>Users</NavLink></li>
                            <li><NavLink to='/admin/reviews'>Reviews</NavLink></li>
                            <li><NavLink to='/admin/contacts'>Messages</NavLink></li>
                            <li><NavLink to='/'>Home</NavLink></li>
                        </ul>
                    </nav>
                </div>
            </header>
            <Outlet/>
        </div>
    )
}

export default AdminLayout
