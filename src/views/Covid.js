import { useEffect, useState } from "react";
import useFetch from "../customize/fetch";
import moment from "moment";

const Covid = () => {
  const today = moment().startOf("day").toISOString(true);
  const priorDate = moment()
    .startOf("day")
    .subtract(31, "days")
    .toISOString(true);
  const {
    data: dataCovid,
    loading,
    isError,
  } = useFetch(
    `https://api.covid19api.com/country/vietnam?from=${priorDate}&to=${today}`
  );
  //   funtion <=> ComponentDidMount

  return (
    <>
      <h3>Covid 19 tracking in VietNam : </h3>
      <table>
        {console.log("check data covid", dataCovid)}
        <thead>
          <tr>
            <td>Date</td>
            <td>Confirmed</td>
            <td>Active</td>
            <td>Deaths</td>
            <td>Recovered</td>
          </tr>
        </thead>
        <tbody>
          {isError === false &&
            loading === false &&
            dataCovid &&
            dataCovid.length > 0 &&
            dataCovid.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.Date}</td>
                  <td>{item.Confirmed}</td>
                  <td>{item.Active}</td>
                  <td>{item.Deaths}</td>
                  <td>{item.Recovered}</td>
                </tr>
              );
            })}
          {/* //  : (
          //   <td colSpan={5} style={{ textAlign: "center" }}>
          //     Loading...
          //   </td>
          // )} */}
          {loading === true && (
            <td colSpan={5} style={{ textAlign: "center" }}>
              Loading...
            </td>
          )}
          {isError === true && (
            <td colSpan={5} style={{ textAlign: "center" }}>
              Something wrong....
            </td>
          )}
        </tbody>
      </table>
    </>
  );
};
export default Covid;
