import React from 'react'
import { Search } from 'lucide-react'
const Searchbar = ({
    userName,
    setUsername
}) => {
    return (
        <div className='flex justify-center mt-4 '>
            <div className='flex items-center outline-none bg-white shadow w-[90vw] rounded-md px-4'>
                <Search 
                className='w-4 h-4 text-gray-500'
                />
                <input
                    type='text'
                    placeholder='Search GitHub username...'
                    className='p-2 outline-none w-full'
                    value={userName}
                    onChange={(e)=>setUsername(e.target.value)}
                ></input>
            </div>
        </div>
    )
}

export default Searchbar
