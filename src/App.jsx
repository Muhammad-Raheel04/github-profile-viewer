import './App.css'
import EmptyState from './components/EmptyState'
import Header from './components/Header'
import ProfileCard from './components/ProfileCard'
import Searchbar from './components/Searchbar'
import RepoCard from './components/RepoCard'
import { useEffect, useState } from 'react'
import Spinner from './components/Spinner'
function App() {
  const [username, setUsername] = useState("");
  const [userRepoData, setUserRepoData] = useState(null)
  const [data, setUserData] = useState(null)
  const [loading,setLoading]=useState(false);
  useEffect(() => {
    if (!username) {
      setUserData(null);
      setUserRepoData(null);
      setLoading(false);
      return;
    }
    setLoading(true);
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
        setUserData(null);
        setUserRepoData(null);
      }finally{
        setLoading(false);
      }
    }, 500)
    return () => clearTimeout(timer);

  }, [username])
  return (
    <>
      <Header></Header>
      <Searchbar username={username} setUsername={setUsername} />
      {
        loading && <div className='flex justify-center items-center gap-3 text-center mt-4 text-gray-500'><Spinner/> <span className='mt-5'>Loading...</span></div>
      }
      {
        !loading && !data && <EmptyState/>
      }
      {
        !loading && data && <ProfileCard userData={data} /> 
      }
      {
        !loading && username && userRepoData ? <RepoCard userRepoData={userRepoData}></RepoCard> : ''
      }
    </>
  )
}

export default App
