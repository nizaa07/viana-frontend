import React from "react";
import Chart from "react-apexcharts";
import moment from "moment";

function VehicleHourly({ data, dateList, index, nextFunction, prevFucntion }) {
  return (
    <div>
      <div className="flex flex-row justify-between items-center mb-4">
        <button type="button" className={`bg-gray-800 text-white rounded-md border-r border-gray-100 py-2 hover:bg-red-700 hover:text-white px-3 ${index === 0 ? "invisible" : ""}`} onClick={prevFucntion}>
          {"<"}
        </button>
        <div className="font-bold text-xl">{dateList.length > 0 ? moment(dateList[index]).format("DD MMMM YYYY") : "loading..."}</div>
        <button type="button" className={`bg-gray-800 text-white rounded-md border-r booder-gray-100 py-2 hover:bg-red-700 hover:text-white px-3 ${index === dateList.length - 1 ? "invisible" : ""}`} onClick={nextFunction}>
          {">"}
        </button>
      </div>
      <div>
        {data ? (
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
        ) : (
          <p>loading</p>
        )}
      </div>
    </div>
  );
}

export default VehicleHourly;
