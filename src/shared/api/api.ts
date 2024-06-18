import axios from "axios";

const options = {
  apiV1: "https://api.kinopoisk.dev/v1/movie",
  "apiV1.4": "https://api.kinopoisk.dev/v1.4/movie",
  headers: { accept: "application/json", "X-API-KEY": "W2J699Q-A004MEQ-QT01BZJ-J86BKQW" },
};

type TGenre = { name: string };

export type TMovie = {
  id: number;
  name: string;
  year?: number;
  rating?: { imdb: number };
  poster?: { url: string };
  genres?: TGenre[];
};

type TGetMoviesResponse = {
  docs: TMovie[];
};

export const getMovies = async ({
  page = "1",
  limit = "50",
  genres,
  years,
  rating,
}: {
  page?: string;
  limit?: string;
  genres?: string[];
  years?: { from: string; to: string };
  rating?: string;
}) => {
  try {
    const params = {
      page,
      limit,
      year: `${years.from}-${years.to}`,
    };

    const query = new URLSearchParams(params);

    const response = await axios.get<TGetMoviesResponse>(
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

type TGetMovieResponse = {
  id: number;
  name: string;
  year: number;
  description: string | null;
  rating: Record<"kp", number>;
  genres: TGenre[];
  poster: Record<"url", string>;
};

export const getMovieById = async (id: string) => {
  try {
    const response = await axios.get<TGetMovieResponse>(`${options["apiV1.4"]}/${id}`, {
      headers: options.headers,
    });

    return response.data;
  } catch (error) {
    console.error(error);
  }
};

type TGetGenreResponse = { name: string }[];

export const getGenres = async () => {
  try {
    const response = await axios.get<TGetGenreResponse>(
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
