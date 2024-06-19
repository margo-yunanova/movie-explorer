import { Theme, useTheme } from "@mui/material/styles";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { FC } from "react";
import { IGenre } from "../../types/types";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(genre: string, checkedGenres: readonly string[], theme: Theme) {
  return {
    fontWeight:
      checkedGenres.indexOf(genre) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

interface IMultipleSelect {
  genres: IGenre[];
  placeholder: string;
  handleMultipleSelect: (e: SelectChangeEvent<string[]>) => void;
  checkedGenres: string[];
}

export const MultipleSelect: FC<IMultipleSelect> = ({
  genres,
  placeholder,
  handleMultipleSelect,
  checkedGenres,
}) => {
  const theme = useTheme();

  return (
    <>
      <InputLabel id={`select ${placeholder} label`}>{placeholder}</InputLabel>
      <Select
        multiple
        value={checkedGenres}
        onChange={handleMultipleSelect}
        labelId={`select ${placeholder} label`}
        id={`select ${placeholder} label`}
        label={placeholder}
        MenuProps={MenuProps}
        inputProps={{ "aria-label": "Without label" }}
      >
        {genres?.map(({ name }) => (
          <MenuItem key={name} value={name} style={getStyles(name, checkedGenres, theme)}>
            {name}
          </MenuItem>
        ))}
      </Select>
    </>
  );
};
