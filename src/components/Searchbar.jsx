import React from 'react'
import { Search } from 'lucide-react'
const Searchbar = () => {
    return (
        <div className='flex justify-center mt-4'>
            <div className='flex items-center max-w-80 outline-none border border-black rounded-md px-4'>
                <Search 
                className='w-4 h-4 text-gray-500'
                />
                <input
                    type='text'
                    placeholder='Search GitHub username...'
                    className='p-2 outline-none'
                ></input>
            </div>
        </div>
    )
}

export default Searchbar
