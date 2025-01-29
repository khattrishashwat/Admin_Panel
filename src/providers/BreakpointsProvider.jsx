import React, { useState, useEffect, useContext, createContext } from "react";
import { Theme, useMediaQuery } from "@mui/material";

const BreakpointContext = createContext({});

const BreakpointsProvider = ({ children }) => {
  const [currentBreakpoint, setCurrentBreakpoint] = useState("xs");
  const up = (key) => useMediaQuery((theme) => theme.breakpoints.up(key));
  const down = (key) => useMediaQuery((theme) => theme.breakpoints.down(key));
  const only = (key) => useMediaQuery((theme) => theme.breakpoints.only(key));
  const between = (start, end) =>
    useMediaQuery((theme) => theme.breakpoints.between(start, end));

  const isXs = between("xs", "sm");
  const isSm = between("sm", "md");
  const isMd = between("md", "lg");
  const isLg = between("lg", "xl");
  const isXl = between("xl", "2xl");
  const is2Xl = up("2xl");

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
      value={{ currentBreakpoint, up, down, only, between }}
    >
      {children}
    </BreakpointContext.Provider>
  );
};

export const useBreakpoints = () => useContext(BreakpointContext);
export default BreakpointsProvider;
