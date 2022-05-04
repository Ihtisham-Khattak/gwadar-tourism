import React, { useState, useEffect } from "react";

const DateTime = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const today = setInterval(() => setDate(new Date()), 1000);
    return () => clearInterval(today);
  });

  return <div className="contents"><br />
  {date.toLocaleTimeString()}</div>;
};

export default DateTime;
