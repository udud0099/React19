import { Pause, Play, Refresh2 } from "iconsax-reactjs";
import React, { useEffect, useState } from "react";
import IconsStyle from "./IconsStyle";

const StopWatch = () => {
  // state to store time
  const [time, setTime] = useState(0);

  // state to check stopwatch running or not
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId;
    if (isRunning) {
      // setting time from 0 to 1 every 10 milisecond using javascript setInterval method
      intervalId = setInterval(() => setTime(time + 1), 10);
    }
    return () => clearInterval(intervalId);
  }, [isRunning, time]);

  // Hours calculation
  const hours = Math.floor(time / 360000);

  // Minutes calculation
  const minutes = Math.floor((time % 360000) / 6000);

  // Seconds calculation
  const seconds = Math.floor((time % 6000) / 100);

  // Milliseconds calculation
  const milliseconds = time % 100;

  // Method to start and stop timer
  const startAndStop = () => {
    setIsRunning(!isRunning);
  };

  // Method to reset timer back to 0
  const reset = () => {
    setTime(0);
    setIsRunning(false);
  };
  return (
    <>
      <div className="w-full h-screen bg-gray-300 flex justify-center items-center">
        <div>
          <div className="w-120 bg-white   h-150 flex justify-between flex-col py-8 px-6 rounded-2xl shadow-xl">
            <div className="flex justify-end" onClick={reset}>
              {/* <Refresh2 size="32" color="#4a5565" className="cursor-pointer"/> */}
              <IconsStyle icon={Refresh2} />
            </div>
            <div className="w-full  aspect-square bg-amber-400 rounded-full mx-auto text-white flex justify-center items-center text-6xl">
              {hours}:{minutes.toString().padStart(2, "0")}:
              {seconds.toString().padStart(2, "0")}:
              {milliseconds.toString().padStart(2, "0")}
            </div>
            <div className="flex justify-center mt-4" onClick={startAndStop}>
              {isRunning ? (
                <div className="w-14 h-14 rounded-full flex justify-center items-center shadow-xl  border-3 border-gray-50  ">
                  <IconsStyle icon={Pause} />
                </div>
              ) : (
                <div className="w-14 h-14 rounded-full flex justify-center items-center shadow-xl  border-3 border-gray-50  ">
                  <IconsStyle icon={Play} />
                </div>
              )}
            </div>
          </div>
          <div className="flex gap-4 py-8 justify-center">
            <button
              className="shadow-md rounded-full px-6 py-2 text-xl cursor-pointer bg-white"
              onClick={() => setTime(time + 6000)}
            >
              Add 1 m
            </button>
            <button
              className="shadow-md rounded-full px-6 py-2 text-xl cursor-pointer bg-white"
              onClick={() => setTime(time > 6000 ? time - 6000 : time)}
            >
              sub 1 m
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default StopWatch;
