import React from "react";
import "./Home.css";
import { FaRegCirclePlay } from "react-icons/fa6";
import TourList from "../components/TourList";
const Home = () => {
  const toursList = [
    {
      date: "JUL-16",
      place: "DETROIT",
      destination: "DTE ENERGY MUSIC THEATRE",
    },
    {
      date: "JUL-19",
      place: "BRISTOW,VA",
      destination: "DTE ENERGY MUSIC THEATRE",
    },
    {
      date: "JUL-22",
      place: "PHOENIX,AZ",
      destination: "DTE ENERGY MUSIC THEATRE",
    },
    {
      date: "JUL-29",
      place: "LAS VEGAS ,NY",
      destination: "DTE ENERGY MUSIC THEATRE",
    },
    {
      date: "AUG-2",
      place: "CONCORD,CA",
      destination: "DTE ENERGY MUSIC THEATRE",
    },
    {
      date: "AUG-7",
      place: "TORONTO ,ON",
      destination: "DTE ENERGY MUSIC THEATRE",
    },
  ];

  return (
    <div className="home-main">
      <div className="home-one">
        <button className="get">Get Our Latest Album</button>
        <button className="icon-button">
          <FaRegCirclePlay className="iconbtn" />
        </button>
      </div>
      <div className="home-two">
        <div className="home-heading">
          <h4>Tours</h4>
        </div>
        <ul className="home-tours">
          {toursList.map((item) => {
            return <TourList item={item} />;
          })}
        </ul>
      </div>
    </div>
  );
};

export default Home;
