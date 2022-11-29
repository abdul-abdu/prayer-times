import React, { useEffect, useState } from "react";
import "./prayer-time.scss";

type Ptops = {
  name: string;
  time: Date;
};

export const PUBLIC_URL = process.env.PUBLIC_URL;
console.log("PUBLIC", PUBLIC_URL);

export default function PrayerTime({ name, time }: Ptops) {
  const [volumeEnabled, setVolumeEnabled] = useState(false);

  useEffect(() => {
    localStorage.setItem(name, JSON.stringify(volumeEnabled));
  }, [volumeEnabled, name]);

  return (
    <div className="prayer-times-item">
      <div className="prayer-times-item-name">{name}</div>
      <div
        className="prayer-times-item-alert"
        onClick={() => setVolumeEnabled(!volumeEnabled)}
      >
        <img
          src={`${PUBLIC_URL}/${volumeEnabled ? "bell.png" : "silence.png"}`}
          alt={`icon-${volumeEnabled ? "bell" : "silence"}`}
        />
      </div>
      <div className="prayer-times-item-time">20:20</div>
    </div>
  );
}
