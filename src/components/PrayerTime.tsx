import React, { useState } from "react";

type Ptops = {
  name: string;
  time: Date;
};

export default function PrayerTime({ name, time }: Ptops) {
  const [volumeEnabled, setVolumeEnabled] = useState(false);

  return (
    <div
      onClick={() => setVolumeEnabled(!volumeEnabled)}
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <h4>{name}</h4>
      {/* {volumeEnabled ? <VolumeUpIcon /> : <VolumeOffIcon />} */}
      <h4>{time.toDateString()}</h4>
    </div>
  );
}
