import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea, Chip, Stack } from "@mui/material";
import { FC } from "react";

interface IMovieCard {
  name: string;
  year: number;
  rating: number;
  poster: string;
  genres: Record<"name", string>[];
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
    <Card elevation={5} sx={{ width: "100%" }}>
      <CardActionArea onClick={handleClick}>
        <CardMedia component="img" alt={`Постер фильма ${name}`} src={poster} />
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
                {genres.map((item) => item.name).join(", ")}
              </Typography>
            </Stack>
            <Chip label={rating} color="success" variant="outlined" />
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
