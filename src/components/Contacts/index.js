import Github from "../../images/github.svg";
import React from "react";
import Email from "../../images/email.svg";

export default function Contacts({ github, email }) {
  let githubElement = null;
  if (github) {
    githubElement = (
      <a href={github} target="_blank" rel="noreferrer">
        <Github className="mr-4" width={24} height={24} />
      </a>
    );
  }

  let emailElement = null;
  if (email) {
    emailElement = (
      <a href={`mailto:${email}`} target="_blank" rel="noreferrer">
        <Email width={24} height={24} />
      </a>
    );
  }

  return (
    <>
      {githubElement}
      {emailElement}
    </>
  );
}
