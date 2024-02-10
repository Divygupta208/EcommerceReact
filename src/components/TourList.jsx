import React from "react";

const TourList = ({ item }) => {
  return (
    <div className="row gap-2 mt-2 tourlist d-flex justify-content-between">
      <div className="col-2">
        <strong>{item.date}</strong>
      </div>
      <div className="col-2">{item.place}</div>
      <div className="col-5">{item.destination}</div>
      <button className="col-4 mb-1">BUY TICKETS</button>
    </div>
  );
};

export default TourList;
