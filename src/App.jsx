import Counter from "./components/Counter";
import Header from "./components/Header";
import UserForm from "./components/UserForm";
import { useSelector } from "react-redux";
import "./App.css";

function App() {
  const isAuth=useSelector((state)=>state.auth.isAuthenticated);
  return (
    <>
      <Header />
      {!isAuth && <UserForm />}
      {isAuth && <Counter />}
    </>
  );
}

export default App;
