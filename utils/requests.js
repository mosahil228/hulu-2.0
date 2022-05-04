const API_KEY=process.env.API_KEY;
export default{
   
    fetchTrending:{
        title:"Trending",
        url:`/trending/all/week?api_key=${API_KEY}&language=en-US`,
    },
    fetchTopRated:{
        title:"Top-Rated",
        url:`/trending/romance/day?api_key=${API_KEY}&language=en-US`,
    },
   
    fetchActionMovies:{
        title:"Action",
        url:`/trending/all/week?api_key=${API_KEY}&language=en-US`,
    },
    fetchComedyMovies:{
        title:"Comedy",
        url:`/trending/all/week?api_key=${API_KEY}&language=en-US`,
    },
    fetchHorrorMovies:{
        title:"Horror",
        url:`/trending/all/week?api_key=${API_KEY}&language=en-US`,
    },
    fetchRomanceMovies:{
        title:"Romance",
        url:`/trending/all/week?api_key=${API_KEY}&language=en-US`,
    },
    fetchMystery:{
        title:"Mystery",
        url:`/trending/all/week?api_key=${API_KEY}&language=en-US`,
    },
    fetchSciFi:{
        title:"Sci-Fi",
        url:`/trending/all/week?api_key=${API_KEY}&language=en-US`,
    },
    fetchWestern:{
        title:"Western",
        url:`/trending/all/week?api_key=${API_KEY}&language=en-US`,
    },
    fetchAnimation:{
        title:"Animation",
        url:`/trending/all/week?api_key=${API_KEY}&language=en-US`,
    },
    fetchTv:{
        title:"Tv",
        url:`/trending/all/week?api_key=${API_KEY}&language=en-US`,
    },
    
}