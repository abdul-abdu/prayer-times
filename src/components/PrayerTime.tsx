import React, { useState } from "react";

type Ptops = {
  name: string;
  time: Date;
};
export const PUBLIC = process.env.PUBLIC_URL;

export default function PrayerTime({ name, time }: Ptops) {
  const [volumeEnabled, setVolumeEnabled] = useState(false);

  return (
    <div className="prayer-times-item">
      <div className="prayer-times-item-name">{name}</div>
      <div
        className="prayer-times-item-alert"
        onClick={() => setVolumeEnabled(!volumeEnabled)}
      >
        {volumeEnabled ? (
          <img style={{ width: 20 }} src={PUBLIC + "/bell.png"} alt="bell" />
        ) : (
          <img
            style={{ width: 20 }}
            src={PUBLIC + "/silence.png"}
            alt="silence"
          />
        )}
      </div>
      <div className="prayer-times-item-time">20:20</div>
    </div>
  );
}
