import React from 'react'
import { Star, GitFork } from 'lucide-react'
const RepoCard = ({ userRepoData }) => {
    if (!Array.isArray(userRepoData)) return null;
    const languageColors = {
        JavaScript: "#f1e05a",
        TypeScript: "#3178c6",
        Python: "#3572A5",
        Java: "#b07219",
        C: "#555555",
        "C++": "#f34b7d",
        HTML: "#e34c26",
        CSS: "#563d7c",
    };
    return (
        <div className="flex flex-col gap-4 w-[90vw] max-w-6xl mx-auto my-3"> <h1 className="text-2xl text-center pt-4 font-bold text-gray-800 mb-2 border rounded-md border-blue-500 p-4">Repositories</h1>
           
            <div className="grid md:grid-cols-3 gap-4">
                {userRepoData.map((repo) => (
                    <div key={repo.id} className="p-4 bg-white rounded-xl shadow hover:shadow-lg transition-shadow duration-200">
                        <h3 className="text-blue-500 font-semibold text-lg">{repo.name}</h3>
                        <p className="text-gray-600 mb-2">{repo.description || "No description"}</p>
                        <div className="flex flex-wrap items-center gap-4 text-gray-500 text-sm">
                            {repo.language && (
                                <p className="flex items-center gap-1">
                                    <span
                                        className="w-3 h-3 rounded-full"
                                        style={{ backgroundColor: languageColors[repo.language] || "#ccc" }}
                                    ></span>
                                    {repo.language}
                                </p>
                            )}
                            <p className="flex items-center gap-1"><Star /> {repo.stargazers_count}</p>
                            <p className="flex items-center gap-1"><GitFork /> {repo.forks_count}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default RepoCard
