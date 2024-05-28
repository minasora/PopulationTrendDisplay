"use client";
import React, { useState } from "react";
import { ComposableMap, Geographies, Geography, ZoomableGroup } from "react-simple-maps";
import { Prefdata } from '@/libs/utils';

interface ProvinceMapProps {
    selectedProvinces: { prefName: string }[];
    onProvinceChange: (newSelectedProvinces: { prefName: string }[]) => void;
    className?: string;
}
type PositionType = {
    coordinates: [number, number];
    zoom: number;
};
const ProvinceMap: React.FC<ProvinceMapProps> = ({ selectedProvinces, onProvinceChange, className }) => {
    const [hoveredProvince, setHoveredProvince] = useState<string | null>(null);
    const [position, setPosition] = useState<PositionType>({ coordinates: [135.8620, 37.191874], zoom: 1 });

    function handleMoveEnd(newPosition: PositionType) {
        setPosition(newPosition);
    }

    const handleProvinceClick = (provinceName: string) => {
        const province = Prefdata.find(p => p.prefName === provinceName);
        if (!province) return;

        const isSelected = selectedProvinces.some(p => p.prefName === province.prefName);
        const newSelectedProvinces = isSelected
            ? selectedProvinces.filter(p => p.prefName !== province.prefName)
            : [...selectedProvinces, province];
        onProvinceChange(newSelectedProvinces);
    };

    const isProvinceSelected = (provinceName: string) => {
        return selectedProvinces.some(province => province.prefName === provinceName);
    };

    const handleZoomChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newZoom = parseFloat(event.target.value);
        setPosition({ ...position, zoom: newZoom });
    };

    return (
        <div className={`${className}`}>
            <ComposableMap
                projection="geoMercator"
                projectionConfig={{
                    center: [135.8620, 37.191874],
                    scale: 1800
                }}
                width={400}
                height={600}
                viewBox="0 0 500 600"
                className="w-full h-full"
            >
                <ZoomableGroup
                    zoom={position.zoom}
                    center={position.coordinates}
                    onMoveEnd={handleMoveEnd}
                >
                    <Geographies geography="/jp-updated.json">
                        {({ geographies }) =>
                            geographies.map((geo) => (
                                <Geography
                                    key={geo.rsmKey}
                                    geography={geo}
                                    onMouseEnter={() => {
                                        setHoveredProvince(geo.properties.name);
                                    }}
                                    onMouseLeave={() => {
                                        setHoveredProvince(null);
                                    }}
                                    onClick={() => handleProvinceClick(geo.properties.name)}
                                    style={{
                                        default: {
                                            fill: isProvinceSelected(geo.properties.name) ? "#FF5722" : "#D6D6DA",
                                            outline: "none",
                                            stroke: "#607D8B",  // border color
                                            strokeWidth: 0.5  // border width
                                        },
                                        hover: {
                                            fill: "#FF5722",
                                            outline: "none",
                                            stroke: "#607D8B",  // border color
                                            strokeWidth: 0.5  // border width
                                        },
                                        pressed: {
                                            fill: "#FF5722",
                                            outline: "none",
                                            stroke: "#607D8B",  // border color
                                            strokeWidth: 0.5  // border width
                                        }
                                    }}
                                />
                            ))
                        }
                    </Geographies>
                </ZoomableGroup>
            </ComposableMap>
            <div className="mt-6 zoom">
                <input
                    type="range"
                    min="1"
                    max="10"
                    step="0.1"
                    value={position.zoom}
                    onChange={handleZoomChange}
                    className="w-full"
                />
            </div>
        </div>
    );
};

export default ProvinceMap;
