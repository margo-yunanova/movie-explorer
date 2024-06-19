import { useNavigate } from "react-router-dom";
import { MovieCard } from "../../../entities/movie-card";
import { Button, Container, Grid, Pagination, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { TGetMoviesResponse, getGenres, getMovies } from "../../../shared/api/api";
import { MultipleSelect } from "../../../shared/ui/multiple-select";
import { SelectChangeEvent } from "@mui/material/Select";
import { IGenre } from "../../../shared/types/types";
import { Select } from "../../../shared/ui/select";
import { range } from "../../../shared/utils/constants";
import FormControl from "@mui/material/FormControl";

const LIMIT_MOVIES = 50;
const years = range(1990, 2025, 1);
const rating = range(0, 10, 1);

type TFilters = {
  genres: string[];
  yearFrom?: number;
  yearTo?: number;
  ratingFrom?: number;
  ratingTo?: number;
};

export const HomePage = () => {
  const navigate = useNavigate();
  const [filterDraft, setFilterDraft] = useState<TFilters>({ genres: [] });
  const [filter, setFilter] = useState<TFilters>(filterDraft);

  const [movies, setMovies] = useState<TGetMoviesResponse | undefined>(undefined);
  const [genres, setGenres] = useState<IGenre[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  const pagination = movies?.docs && movies?.docs?.length > 0 && (
    <Container sx={{ display: "flex", justifyContent: "center", pt: 2, pb: 3 }}>
      <Pagination
        count={movies?.pages}
        variant="outlined"
        shape="rounded"
        page={currentPage}
        onChange={(_, value: number) => setCurrentPage(value)}
      />
    </Container>
  );

  const handleChange = (event: SelectChangeEvent<typeof filterDraft.genres>) => {
    const genres = event.target.value;

    setFilterDraft({
      ...filterDraft,
      genres: typeof genres === "string" ? genres.split(",") : genres,
    });
  };

  const handleFilter = async () => {
    setFilter(filterDraft);
    setCurrentPage(1);
  };

  useEffect(() => {
    let isStale = false;
    getMovies({
      page: currentPage,
      limit: LIMIT_MOVIES,
      genres: filter.genres,
      rating: {
        from: filter.ratingFrom?.toString() ?? "",
        to: filter.ratingTo?.toString() ?? "",
      },
      years: {
        from: filter.yearFrom?.toString() ?? "",
        to: filter.yearTo?.toString() ?? "",
      },
    }).then((data) => {
      if (!isStale) setMovies(data);
    });
    return () => {
      isStale = true;
    };
  }, [currentPage, filter]);

  useEffect(() => {
    getGenres().then((genres) => setGenres(genres));
  }, []);

  return (
    <>
      <Grid container columnGap={1} justifyContent="center">
        <Grid item xs={12} sm={4} md={4.5}>
          <FormControl sx={{ m: 1, width: "100%", mt: 3 }}>
            <MultipleSelect
              genres={genres}
              placeholder="Выберите жанры"
              handleMultipleSelect={handleChange}
              checkedGenres={filterDraft.genres}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={4} md={2}>
          <FormControl sx={{ m: 1, width: "100%", mt: 3 }}>
            <Select
              values={years}
              placeholder="Года выпуска c"
              value={filterDraft.yearFrom?.toPrecision() ?? ""}
              handleSelect={(e) =>
                setFilterDraft({ ...filterDraft, yearFrom: +e.target.value })
              }
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={4} md={2}>
          <FormControl sx={{ m: 1, width: "100%", mt: 3 }}>
            <Select
              values={years}
              placeholder="Года выпуска по"
              value={filterDraft.yearTo?.toString() ?? ""}
              handleSelect={(e) =>
                setFilterDraft({ ...filterDraft, yearTo: +e.target.value })
              }
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={4} md={1.5}>
          <FormControl sx={{ m: 1, width: "100%", mt: 3 }}>
            <Select
              values={rating}
              placeholder="Рейтинг c"
              value={filterDraft.ratingFrom?.toString() ?? ""}
              handleSelect={(e) =>
                setFilterDraft({ ...filterDraft, ratingFrom: +e.target.value })
              }
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={4} md={1.5}>
          <FormControl sx={{ m: 1, width: "100%", mt: 3 }}>
            <Select
              values={rating}
              placeholder="Рейтинг по"
              value={filterDraft.ratingTo?.toString() ?? ""}
              handleSelect={(e) =>
                setFilterDraft({ ...filterDraft, ratingTo: +e.target.value })
              }
            />
          </FormControl>
        </Grid>
      </Grid>
      <Container sx={{ display: "flex", justifyContent: "center", pt: 2, pb: 3 }}>
        <Button variant="contained" onClick={handleFilter}>
          Поиск
        </Button>
      </Container>

      {pagination}

      {movies && movies.total === 0 && (
        <Container sx={{ display: "flex", justifyContent: "center", pt: 2, pb: 3 }}>
          <Typography>Результаты поиска по вашему запросу отсутствуют</Typography>
        </Container>
      )}
      <Grid container spacing={{ xs: 2, md: 3 }} alignItems="stretch">
        {movies?.docs?.map(({ id, name, year, rating, poster, genres }) => (
          <Grid item xs={12} sm={4} md={3} key={id} display="flex" alignItems="stretch">
            <MovieCard
              id={id}
              name={name}
              year={year}
              rating={rating}
              poster={poster}
              genres={genres}
              handleClick={() => navigate(`/movie/${id}`)}
            />
          </Grid>
        ))}
      </Grid>
      {pagination}
    </>
  );
};
