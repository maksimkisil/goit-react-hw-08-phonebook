import { useDispatch, useSelector } from "react-redux";
import { authSelectors, authActions } from "../../redux/auth";
import userAvatar from "../../account.png";
import s from "./UserMenu.module.css";

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);
  const avatar = userAvatar;

  return (
    <div className={s.container}>
      <img src={avatar} alt="" width="32" className={s.avatar} />
      <span className={s.name}>Welcome, {name}</span>
      <button className={s.button} onClick={() => dispatch(authActions.logOut())}>
        Log out
      </button>
    </div>
  );
}