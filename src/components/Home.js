import React, { useContext } from "react";
import noteContext from "../context/notes/noteContext";
import Alert from "./Alert";
import Navbar from "./Navbar";
import Notes from "./Notes";

const Home = (props) => {
  const { showAlert } = props;
  return (
    <div>
      <Navbar />
      <Alert myalert="alert" />
      <div className="container">
        <Notes showAlert={showAlert} />
      </div>
    </div>
  );
};

export default Home;
