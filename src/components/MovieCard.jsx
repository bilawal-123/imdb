import Image from "next/image";
import Link from "next/link";
import { TbThumbUp } from "react-icons/tb";
export default function MovieCard({ result }) {
  return (
    <div className="group border p-2 rounded-lg hover:shadow-md shadow-slate-300 transition-shadow duration-200">
      <Link href={`/movie/${result.id}`}>
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            result.backdrop_path || result.poster_path
          }`}
          placeholder="blur"
          blurDataURL="/spinner.svg"
          width={1000}
          height={200}
          style={{
            maxWith: "100%",
            height: "auto",
            maxHeight: "150px",
          }}
          alt="Movie Poster"
          className="object-cover rounded-t-lg group-hover:opacity-80 transition-opacity duration-200"
        ></Image>
      </Link>
      {/* <p>{result.id}</p> */}
      <p className="line-clamp-2 mt-4 text-sm">{result.overview}</p>
      <h4 className="font-bold text-md my-2 truncate">
        {result.title || result.original_title || result.name}
      </h4>
      <div className="flex items-center mb-2 justify-start gap-3 text-sm">
        <p>{result.release_date || result.first_air_date}</p>
        <p className="flex items-center">
          <TbThumbUp className="text-lg mr-1" /> {result.vote_count}
        </p>
      </div>
    </div>
  );
}
