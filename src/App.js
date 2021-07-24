import axios from 'axios';
import { useEffect, useState } from 'react';
import { Repo } from './components/repo/repo';
function App() {
  const [trandingRepos, setTrandingRepos] = useState([]);
  const [page,setPage]=useState(1);
  const scrollHandler=(e)=>{
    const { scrollTop, clientHeight, scrollHeight } = e.currentTarget;
    if (scrollHeight - scrollTop === clientHeight) 
      {
        setPage(prev=>prev+1);
      }
  }
  useEffect(() => {
    // console.log(`page ${page}`)
      const getTrandingRepos = async () => {
      const res = await (await axios.get(`https://api.github.com/search/repositories?q=created:>2017-10-22&sort=stars&order=desc&page=${page}`)).data.items;
      // console.log(`https://api.github.com/search/repositories?q=created:>2017-10-22&sort=stars&order=desc&page=${page}`)
      setTrandingRepos((prev)=>[...prev, ...res])
      // console.log(trandingRepos)
    }
    getTrandingRepos();
  }, [page])

  return (
    <div className="App">
      <div onScroll={scrollHandler} style={{height:"800px",overflow:"auto"}}>
      {trandingRepos&&trandingRepos.map((repo,index) => {
        return (
            <Repo
            
              key={index}
              imgUrl={repo.owner.avatar_url}
              name={repo.name} desc={repo.description}
              stars={repo.stargazers_count}
              issues={repo.open_issues_count}
              pushedAt={repo.pushed_at} login={repo.owner.login} />
               )
      })}
      </div>
    </div>
  );
}

export default App;
