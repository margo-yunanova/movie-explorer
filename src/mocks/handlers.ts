import { http, HttpResponse } from "msw";
import { genres, movies } from "./db";
import { options } from "../shared/api/api";

const getGenres = http.get(
  `${options.apiV1}/possible-values-by-field?field=genres.name`,
  ({ request }) => {
    const url = new URL(request.url);
    const field = url.searchParams.get("field");

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

const getMovies = http.get(`${options["apiV1.4"]}`, ({ request }) => {
  const url = new URL(request.url);
  const genresName = url.searchParams.getAll("genres.name");
  const year = url.searchParams.get("year")?.split("-");
  const ratingKp = url.searchParams.get("rating.kp")?.split("-");
  const page = url.searchParams.getAll("page");
  const limit = url.searchParams.getAll("limit");

  let filteredMovies = movies.docs;
  if (genresName.length > 0) {
    filteredMovies = filteredMovies.filter((movies) => {
      if (movies.genres && movies.genres.length > 0) {
        const genres = movies.genres.map((genre) => genre.name);
        return genresName.every((genre) => genres.includes(genre));
      }
      return false;
    });
  }

  if (year) {
    const [from, to] = year;
    filteredMovies = filteredMovies.filter(
      (movie) => movie.year && movie.year >= +from && movie.year <= +to
    );
  }

  if (ratingKp) {
    const [from, to] = ratingKp;
    filteredMovies = filteredMovies.filter((movie) => {
      return movie.rating?.kp && movie.rating.kp >= +from && movie.rating.kp <= +to;
    });
  }

  const paginationInfo = {
    total: filteredMovies.length,
    limit: +limit,
    page: +page,
    pages: Math.ceil(filteredMovies.length / +limit),
  };
  const firstMovieIndex = (+page - 1) * +limit;
  const lastMovieIndex = firstMovieIndex + +limit;
  filteredMovies = filteredMovies.slice(firstMovieIndex, lastMovieIndex);

  return HttpResponse.json({
    docs: filteredMovies,
    ...paginationInfo,
  });
});

export const handlers = [getGenres, getMovieById, getMovies];
