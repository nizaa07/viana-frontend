import React from "react";
import useSwr from "swr";

import Hero from "../../layout/hero";
import Footer from "../../layout/footer";

import fetcher from "../../config/fetcher";
import VehicleStatistic from "../../components/VehicleStatistic";
import Cctv from "../../components/CCTV";
import VehicleCounting from "../../components/VehicleCounting";

function Home() {
  const { data: cctvData } = useSwr(`https://viana.livinglab.id/api/cctv`, fetcher);
  return (
    <div className="w-[100%]">
      <Hero />
      <div className="w-full px-8" id="demo">
        <div>
          <div className="p-4">
            <h2 className="text-center text-2xl font-sans font-semibold tracking-wider">Video Analytic</h2>
          </div>
          <div className="flex">
            <div className="w-1/2">
              <Cctv />
            </div>
            <div className="w-1/2 flex flex-col justify-center">
              <VehicleCounting />
            </div>
          </div>
          <div>
            <div className="p-8">
              <h2 className="text-center text-2xl font-sans font-semibold tracking-wider">Statistik Kendaraan</h2>
            </div>
            <VehicleStatistic />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
