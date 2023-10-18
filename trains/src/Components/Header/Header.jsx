import React from 'react'
import Logo from './Logo'
import NavBar from './NavBar'
import MenuLogo from './MenuLogo'

function Header() {
    return (
        <div className='container header'>
            <Logo />
            <div className='d-flex justify-content-between align-items-center'>
                <NavBar />
                <MenuLogo />
            </div>
        </div>
    )
}

export default Header