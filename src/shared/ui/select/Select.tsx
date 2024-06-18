import MenuItem from "@mui/material/MenuItem";
import BaseSelect, { SelectChangeEvent } from "@mui/material/Select";
import { FC } from "react";
import { OutlinedInput } from "@mui/material";

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
    <BaseSelect
      displayEmpty
      input={<OutlinedInput />}
      renderValue={(selected) => {
        if (selected.length === 0) {
          return <em>{placeholder}</em>;
        }

        return selected;
      }}
      value={value}
      onChange={handleSelect}
      inputProps={{ "aria-label": "Without label" }}
      MenuProps={MenuProps}
    >
      <MenuItem disabled value="">
        <em>{placeholder}</em>
      </MenuItem>
      {values.map((value) => (
        <MenuItem value={value}>{value}</MenuItem>
      ))}
    </BaseSelect>
  );
};
