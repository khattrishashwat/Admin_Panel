import React, { useState, useEffect, useContext, createContext } from "react";
import { useMediaQuery } from "@mui/material";

const BreakpointContext = createContext({});

const useUp = (key) => useMediaQuery((theme) => theme.breakpoints.up(key));
const useDown = (key) => useMediaQuery((theme) => theme.breakpoints.down(key));
const useOnly = (key) => useMediaQuery((theme) => theme.breakpoints.only(key));
const useBetween = (start, end) =>
  useMediaQuery((theme) => theme.breakpoints.between(start, end));

const BreakpointsProvider = ({ children }) => {
  const [currentBreakpoint, setCurrentBreakpoint] = useState("xs");

  const isXs = useBetween("xs", "sm");
  const isSm = useBetween("sm", "md");
  const isMd = useBetween("md", "lg");
  const isLg = useBetween("lg", "xl");
  const isXl = useBetween("xl", "2xl");
  const is2Xl = useUp("2xl");

  useEffect(() => {
    if (isXs) setCurrentBreakpoint("xs");
    if (isSm) setCurrentBreakpoint("sm");
    if (isMd) setCurrentBreakpoint("md");
    if (isLg) setCurrentBreakpoint("lg");
    if (isXl) setCurrentBreakpoint("xl");
    if (is2Xl) setCurrentBreakpoint("2xl");
  }, [isXs, isSm, isMd, isLg, isXl, is2Xl]);

  return (
    <BreakpointContext.Provider
      value={{ currentBreakpoint, useUp, useDown, useOnly, useBetween }}
    >
      {children}
    </BreakpointContext.Provider>
  );
};

export const useBreakpoints = () => useContext(BreakpointContext);
export default BreakpointsProvider;
