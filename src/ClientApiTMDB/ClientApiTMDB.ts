type MoviePage = {
    page: number
    results: Movie[]
}

type Movie = {
    title: string
    poster_path: string
    id: number
}



async function getMoviePage(){

    const response= await fetch('https://api.themoviedb.org/3/discover/movie'+'?api_key='+'34713abba31235292ef755be25fd8bd7'+'&page=1');
    const moviePage = await response.json() as MoviePage;
    //console.log('patyMovies',moviePage)
    return moviePage;
}

export default getMoviePage;


export async function getMovie({ number: id}:{number:number}){
    //https://api.themoviedb.org/3/movie/1011985
    const movie= await fetch('https://api.themoviedb.org/3/movie/'+ id)
    const movieJson= await movie.json() as MoviePage;
    return movieJson;
}