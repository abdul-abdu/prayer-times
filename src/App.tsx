import React from "react";
import "./App.css";
import PrayerTime from "./components/PrayerTime";

const Times = [
  { name: "bomdod", time: new Date() },
  { name: "peshin", time: new Date() },
  { name: "asr", time: new Date() },
  { name: "shom", time: new Date() },
  { name: "hufton", time: new Date() },
];

function App() {
  return (
    <div>
      Prayer time
      <section>
        {Times.map((t) => (
          <PrayerTime name={t.name} time={t.time} key={t.name} />
        ))}
      </section>
    </div>
  );
}

export default App;
