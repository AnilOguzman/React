import { useState } from "react";
import { useDispatch } from "react-redux";
import { authActions } from "../store";


const UserForm = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
  const loginHandler = (e) =>{
    e.preventDefault();
    dispatch(authActions.login());
  }

  return (
    <form onSubmit={loginHandler}>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button>Login</button>
    </form>
  );
};

export default UserForm;
