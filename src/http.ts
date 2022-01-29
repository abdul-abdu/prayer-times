import { of } from "rxjs";
import { fromFetch } from "rxjs/fetch";
import { catchError, switchMap } from "rxjs/operators";

const baseUrl = "https://api.pray.zone/v2/times/month.json";
//?longitude=39.81666564941406&latitude=21.416667938232425&elevation=333&month=2022-01
export const getJson = (
  longitude: string,
  latitude: string,
  elevation: string,
  month: string
) =>
  fromFetch(
    `${baseUrl}?longitude=${longitude}&latitude=${latitude}&elevation=${elevation}&month=${month}`
  ).pipe(
    switchMap((response) => {
      if (response.ok) {
        return response.json();
      } else {
        return of({ error: true, message: `Error ${response.status}` });
      }
    }),
    catchError((err) => {
      console.error(err);
      return of({ error: true, message: err.message });
    })
  );
