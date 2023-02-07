import React, { useEffect, useRef, useState } from "react";
import ReactHlsPlayer from "react-hls-player/dist";
import useSwr from "swr";
import fetcher from "../../config/fetcher";

function CctvPlayer() {
  const [selectedCCTV, setSelectedCCTV] = useState(1);
  const { data: cctvData } = useSwr(`https://viana.livinglab.id/api/cctv`, fetcher);
  const playerRef1 = useRef(null);

  if (!cctvData) {
    return <p>loading</p>;
  }

  return (
    <div className="px-16">
      <div className="py-4">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Pilih Lokasi CCTV</label>
        <select
          name="lokasi"
          id="lokasi"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option hidden selected>
            Pilih Lokasi
          </option>
          {cctvData.map((d, index) => (
            <option onClick={() => setSelectedCCTV(index)}>{d.name}</option>
          ))}
        </select>
      </div>
      <div className="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <ReactHlsPlayer src={cctvData[selectedCCTV].rtsp_url} light={cctvData[selectedCCTV].photo} autoPlay={true} controls={false} width="100%" height="auto" playerRef={playerRef1} className="rounded" />
      </div>
    </div>
  );
}

export default CctvPlayer;
