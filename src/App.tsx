import React, { useEffect } from "react";
import "./App.scss";
import PrayerTime from "./components/prayer-time/PrayerTime";
import UpcomingPrayer from "./components/upcoming-prayer";
import { LS_KEYS } from "./enums";
import { getJson } from "./http";
import { parseGeoLocation } from "./utils";

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
        (geoLocation) => {
          const location = parseGeoLocation(geoLocation);

          localStorage.setItem(LS_KEYS.LOCATION, JSON.stringify(location));
          console.log(
            "location",
            JSON.parse(localStorage.getItem(LS_KEYS.LOCATION) || "{}")
          );
        },
        (e) => {
          console.log(e);
        }
      );
    }
  }, []);

  return (
    <div className="App">
      <div className="container">
        <UpcomingPrayer />
        <section id="prayer-times">
          {Times.map((t) => (
            <PrayerTime name={t.name} time={t.time} key={t.name} />
          ))}
        </section>
      </div>
    </div>
  );
}

export default App;
