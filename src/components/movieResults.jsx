import MovieCard from "./MovieCard";

export default function MovieResults({ results }) {
  return (
    <div className="p-2 grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  max-w-6xl mx-auto">
      {results.map((movie) => (
        <MovieCard key={movie.id} result={movie} />
      ))}
    </div>
  );
}
