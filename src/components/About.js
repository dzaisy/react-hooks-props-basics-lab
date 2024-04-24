import React from "react";
import Links from "./Links";

function About(props) {
  let content = null
  if (props.bio && props.bio !== '') {
    content = <p>{props.bio}</p>
  };
  return (
    <div id="about">
      <h2>About Me</h2>
      {content}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {/* add your <Links /> component here */}
      <Links github={props.github} linkedin={props.linkedin}/>
    </div>
  );
}

export default About;
