import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import BaseSelect, { SelectChangeEvent } from "@mui/material/Select";
import { FC } from "react";

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

export interface ISelect {
  values: number[] | string[];
  placeholder: string;
  value: string;
  handleSelect: (e: SelectChangeEvent) => void;
}

export const Select: FC<ISelect> = ({ values, placeholder, value, handleSelect }) => {
  return (
    <>
      <InputLabel id={`select ${placeholder} label`}>{placeholder}</InputLabel>
      <BaseSelect
        labelId={`select ${placeholder} label`}
        id={`select ${placeholder} label`}
        value={value}
        onChange={handleSelect}
        inputProps={{ "aria-label": "Without label" }}
        MenuProps={MenuProps}
        label={placeholder}
      >
        {values.map((value, i) => (
          <MenuItem key={i} value={value}>
            {value}
          </MenuItem>
        ))}
      </BaseSelect>
    </>
  );
};
