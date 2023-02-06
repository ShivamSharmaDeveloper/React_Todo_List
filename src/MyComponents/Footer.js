import React from "react";

export const Footer = () => {
  // Adding a custom style
  // let footerStyle = {
  //     position: "relative",
  //     top: "50vh",
  //     width: "100%"
  // }
  return (
    // style={footerStyle} to Add the custom css after className
    <footer className="bg-dark text-light py-2">
      <p className="text-center">Copyright &copy; MyTodosList.com</p>
    </footer>
  );
};
