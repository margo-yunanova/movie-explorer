import { Theme, useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
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
    <div>
      <FormControl sx={{ m: 1, width: "100%", mt: 3 }}>
        <Select
          multiple
          displayEmpty
          value={checkedGenres}
          onChange={handleMultipleSelect}
          input={<OutlinedInput />}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return <em>{placeholder}</em>;
            }

            return selected.join(", ");
          }}
          MenuProps={MenuProps}
          inputProps={{ "aria-label": "Without label" }}
        >
          <MenuItem disabled value="">
            <em>{placeholder}</em>
          </MenuItem>
          {genres?.map(({ name }) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, checkedGenres, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};
