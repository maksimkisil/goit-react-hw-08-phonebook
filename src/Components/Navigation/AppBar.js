import { useSelector } from "react-redux";
import { authSelectors } from "../../redux/auth";
import Navigation from "./Navigation";
import UserBar from "../UserMenu/UserBar";
import AuthNavigation from "./AuthNavigation";
import s from './Navigation.module.css';

export default function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <header className={s.header}>
      <Navigation />
      {isLoggedIn ? <UserBar /> : <AuthNavigation />}
    </header>
  );
}