import React, { useEffect } from "react";
import "./App.scss";
import PrayerTime from "./components/PrayerTime";
// import { getJson } from "./http";

const Times = [
  { name: "bomdod", time: new Date() },
  { name: "peshin", time: new Date() },
  { name: "asr", time: new Date() },
  { name: "shom", time: new Date() },
  { name: "hufton", time: new Date() },
];

function App() {
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (t) => {
          console.log(t);
          
        
        },
        (e) => {
          console.log(e);
        }
      );
    }
  }, []);
  // useEffect(() => {
  //   const subscriptoin = getJson(
  //     "39.81666564941406",
  //     "21.416667938232425",
  //     "elevation",
  //     "2022-01"
  //   ).subscribe({
  //     next: (data) => {
  //       console.log(data);
  //     },
  //     error: (e) => {
  //       console.log(e);
  //     },
  //     complete: () => console.log("complete"),
  //   });

  //   return () => {
  //     subscriptoin.unsubscribe();
  //   };
  // }, []);

  return (
    <div className="App">
      Prayer time
      <section id="prayer-times">
        {Times.map((t) => (
          <PrayerTime name={t.name} time={t.time} key={t.name} />
        ))}
      </section>
    </div>
  );
}

export default App;
