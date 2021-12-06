import React from "react";
import s from '../views/ViewsStyles.module.css';

const HomeView = () => (
  <div className={s.container}>
    <h1 className={s.title}>
      Welcome!<br /> Here you can create your own phonebook!
    </h1>
    <h2 className={s.subtitle}>
      Please <b>sign up</b> or <b>log in</b> to continue.
    </h2>
  </div>
);

export default HomeView;