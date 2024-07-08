import React from "react";
import Row from "../Components/Row";
import requests from "../requestApi/request";
import Banner from "../Components/Banner";
import Navbar from "../Components/Navbar";

function Home() {
  return (
    <div>
      <Navbar/> 
    <Banner fetchUrl={requests.fetchTrending}/>
      <Row change={true} fetchUrl={requests.fetchTrending} title={"Trending"} />
      <Row
        title={"Netflix Originals"}
        fetchUrl={requests.fetchNetflixOriginals}
      />
      <Row title={"TopRated"} fetchUrl={requests.fetchTopRated} />
      <Row title={"Action Movies"} fetchUrl={requests.fetchActionMovies} />
      <Row title={"Comedy Movies"} fetchUrl={requests.fetchComedyMovies} />
      <Row title={"Horror Movies"} fetchUrl={requests.fetchHorrorMovies} />
      <Row title={"Romantic Movies"} fetchUrl={requests.fetchRomanceMovies} />
      <Row title={"Documentaries"} fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default Home;
