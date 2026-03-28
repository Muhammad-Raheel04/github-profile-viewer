import './App.css'
import EmptyState from './components/EmptyState'
import Header from './components/Header'
import ProfileCard from './components/ProfileCard'
import Searchbar from './components/Searchbar'
import RepoCard from './components/RepoCard'
import { useEffect, useState } from 'react'
import Spinner from './components/Spinner'
import UserNotFound from './components/UserNotFound'
function App() {
  const [username, setUsername] = useState("");
  const [userRepoData, setUserRepoData] = useState(null)
  const [data, setUserData] = useState(null)
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (!username) {
      setUserData(null);
      setUserRepoData(null);
      setLoading(false);
      return;
    }
    setLoading(true);
    const timer = setTimeout(async () => {
      try {
        const userRes = await fetch(`https://api.github.com/users/${username}`);
        if (!userRes.ok) {
          setUserData({ message: "Not Found" });
          setUserRepoData(null);
          return;
        }

        const userData = await userRes.json();

        setUserData(userData);

        const reposRes = await fetch(`https://api.github.com/users/${username}/repos`);
        const userRepoData = await reposRes.json();

        setUserRepoData(userRepoData);

      } catch (error) {
        console.log(error);
        setUserData(null);
        setUserRepoData(null);
      } finally {
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
        loading && (
          <div className='flex justify-center items-center gap-3 text-center mt-4 text-gray-500'>
            <Spinner />
            <span className='mt-5'>Loading...</span>
          </div>
        )
      }

      {
        !loading && !username && <EmptyState />
      }

      {
        !loading && data && data.message === 'Not Found' && <UserNotFound />
      }

      {
        !loading && data && data.message !== 'Not Found' && (
          <ProfileCard userData={data} />
        )
      }

      {
        !loading &&
        data &&
        data.message !== 'Not Found' &&
        userRepoData && (
          <RepoCard userRepoData={userRepoData} />
        )
      }
    </>
  )
}

export default App
