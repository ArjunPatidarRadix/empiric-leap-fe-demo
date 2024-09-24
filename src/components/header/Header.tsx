import React, { Dispatch, SetStateAction, useState } from "react";
import "./Header.css";
import SearchBar from "../searchBar/SearchBar";
import HeaderTitle from "../headerTitle/HeaderTitle";
import { MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { IoLogOutOutline } from "react-icons/io5";
import { removeToken } from "../../utils/util";
import { useNavigate } from "react-router-dom";

function Header({
  projectData,
  setSelectedProject,
}: {
  projectData: any[];
  setSelectedProject: Dispatch<SetStateAction<any>>;
}) {
  const navigate = useNavigate();

  const [project, setProject] = useState(projectData[0].project_name);
  const handleChange = (event: SelectChangeEvent) => {
    console.log("event: " + event.target.value);
    setProject(event.target.value);
    const data = projectData.find(
      (project) => project.project_name === event.target.value
    );
    setSelectedProject(data);
  };
  return (
    <div className="header">
      <SearchBar />
      <HeaderTitle title="Dashboard" />

      <div className="flex flex-row space-x-5">
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={project}
          placeholder="Project"
          label="Select Project"
          onChange={handleChange}
          MenuProps={{
            MenuListProps: {
              sx: {
                color: "white",
                backgroundColor: "var(--primary-color)",
              },
            },
            sx: {
              "&& .Mui-selected": {
                color: "white",
                background: "var(--primary-color)",
              },
            },
          }}
          sx={{
            "& [aria-expanded]": {
              color: "white",
              background: "var(--primary-color)",
            },
            height: "2.5rem",
            color: "white",
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "white",
            },
            "& .MuiSvgIcon-root": {
              color: "white",
            },
          }}
        >
          {projectData &&
            projectData?.map((data) => {
              return (
                <MenuItem key={data?.project_name} value={data?.project_name}>
                  {data?.project_name}
                </MenuItem>
              );
            })}
        </Select>
        <IoLogOutOutline
          onClick={() => {
            removeToken();
            navigate("/login");
          }}
          className="cursor-pointer"
          color="var(--accent-color)"
          size="45px"
        />
      </div>
    </div>
  );
}

export default Header;
