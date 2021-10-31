import { useSelector } from "react-redux";

import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";
import AuthNav from "../AuthNav/AuthNav";
import Filter from "../Filter/Filter";
import { getUserIsLoggedIn } from "../../redux/auth";

import css from "./AppBar.module.css";

export default function AppBar() {
  const isLoggedIn = useSelector(getUserIsLoggedIn);
  return (
    <header className={css.header}>
      <Navigation />
      {isLoggedIn ? (
        <>
          <Filter />
          <UserMenu />
        </>
      ) : (
        <AuthNav />
      )}
    </header>
  );
}
//при логине вставить фильтр в навигацию
