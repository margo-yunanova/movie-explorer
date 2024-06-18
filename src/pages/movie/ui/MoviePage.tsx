import { Button, Chip, Collapse, Grid, Paper, Typography } from "@mui/material";
import { MouseEventHandler, useEffect, useLayoutEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieById } from "../../../shared/api/api";
import { IGenre } from "../../../shared/types/types";

export interface IMoviePage {
  id: number;
  name: string;
  year: number;
  description: string | null;
  rating: Record<"kp", number>;
  genres: IGenre[];
  poster: Record<"url", string>;
}

export const MoviePage = () => {
  const { id } = useParams();
  const [data, setData] = useState<IMoviePage | undefined>(undefined);

  useEffect(() => {
    getMovieById(id!).then((res) => setData(res));
  }, [id]);

  const descriptionRef = useRef<HTMLDivElement>(null);
  const descriptionHeight = 200;

  const [fullDescription, setFullDescription] = useState(false);

  const handleFullDescriptionButton: MouseEventHandler = () => {
    setFullDescription(!fullDescription);
  };

  useLayoutEffect(() => {
    const scrollHeight = descriptionRef.current?.scrollHeight;
    if (scrollHeight && scrollHeight < descriptionHeight) setFullDescription(true);
  }, []);

  return (
    <Paper elevation={0}>
      <Grid container spacing={{ xs: 2, md: 3 }} alignItems="flex-start">
        <Grid item container justifyContent="center" sm={4} md={4} paddingBottom={3}>
          {data?.poster.url ? (
            <img src={data?.poster.url} style={{ objectFit: "contain", width: "100%" }} />
          ) : (
            <Typography variant="h6">Постер скоро будет добавлен</Typography>
          )}
        </Grid>
        <Grid
          item
          xs={12}
          sm={8}
          md={8}
          container
          direction="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          rowSpacing={2}
        >
          <Grid item>
            <Typography variant="h3" color="text.primary">
              {data?.name}
            </Typography>
          </Grid>
          <Grid item container>
            <Grid item xs={4.5} md={3}>
              <Chip
                label={`Рейтинг Кинопоиска ${(data?.rating?.kp ?? 0).toFixed(2)}`}
                color="success"
                variant="outlined"
                sx={{
                  height: "auto",
                  "& .MuiChip-label": {
                    display: "block",
                    whiteSpace: "normal",
                  },
                }}
              />
            </Grid>
            <Grid item xs={2} md={3} paddingLeft={1}>
              <Typography variant="h6" color="text.primary">
                {data?.year}
              </Typography>
            </Grid>
            <Grid item xs={5.5} md={6}>
              <Typography variant="h6" color="text.secondary" textAlign="right">
                {data?.genres.map((item) => item.name).join(", ")}
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Collapse in={fullDescription} collapsedSize={`${descriptionHeight}px`}>
              <Typography variant="body1" color="text.primary" ref={descriptionRef}>
                {data?.description ?? "Описание фильма скоро появится"}
              </Typography>
            </Collapse>
            {!fullDescription && (
              <Button variant="outlined" onClick={handleFullDescriptionButton}>
                Развернуть описание
              </Button>
            )}
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};
