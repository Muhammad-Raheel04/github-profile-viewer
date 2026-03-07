import React from 'react'
import { Github } from 'lucide-react'
const Header = () => {
    return (
        <div className='flex items-center w-full bg-black text-white text-2xl p-4 gap-4'>
            <Github className='w-5 h-5 '></Github>
            <h1>Github Profile Viewer</h1>
        </div>
    )
}

export default Header

