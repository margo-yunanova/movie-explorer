import axios from "axios";
import { IMoviePage } from "../../pages/movie/ui/MoviePage";
import { IMovieCard } from "../../entities/movie-card/ui/MovieCard";
import { IGenre } from "../types/types";

const options = {
  apiV1: "https://api.kinopoisk.dev/v1/movie",
  "apiV1.4": "https://api.kinopoisk.dev/v1.4/movie",
  headers: { accept: "application/json", "X-API-KEY": "W2J699Q-A004MEQ-QT01BZJ-J86BKQW" },
};

export const getMovies = async ({
  page = "1",
  limit = "50",
  genre,
  years,
  rating,
}: {
  page?: string;
  limit?: string;
  genres?: string[];
  years?: { from: ""; to: "" };
  rating?: string;
}) => {
  try {
    const params = {
      page,
      limit,
      year: `${years.from}-${years.to}`,
    };

    const query = new URLSearchParams(params);

    const response = await axios.get<Record<"docs", IMovieCard[]>>(
      `${
        options["apiV1.4"]
      }?${query.toString()}&selectFields=id&selectFields=description&selectFields=rating&selectFields=name&selectFields=poster&selectFields=genres&selectFields=year&notNullFields=poster.url&notNullFields=name&sortField=rating.kp&sortType=-1&type=movie`,
      { headers: options.headers }
    );
    return response.data?.docs;
  } catch (error) {
    console.error(error);
  }
};

export const getMovieById = async (id: string) => {
  try {
    const response = await axios.get<IMoviePage>(`${options["apiV1.4"]}/${id}`, {
      headers: options.headers,
    });

    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getGenres = async () => {
  try {
    const response = await axios.get<IGenre[]>(
      `${options.apiV1}/possible-values-by-field?field=genres.name`,
      {
        headers: options.headers,
      }
    );

    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};
