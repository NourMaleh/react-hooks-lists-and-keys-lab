import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
const navbar = links.map((link,index)=>{
  return(
  <a key={index} href={"#"+link}>{link}</a>)
})
  return <nav>{navbar}</nav>;
    }



export default NavBar;
