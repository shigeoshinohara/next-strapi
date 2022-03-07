import Card from "../components/Card";

const Home = ({ movies }) => {
  console.log(movies);
  return (
    <div className="container">
      {movies.map((movie) => (
        <Card key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export async function getServerSideProps() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}movies?populate=*`
  );
  const data = await res.json();

  return {
    props: {
      // データはdataにページ情報などはmetaに入っているためdataから取り出す
      movies: data.data,
    },
  };
}

export default Home;
