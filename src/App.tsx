import { useEffect, useState } from 'react';
import getMovies from './ClientApiTMDB/ClientApiTMDB.ts'

// type MoviePage={
//   page: number
//   results: Movie[]
// }

type Movie={
  title: string
  poster_path: string
}

function App() {
  const [page, setPage]= useState<Movie[]>([]);

  useEffect(()=>{
    const getPage =async()=>{
      const movies= await getMovies();
      setPage(movies.results);
    }
    getPage();
  },[])

  const allMovies= page.map((movie)=>{
    return <img src={'https://image.tmdb.org/t/p/w200/'+movie.poster_path} alt='posterMovie'/>
  })
  
  console.log('patypage',page)


  return (
    <>
     {allMovies}
    </>
  )
}

export default App
