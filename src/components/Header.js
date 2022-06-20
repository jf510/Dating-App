import React from "react";
import "./Header.css";
import { IconButton } from "@mui/material";
import ForumIcon from "@mui/icons-material/Forum";
import PersonIcon from "@mui/icons-material/Person";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";

function Header() {
  return (
    <div className="header">
      <IconButton>
        <PersonIcon />
      </IconButton>
      <IconButton>
        <LocalFireDepartmentIcon />
      </IconButton>
      <IconButton>
        <ForumIcon />
      </IconButton>
    </div>
  );
}

export default Header;
