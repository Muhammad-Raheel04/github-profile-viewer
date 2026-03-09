import './App.css'
import EmptyState from './components/EmptyState'
import Header from './components/Header'
import ProfileCard from './components/ProfileCard'
import Searchbar from './components/Searchbar'
import RepoCard from './components/RepoCard'
import { useEffect, useState } from 'react'
function App() {
  const [username, setUsername] = useState("");
  const [userRepoData, setUserRepoData] = useState(null)
  const [data, setUserData] = useState(null)
  useEffect(() => {
    if (!username) return;
    const timer = setTimeout(async() => {
      try{
        const userRes=await  fetch(`https://api.github.com/users/${username}`);
        const userData=await userRes.json();
        setUserData(userData);

        const reposRes=await fetch(`https://api.github.com/users/${username}/repos`);
        const userRepoData=await reposRes.json();
        setUserRepoData(userRepoData);

      }catch(error){
        console.log(error);
      }
    }, 500)
    return () => clearTimeout(timer);

  }, [username])
  return (
    <>
      <Header></Header>
      <Searchbar username={username} setUsername={setUsername} />
      {
        data ? <ProfileCard userData={data} /> : <EmptyState />
      }
      {
        username && userRepoData ? <RepoCard userRepoData={userRepoData}></RepoCard> : ''
      }
    </>
  )
}

export default App
