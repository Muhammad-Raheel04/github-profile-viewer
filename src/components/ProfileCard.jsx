import React from 'react'
import { MapPin, Link, Users, FolderGit2 } from 'lucide-react'
const ProfileCard = ({ userData }) => {
  return (
    <>
      <h1 className=" flex justify-center items-center text-2xl w-[90vw] max-w-6xl mx-auto text-center pt-4 font-bold text-gray-800  border rounded-md border-blue-500 p-4 mb-4">Profile</h1>
      <div className="flex flex-col p-6 w-[90vw] max-w-6xl mx-auto bg-white rounded-2xl shadow-sm">
        <div className="flex flex-col lg:flex-row gap-6">
          <img
            src={userData?.avatar_url}
            className="w-40 h-40 rounded-full border-4 border-gray-200 shadow-md"
          />
          <div className="flex flex-col justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-800">{userData?.name}</h1>
              <p className="text-gray-500">@{userData?.login}</p>
            </div>

            <div className="flex flex-wrap gap-4 text-gray-600 items-center">
              {userData?.location && (
                <p className="flex items-center gap-1"><MapPin /> {userData.location}</p>
              )}
              <a
                href={`https://github.com/${userData?.login}`}
                target="_blank"
                className="flex items-center gap-1 text-blue-500 hover:underline"
              >
                <Link /> {`https://github.com/${userData?.login}`}
              </a>
            </div>

            <div className="flex flex-wrap gap-6 mt-2 text-gray-700">
              <p className="flex items-center gap-1"><Users /> <span className="font-bold">{userData?.followers}</span> Followers</p>
              <p className="flex items-center gap-1"><Users /> <span className="font-bold">{userData?.following}</span> Following</p>
              <p className="flex items-center gap-1"><FolderGit2 /> <span className="font-bold">{userData?.public_repos}</span> Repos</p>
            </div>
          </div>
        </div>
      </div>
    </>

  )
}

export default ProfileCard
