import { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { Icon } from "../component/icon";

const Login = ({ isLoggedIn, setIsLoggedIn }) => {
  const [loginFormInput, setLoginFormInput] = useState({
    username: "",
    password: "",
  });
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    fetch("userData.json")
      .then((response) => response.json())
      .then((data) => setUserList(data))
      .catch((err) => console.error(err));
  }, []);

  const handleChangeLoginFormInput = (e) => {
    setLoginFormInput({
      ...loginFormInput,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitLoginForm = (e) => {
    e.preventDefault();
    const currentUser = { ...loginFormInput };
    let userData = [...userList];

    const isUserMatched = userData.some(
      (user) =>
        user.username === currentUser.username &&
        user.password === currentUser.password
    );

    if (isUserMatched) {
      setIsLoggedIn(true);
      localStorage.setItem("isLoggedIn", JSON.stringify(true));
      localStorage.setItem(
        "user",
        JSON.stringify(
          userList.find((user) => user.username === currentUser.username)
        )
      );
    } else {
      alert("Kullanıcı bulunamadı.");
    }
  };

  return isLoggedIn ? (
    <Redirect to="/" />
  ) : (
    <div className="login-wrapper">
      <form className="login-form" action="" onSubmit={handleSubmitLoginForm}>
        <div className="login-icon-wrapper">
          <Icon size={50} iconName="twitter" color="#1DA1F2" />
        </div>
        <div>
          <input
            value={loginFormInput.username}
            className="user-name-input"
            type="text"
            name="username"
            placeholder="username"
            onChange={handleChangeLoginFormInput}
          />
        </div>
        <div>
          <input
            value={loginFormInput.password}
            className="password-input"
            type="password"
            name="password"
            placeholder="password"
            onChange={handleChangeLoginFormInput}
          />
        </div>
        <button className="login-submit-button">Login</button>
      </form>
    </div>
  );
};

export default Login;
