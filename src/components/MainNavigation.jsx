//LAYOUT COMPONENT

import { Link, NavLink } from "react-router-dom"

const MainNavigation = () => {
  return (
    <header>
        <nav>
            <ul>
                <li><NavLink to="/" className={({isActive})=>(isActive ? "active" : undefined)}>Home</NavLink></li>
                <li><Link to="/products">Products</Link></li>
            </ul>
        </nav>
    </header>
  )
}

export default MainNavigation