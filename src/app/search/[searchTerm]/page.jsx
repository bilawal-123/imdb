import MovieResults from "@/components/MovieResults";

export default async function SearchPage({ params }) {
  //   const API_KEY = process.env.API_KEY;
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${params.searchTerm}`
    // `https://api.themoviedb.org/3/search/movie?query=Jack+Reacher&api_key=41ab1e9cab7800140b85f312f3d9054c`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  const results = data.results;

  return <MovieResults results={results} />;
}
