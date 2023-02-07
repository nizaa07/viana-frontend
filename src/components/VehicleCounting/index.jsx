import React, { useState, useEffect } from "react";
import fetcher from "../../config/fetcher";
import useSwr from "swr";

import VCChart from "./VCChart";
import Skeleton from "../skeleton";

function VehicleCounting() {
  const [chartState, setChartState] = useState(undefined);
  const [kendaraanTable, setKendaraanTable] = useState(undefined);
  const { data: chartData } = useSwr(`https://viana.livinglab.id/api/charts`, fetcher, {
    refreshInterval: 1000,
  });
  const { data: kendaraanData } = useSwr(`https://viana.livinglab.id/api/kendaraan`, fetcher, {
    refreshInterval: 1000,
  });

  useEffect(() => {
    if (chartData && kendaraanData) {
      setChartState({
        date: chartData.date,
        sepeda: chartData.sepeda,
        truk: chartData.truk,
        motor: chartData.motor,
        mobil: chartData.mobil,
        bus: chartData.bus,
      });
    }
  }, [chartData, kendaraanData]);

  console.log(chartState);

  return <div>{chartState ? <VCChart state={chartState} /> : <Skeleton />}</div>;
}

export default VehicleCounting;
