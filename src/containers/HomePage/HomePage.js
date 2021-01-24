import React, { useState } from "react";

import ShowDate from "../../components/ShowDate/ShowDate";

const HomePage = () => {
  const [date, setDate] = useState(new Date());
  const [monthNames] = useState([
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]);
  return (
    <>
      <ShowDate selectedDate={date} monthNames={monthNames} />
    </>
  );
};

export default HomePage;
