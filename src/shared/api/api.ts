import axios from "axios";

export const options = {
  apiV1: "https://api.kinopoisk.dev/v1/movie",
  "apiV1.4": "https://api.kinopoisk.dev/v1.4/movie",
  headers: { accept: "application/json", "X-API-KEY": "W2J699Q-A004MEQ-QT01BZJ-J86BKQW" },
};

type TGenre = { name: string };

export type TMovie = {
  id: number;
  name: string;
  year?: number;
  rating?: {
    kp: number;
    imdb: number;
    filmCritics: number;
    russianFilmCritics: number;
    await: number | null;
  };
  poster?: { url: string; previewUrl: string };
  genres?: TGenre[];
  description: string | null;
};

export type TGetMoviesResponse = {
  docs: TMovie[];
};

export const getMovies = async ({
  page,
  limit,
  genres,
  years,
  rating,
}: {
  page: string;
  limit: string;
  genres?: string[];
  years?: { from: string; to: string };
  rating?: { from: string; to: string };
}) => {
  try {
    const params = {
      page,
      limit,
      sortField: "rating.kp",
      sortType: "1",
      type: "movie",
    };

    const query = new URLSearchParams(params);

    const fieldsForQuery = {
      selectFields: ["id", "rating", "name", "genres", "poster", "year"],
      notNullFields: ["poster.url", "name"],
      "genres.name": genres ?? [],
    };

    for (const [fields, values] of Object.entries(fieldsForQuery)) {
      for (const value of values) {
        query.append(fields, value);
      }
    }

    if (years?.from || years?.to) {
      query.append(
        "year",
        `${years.from !== "" ? years.from : 1900}-${years.to !== "" ? years.to : 3000}`
      );
    }

    if (rating?.from || rating?.to) {
      query.append(
        "rating.kp",
        `${rating.from !== "" ? rating.from : 0}-${rating.to !== "" ? rating.to : 10}`
      );
    }

    const response = await axios.get<TGetMoviesResponse>(
      `${options["apiV1.4"]}?${query.toString()}
      `,
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
  poster: { url: string; previewUrl: string };
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

export type TGetGenreResponse = { name: string }[];

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
