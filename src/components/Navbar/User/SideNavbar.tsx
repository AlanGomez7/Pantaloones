import { KeyboardArrowDown } from "@mui/icons-material";
import { Box, Slider } from "@mui/material";
import React from "react";

function SideNavbar() {
  function valuetext(value: number) {
    return `${value}°C`;
  }
  return (
    <div className="shadow-lg w-[300px] pt-4 bg-white">
      <div className="border border-grey p-3">
        <p className="text-2xl font-semibold">Filters</p>
      </div>
      <div>
        <ul className="p-3">
          <li className=" text-lg font-semibold">
            Sort by <KeyboardArrowDown />
          </li>
          <li className="p-2 text-base text-gray-500">
            <input type="checkbox"></input> Low to high
          </li>
          <li className="p-2 text-base text-gray-500">
            <input type="checkbox"></input> high to low
          </li>
          <li className="p-2 text-base text-gray-500">
            <input type="checkbox"></input> Newest first
          </li>
        </ul>
      </div>
      <div className="border border-grey">
        <ul className="p-3">
          <li className=" text-lg font-semibold">
            Categories <KeyboardArrowDown />
          </li>
          <li className="p-2 text-base text-gray-500">
            <input type="checkbox"></input> Men
          </li>
          <li className="p-2 text-base text-gray-500">
            <input type="checkbox"></input> Ladies
          </li>
          <li className="p-2 text-base text-gray-500">
            <input type="checkbox"></input> Kids
          </li>
        </ul>
      </div>
      <div className="p-3">
        <p className="text-lg font-semibold">Price</p>
        <Box sx={{ paddingX: "25px", paddingL: "15px " }}>
          <Slider
            aria-label="Temperature"
            defaultValue={30}
            getAriaValueText={valuetext}
            valueLabelDisplay="auto"
            shiftStep={30}
            step={10}
            marks
            min={10}
            max={110}
          />
        </Box>
      </div>

      <div>
        <ul className="p-3">
          <li className=" text-lg font-semibold">
            Discount <KeyboardArrowDown />
          </li>
          <li className="p-2 text-base text-gray-500">
            <input type="checkbox"></input> 20% or more
          </li>
          <li className="p-2 text-base text-gray-500">
            <input type="checkbox"></input> 30% or more
          </li>
          <li className="p-2 text-base text-gray-500">
            <input type="checkbox"></input> 40% or more
          </li>
          <li className="p-2 text-base text-gray-500">
            <input type="checkbox"></input> 50% or more
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SideNavbar;
