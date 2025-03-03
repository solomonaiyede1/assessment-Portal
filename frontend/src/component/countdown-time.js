import { useState, useEffect } from "react";

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState(30 * 60); // 30 minutes in seconds

  useEffect(() => {
    if (timeLeft <= 0) {
      alert("Time's up!");
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div className="flex flex-col items-center justify-center p-4 bg-gray-100 rounded-lg shadow-lg w-64">
      <div className="text-3xl font-mono bg-white px-4 py-2 rounded-lg shadow-md">
        <span style={{fontWeight: "700", fontSize: '20px', color: 'red'}}>Count down Time: </span>
          <span style={{fontWeight: "900", fontSize: '20px', color: 'blue'}}>
             {formatTime(timeLeft)}</span>
      </div>
    </div>
  );
};

export default CountdownTimer;
