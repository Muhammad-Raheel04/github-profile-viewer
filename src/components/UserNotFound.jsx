import { Github } from 'lucide-react'
import React from 'react'


const UserNotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center mt-12 text-center px-4">

            <div >
                <Github className='w-20 h-20 text-gray-300 font-normal mb-4'></Github>
            </div>

            <h2 className="text-2xl  text-center mt-6  font-semibold text-gray-800">
                User Not Found
            </h2>

            <p className="mt-2 text-gray-500 max-w-md">
                We couldn't find any GitHub user with that username.
                Please check the spelling or try another one.
                <br />
                <span className="text-sm text-gray-400">
                    Note: GitHub API has rate limits. If you searched too many times quickly,
                    results may be temporarily unavailable.
                </span>
            </p>

            <div className="mt-6 bg-gray-50 border border-gray-200 rounded-lg p-4 text-sm text-gray-600">
                 Tip: Try searching for popular users like
                <span className="font-medium text-gray-800"> torvalds</span>,
                <span className="font-medium text-gray-800"> gaearon</span>
            </div>

        </div>
    )
}

export default UserNotFound