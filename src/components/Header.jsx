import { useSelector,useDispatch } from "react-redux";
import { authActions } from "../store/auth";



const Header = () => {
  const isAuth=useSelector((state)=>state.auth.isAuthenticated);
  const dispatch=useDispatch();

  const logouHandler = () => {
    dispatch(authActions.logout());
  }

    return (
      <header>
        <h1>Counter</h1>
        {isAuth && <button onClick={logouHandler}>Logout</button>}
      </header>
    );
  };
  
  export default Header;
  