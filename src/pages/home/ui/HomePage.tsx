import { useNavigate } from "react-router-dom";
import { MovieCard } from "../../../entities/movie-card";
import { Button, Container, Grid, Pagination } from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import { TMovie, getGenres, getMovies } from "../../../shared/api/api";
import { MultipleSelect } from "../../../shared/ui/multiple-select";
import { SelectChangeEvent } from "@mui/material/Select";
import { IGenre } from "../../../shared/types/types";
import { Select } from "../../../shared/ui/select";
import { range } from "../../../shared/utils/constants";
import FormControl from "@mui/material/FormControl";

const LIMIT_MOVIES = 50;

export const HomePage = () => {
  const navigate = useNavigate();

  const [movies, setMovies] = useState<TMovie[] | undefined>(undefined);
  const [checkedGenres, setCheckedGenres] = useState<string[]>([]);
  const [genres, setGenres] = useState<IGenre[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  const handleChange = (event: SelectChangeEvent<typeof checkedGenres>) => {
    const {
      target: { value },
    } = event;
    setCheckedGenres(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const [checkedYears, setCheckedYears] = useState({ from: "", to: "" });

  const years = useMemo(() => range(1990, 2025, 1), []);

  const [checkedRating, setCheckedRating] = useState({ from: "", to: "" });
  const rating = useMemo(() => range(0, 10, 1), []);

  const handleFilter = async () => {
    const filteredMovies = await getMovies({
      page: currentPage,
      limit: LIMIT_MOVIES,
      genres: checkedGenres,
      rating: checkedRating,
      years: checkedYears,
    });

    setMovies(filteredMovies);
  };

  useEffect(() => {
    Promise.all([
      getMovies({ page: currentPage, limit: LIMIT_MOVIES }),
      getGenres(),
    ]).then(([data, genres]) => {
      setMovies(data);
      setGenres(genres);
    });
  }, [currentPage]);

  return (
    <>
      <Grid container columnGap={1} justifyContent="center">
        <Grid item xs={12} sm={4} md={4.5}>
          <FormControl sx={{ m: 1, width: "100%", mt: 3 }}>
            <MultipleSelect
              genres={genres}
              placeholder="Выберите жанры"
              handleMultipleSelect={handleChange}
              checkedGenres={checkedGenres}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={4} md={2}>
          <FormControl sx={{ m: 1, width: "100%", mt: 3 }}>
            <Select
              values={years}
              placeholder="Года выпуска c"
              value={checkedYears.from}
              handleSelect={(e) =>
                setCheckedYears({ ...checkedYears, from: e.target.value })
              }
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={4} md={2}>
          <FormControl sx={{ m: 1, width: "100%", mt: 3 }}>
            <Select
              values={years}
              placeholder="Года выпуска по"
              value={checkedYears.to}
              handleSelect={(e) =>
                setCheckedYears({ ...checkedYears, to: e.target.value })
              }
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={4} md={1.5}>
          <FormControl sx={{ m: 1, width: "100%", mt: 3 }}>
            <Select
              values={rating}
              placeholder="Рейтинг c"
              value={checkedRating.from}
              handleSelect={(e) =>
                setCheckedRating({ ...checkedRating, from: e.target.value })
              }
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={4} md={1.5}>
          <FormControl sx={{ m: 1, width: "100%", mt: 3 }}>
            <Select
              values={rating}
              placeholder="Рейтинг по"
              value={checkedRating.to}
              handleSelect={(e) =>
                setCheckedRating({ ...checkedRating, to: e.target.value })
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
      <Container sx={{ display: "flex", justifyContent: "center", pt: 2, pb: 3 }}>
        <Pagination
          count={5}
          variant="outlined"
          shape="rounded"
          page={currentPage}
          onChange={(_, value: number) => setCurrentPage(value)}
        />
      </Container>
      <Grid container spacing={{ xs: 2, md: 3 }} alignItems="stretch">
        {movies?.map(({ id, name, year, rating, poster, genres }) => (
          <Grid item xs={12} sm={4} md={3} key={id} display="flex" alignItems="strech">
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
      <Container sx={{ display: "flex", justifyContent: "center", pt: 2, pb: 3 }}>
        <Pagination
          count={5}
          variant="outlined"
          shape="rounded"
          page={currentPage}
          onChange={(_, value: number) => setCurrentPage(value)}
        />
      </Container>
    </>
  );
};
