import { Box } from '@mui/material';
import React, { PropsWithChildren } from 'react'
interface ColorSelectorProps {
    bgColor?: string;
    isSelected: boolean;
    onSelect: () => void;
  }

const Selector = ({
    bgColor,
    isSelected,
    onSelect,
    children
  }: PropsWithChildren<ColorSelectorProps>) => (
    <>
      <span className={`${isSelected ? "border-2" : "none"} border-violet-500 p-[2px]`}>
        <Box
          className={`h-4 w-4 flex justify-center place-items-center p-4 cursor-pointer `}
          style={bgColor ? {backgroundColor: bgColor} : {backgroundColor: "white"}}
          onClick={onSelect}
        >{children}</Box>
      </span>
    </>
  );


export default Selector