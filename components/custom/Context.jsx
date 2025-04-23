"use client";

import React, { createContext, useContext, useState } from "react";

const ResultContext = createContext(null);

export const useResultContext = () => {
  const { result, SetResult } = useContext(ResultContext);

  return { result, SetResult };
};

const Context = ({ children }) => {
  const [result, SetResult] = useState({
    rank: 1,
    percentage: 60,
    currentScore: 12
  });

  return (
    <ResultContext.Provider value={{ result, SetResult }}>
      {children}
    </ResultContext.Provider>
  );
};

export default Context;
