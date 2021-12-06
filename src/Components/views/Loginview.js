import { useState } from "react";
import { useDispatch } from "react-redux";
import { authActions } from "../../redux/auth";
import s from './ViewsStyles.module.css';

export default function LoginView() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case "email":
        return setEmail(value);
      case "password":
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(authActions.logIn({ email, password }));
    setEmail("");
    setPassword("");
  };

  return (
    <div className={s.container}>
      <h3 className={s.title}><span className={s.suptitle}>Log in</span><br/>To continue please fill in the form</h3>
      <form onSubmit={handleSubmit} className={s.form} autoComplete="off">
        <label className={s.label}>
          e-mail
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>
        <label className={s.label}>
          Password
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>
        <button className={s.button} type="submit">
          Login
        </button>
      </form>
    </div>
  );
}