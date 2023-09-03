import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const navElements = links.map((x) => {
    let hash_x = "#".concat(x);
    //console.log(hash_x);
    return <a key={x} href={hash_x}>{x}</a>
  });

  return <nav>{navElements}</nav>;
}

export default NavBar;
