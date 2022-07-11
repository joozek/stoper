import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import { IndexWrapper, Seconds, TimerWrapper } from "../styles/index.styles";

const Home: NextPage = () => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (isRunning) {
      const interval = setInterval(() => {
        setSeconds(seconds + 1);

        if (seconds === 59) {
          setSeconds(0);
          setMinutes(minutes + 1);
        }

        if (minutes === 59) {
          setMinutes(0);
          setHours(hours + 1);
        }
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [hours, minutes, seconds, isRunning]);

  const toggleTimer = () => {
    setIsRunning((isRunning) => !isRunning);
  };

  return (
    <div>
      <Head>
        <title>Stoper app</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <IndexWrapper>
        <button onClick={toggleTimer}>Start/stop timer</button>

        <TimerWrapper>
          {hours > 10 ? hours : "0" + hours}:
          {minutes > 10 ? minutes : "0" + minutes}
          <Seconds>:{seconds > 10 ? seconds : "0" + seconds}</Seconds>
        </TimerWrapper>
      </IndexWrapper>
    </div>
  );
};

export default Home;
