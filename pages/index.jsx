import { Nav, Banner, Row } from "../components";
import urls from "../src/utils/api";
import { Protect } from "../src/utils/protected";
import request from "../src/utils/axios";

export default function Home({ movies }) {
  return (
    <div className="homeScreen">
      <Nav />
      <Banner />
      <Row title="NETFILX ORIGINAL" movies={movies[0]} isLarge />
      <Row title="Trending Now" movies={movies[1]} />
      <Row title="Top rated" movies={movies[2]} />
      <Row title="Horror movies" movies={movies[3]} />
      <Row title="Actoin movies" movies={movies[4]} />
      <Row title="Romance movies" movies={movies[5]} />
      <Row title="Comedy movies" movies={movies[6]} />
      <Row title="Documentaries" movies={movies[7]} />
    </div>
  );
}

export const getServerSideProps = async (ctx) =>
  Protect(ctx, async (_) => {
    let movies = await Promise.all(
      Object.values(urls).map(async function (url) {
        const response = await request.get(url);

        return [response.data];
      })
    );

    return { props: { movies } };
  });
