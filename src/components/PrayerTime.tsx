import React, { useEffect, useState } from "react";

type Ptops = {
  name: string;
  time: Date;
};

export const PUBLIC = process.env.PUBLIC_URL;

export default function PrayerTime({ name, time }: Ptops) {
  const [volumeEnabled, setVolumeEnabled] = useState(
    JSON.parse(localStorage.getItem(name) || "") || false
  );

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
          src={`${PUBLIC}/${volumeEnabled ? "bell.png" : "silence.png"}`}
          alt={`icon-${volumeEnabled ? "bell" : "silence"}`}
        />
      </div>
      <div className="prayer-times-item-time">20:20</div>
    </div>
  );
}
