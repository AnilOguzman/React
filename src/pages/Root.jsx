import { Outlet } from "react-router-dom"
import MainNavigation from "../components/MainNavigation"
import "../components/MainNavigation.css"

//LAYOUT PAGE 

const RootLayout = () => {
  return (
    <>
    <h1>Root Layout</h1>
    <MainNavigation></MainNavigation>
    <Outlet/> 
    </> //outlet yapısı childrenların yanisi asıl sayfaların olduğu yer. üstte görünsün istersen sayfalar outleti üste al
  )
}

export default RootLayout