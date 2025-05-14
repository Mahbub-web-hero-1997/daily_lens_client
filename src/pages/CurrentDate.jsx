import { useState, useEffect } from "react";

const CurrentDateTime = () => {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();

      const day = now.toLocaleDateString("en-US", { weekday: "long" });
      const monthDay = now.toLocaleDateString("en-US", {
        month: "long",
        day: "2-digit",
      });
      const year = now.toLocaleDateString("en-US", { year: "numeric" });
      const time = now.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });

      setCurrentTime({ day, monthDay, year, time });
    };

    updateDateTime();
    const interval = setInterval(updateDateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-center font-bold text-lg space-y-1 px-4 text-gray-700">
      <p>{currentTime.day}</p>
      <p>{currentTime.monthDay}</p>
      <p>{currentTime.year}</p>
      <p className="text-white bg-gray-800 rounded-xl">{currentTime.time}</p>
    </div>
  );
};

export default CurrentDateTime;
