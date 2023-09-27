import Image from "next/image";
import React from "react";

async function getMovie(id) {
  const API_KEY = process.env.API_KEY;
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`
  );
  return res.json();
}

export default async function MovieDetail({ params }) {
  const movie = await getMovie(params.id);
  console.log(movie);
  return (
    <>
      <div className="flex flex-col md:flex-row items-start justify-center max-w-6xl gap-5 pt-4 mx-auto">
        <div className="w-1/2 md:w-full">
          <Image
            src={`https://image.tmdb.org/t/p/original/${
              movie.backdrop_path || movie.poster_path
            }`}
            placeholder="blur"
            blurDataURL="/spinner.svg"
            width={600}
            height={200}
            style={{
              maxWith: "100%",
              height: "100%",
            }}
            alt="Movie Poster"
            className="rounded-lg"
          ></Image>
        </div>
        <div className="w-1/2 md:w-full space-y-2 text-md">
          <h1 className="text-2xl font-bold">
            {movie.title || movie.orignal_title}
          </h1>
          <p>
            <span className="font-semibold mr-1">Overview</span>{" "}
            {movie.overview}
          </p>
          <p>
            <span className="font-semibold mr-1">Relaese Data</span>
            {movie.release_date || movie.first_air_date}
          </p>
          <p>
            <span className="font-semibold mr-1">Voted</span> {movie.vote_count}
          </p>
          <p>
            <span className="font-semibold mr-1">Genres</span>
            {movie.genres.map((genre) => (
              <span key={genre.id}>{genre.name && genre.name + ", "} </span>
            ))}
          </p>
        </div>
      </div>
      <div className="flex  items-start justify-center max-w-6xl  pt-4 mx-auto">
        <div class="relative overflow-x-auto w-full">
          <table class="w-full text-md text-left text-gray-500 dark:text-gray-400">
            <tbody>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Production Companies
                </td>
                <td class="px-6 py-4">
                  {movie.production_companies.map((pcom) => (
                    <>
                      <p
                        key={pcom.id}
                        className="border-b border-slate-400 mb-2 pb-2"
                      >
                        <Image
                          src={`https://image.tmdb.org/t/p/original/${pcom.logo_path}`}
                          placeholder="blur"
                          blurDataURL="/spinner.svg"
                          width={100}
                          height={50}
                          style={{
                            maxWith: "100px",
                            height: "auto",
                          }}
                          alt="Movie Poster"
                          className="rounded-lg"
                        ></Image>
                        <p className="mt-2">{pcom.name}</p>
                      </p>
                      <p>
                        <span>Origin: </span> {pcom.origin_country}
                      </p>
                    </>
                  ))}
                </td>
              </tr>
              <tr>
                <td
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Production Countries
                </td>
                <td class="px-6 py-4">
                  {movie.production_countries.map((pc) => (
                    <span key={pc.iso_3166_1}>{pc.name && pc.name + ", "}</span>
                  ))}
                </td>
              </tr>
              <tr>
                <td
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Genres
                </td>
                <td class="px-6 py-4">
                  {movie.genres.map((genre) => (
                    <span key={genre.id}>
                      {genre.name && genre.name + ", "}{" "}
                    </span>
                  ))}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
