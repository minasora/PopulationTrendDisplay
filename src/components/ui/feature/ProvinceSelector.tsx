"use client";
import React, { useState } from "react";
import ProvinceAutocomplete from "@/components/ui/feature/ProvinceSearchBar";
import ProvinceMap from "@/components/ui/feature/ProvinceMap";
import { PrefTrend } from "@/libs/types";
import PopulationTrendDisplay from "@/components/ui/feature/PopulationTrendDisplay";

const ProvinceSelector = () => {
  const [selectedProvinces, setSelectedProvinces] = useState<PrefTrend[]>([]);

  const handleProvinceChange = (
    value: PrefTrend[] | { prefName: string }[],
  ) => {
    setSelectedProvinces(value as PrefTrend[]);
  };

  return (
    <div className="flex flex-col md:flex-row w-full h-5/6 p-2 md:mt-1 ">
      <div className="h-full w-full md:w-1/2 m-2  trend_display">
        <PopulationTrendDisplay
          selectedProvinces={selectedProvinces}
          className={"w-full h-[36rem]"}
        />
      </div>
      <div className="flex flex-col gap-5 w-full md:w-1/2 md:h-full h-1/2 m-3 items-center">
        <ProvinceAutocomplete
          selectedProvinces={selectedProvinces}
          onProvinceChange={handleProvinceChange}
          className={" w-2/3 h-1/8 md:mt-4 mr-4 searchbar"}
        />
        <ProvinceMap
          selectedProvinces={selectedProvinces}
          onProvinceChange={handleProvinceChange}
          className="w-full h-3/4  mt-2 map"
        />
      </div>
    </div>
  );
};

export default ProvinceSelector;
