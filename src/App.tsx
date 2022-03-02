import React from "react";
import { CounterContextProvider } from "./context/CounterContex";
import Router from "./router";
import "./styles/global.css";

export default function App() {
  return (
    <>
      <CounterContextProvider>
        <Router />
      </CounterContextProvider>
    </>
  );
}
