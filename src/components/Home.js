import React from "react";
import Nav from "./Nav";
import Row from "./Row";
import Banner from "./Banner";
import url from "../utils/api";

function Home() {
  return (
    <div className="homeScreen">
      <Nav />
      <Banner />
      <Row title="NETFILX ORIGINAL" url={url.original} isLarge />
      <Row title="Trending Now" url={url.trending} />
      <Row title="Top rated" url={url.topRated} />
      <Row title="Horror movies" url={url.horroeMovies} />
      <Row title="Actoin movies" url={url.actionMovies} />
      <Row title="Romance movies" url={url.romanceMovies} />
      <Row title="Comedy movies" url={url.comedyMovies} />
      <Row title="Documentaries" url={url.documentaries} />
    </div>
  );
}

export default Home;
