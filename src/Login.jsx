import React from "react";

function Login(props) {
  return (
    <div>
      Welcome TO {props.objs.company} {props.objs.name} This is login page
    </div>
  );
}

export default Login;