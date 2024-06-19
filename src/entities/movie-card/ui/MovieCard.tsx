import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea, Chip, Stack } from "@mui/material";
import { FC } from "react";
import { IGenre } from "../../../shared/types/types";

export interface IMovieCard {
  id: number;
  name: string;
  year?: number;
  rating?: { kp: number };
  poster?: { url: string; previewUrl: string };
  genres?: IGenre[];
  handleClick: () => void;
}

export const MovieCard: FC<IMovieCard> = ({
  name,
  year,
  rating,
  poster,
  genres,
  handleClick,
}) => {
  // TODO разобраться с высотой и растягиванием карточки
  return (
    <Card elevation={5}>
      <CardActionArea onClick={handleClick}>
        <Box display="flex" sx={{ aspectRatio: "2/3" }}>
          {poster?.previewUrl ? (
            <CardMedia
              component="img"
              alt={`Постер фильма ${name}`}
              src={poster?.previewUrl}
              style={{ flexGrow: 1 }}
            />
          ) : (
            <Typography variant="h6">Постер скоро будет добавлен</Typography>
          )}
        </Box>
        <CardContent>
          <Stack
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            gap="5px"
          >
            <Stack display="flex" flexDirection="column">
              <Typography variant="body1" color="text.primary">
                {name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {year}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {genres?.map((item) => item.name).join(", ")}
              </Typography>
            </Stack>
            <Chip label={rating?.kp.toFixed(2)} color="success" variant="outlined" />
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
