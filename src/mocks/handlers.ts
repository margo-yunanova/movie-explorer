import { http, HttpResponse } from "msw";
import { genres, movies } from "./db";
import { options } from "../shared/api/api";

const getGenres = http.get(
  `${options.apiV1}/possible-values-by-field?field=genres.name`,
  ({ request }) => {
    const url = new URL(request.url);
    const field = url.searchParams.get("field");
    console.log("worker");
    if (field === "genres.name") {
      return HttpResponse.json(genres);
    }

    return HttpResponse.json({});
  }
);

const getMovieById = http.get(`${options["apiV1.4"]}/:id`, ({ params }) => {
  const { id } = params;
  const movie = movies.docs.find((movie) => movie.id === +id);
  return HttpResponse.json(movie);
});

const getMovies = http.get(`${options["apiV1.4"]}`, () => {
  return HttpResponse.json(movies);
});

export const handlers = [getGenres, getMovieById, getMovies];
