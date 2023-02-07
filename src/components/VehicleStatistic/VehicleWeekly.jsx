import React from "react";
import Chart from "react-apexcharts";

function VehicleWeekly({ data, monthList, yearList, onMonthWeeklyChange, onYearWeeklyChange }) {
  return (
    <div>
      <div className="flex w-full gap-4 mb-2">
        <div className="flex flex-col w-1/2">
          <label htmlFor="month" className="text-left">
            Bulan
          </label>
          <select
            name="month"
            id="month"
            className="p-2 border-2 border-gray-400 rounded-lg"
            onChange={(val) => {
              onMonthWeeklyChange(parseInt(val.target.value));
            }}
          >
            {monthList.map((date, index) => {
              return (
                <option value={index} key={index} selected={index === monthList.length - 1 ? true : false}>
                  {date}
                </option>
              );
            })}
          </select>
        </div>
        <div className="flex flex-col w-1/2">
          <label htmlFor="year" className="text-left">
            Tahun
          </label>
          <select
            name="year"
            id="year"
            className="p-2 border-2 border-gray-400 rounded-lg"
            onChange={(val) => {
              onYearWeeklyChange(parseInt(val.target.value));
            }}
          >
            {yearList.map((date, index) => {
              return (
                <option value={date} key={index} selected={index === yearList.length - 1 ? true : false}>
                  {date}
                </option>
              );
            })}
          </select>
        </div>
      </div>
      {!data ? (
        <p>Loading</p>
      ) : (
        <>
          <Chart
            options={{
              chart: {
                id: "basic-bar",
                toolbar: {
                  show: false,
                },
              },
              xaxis: {
                categories: data.labels,
              },
            }}
            series={[
              {
                name: "series-1",
                data: data.datasets[0].data,
              },
            ]}
            type="line"
            height={400}
          />
        </>
      )}
    </div>
  );
}

export default VehicleWeekly;
