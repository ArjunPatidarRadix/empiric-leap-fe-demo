import React from "react";
import "./SearchBar.css";
import { IconButton, TextField } from "@mui/material";
import { SearchOutlined } from "@mui/icons-material";

function SearchBar() {
  return (
    <div className="search-root">
      <TextField
        fullWidth
        id="standard-bare"
        variant="outlined"
        placeholder="Search"
        sx={{
          // Root class for the input field
          "& .MuiOutlinedInput-root": {
            color: "#fff",
            fontFamily: "Arial",
            // Class for the border around the input field
            "& .MuiOutlinedInput-notchedOutline": {
              borderWidth: "0px",
            },
          },
        }}
        InputProps={{
          endAdornment: (
            <IconButton>
              <SearchOutlined style={{ color: "#fff" }} />
            </IconButton>
          ),
        }}
      />
    </div>
  );
}

export default SearchBar;
