import EmailDisplayButtons from './EmailDisplayButtons'
import Search from "./Search";
import RightButtons from './RightButtons';

import { AppBar, Toolbar } from "@mui/material";

export default function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <EmailDisplayButtons />
        <Search />
        <RightButtons />
      </Toolbar>
    </AppBar>
  );
}
