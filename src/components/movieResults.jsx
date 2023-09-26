export default function MovieResults({ results }) {
  return (
    <div>
      {results.map((movie) => (
        <p key={movie.id}>Result: {movie.original_title}</p>
      ))}
    </div>
  );
}
