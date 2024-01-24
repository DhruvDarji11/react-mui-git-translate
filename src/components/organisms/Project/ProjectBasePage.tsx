import React from "react";
import useFetch from "../../../hooks/useFetch";

const ProjectBasePage = () => {
  const value = useFetch();
  return (
    <div style={{ padding: "10px" }}>
      <div>Project base page</div>
      <br />
      <br />
      <div>name: {value.user.name}</div>
      <div>IsLoggedIn: {`${value.user.IsLoggedIn}`} </div>
    </div>
  );
};

export default ProjectBasePage;
