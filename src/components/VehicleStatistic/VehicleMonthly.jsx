import React from "react";
import Chart from "react-apexcharts";

function VehicleMonthly({ data, yearList, onYearMonthlyChange }) {
  return (
    <div>
      <div className="flex w-full gap-4 mb-2">
        <div className="flex flex-col w-full">
          <label htmlFor="year" className="text-left">
            Tahun
          </label>
          <select
            name="year"
            id="year"
            className="p-2 border-2 border-gray-400 rounded-lg"
            onChange={(val) => {
              onYearMonthlyChange(parseInt(val.target.value));
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
      {data ? (
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
      ) : (
        <p>Loading</p>
      )}
    </div>
  );
}

export default VehicleMonthly;
