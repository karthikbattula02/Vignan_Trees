import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
import DetailedCard from "./components/DetailedCard";
import sheetData from "./constants";

const App = () => {
  return (
    <>
      <Header/>
      <Outlet />
      <Footer />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App sheetData={sheetData} />,
    children: [
      {
        path: "/",
        element: <Body sheetData={sheetData} />,
      },
      {
        path: ":sno",
        element: <DetailedCard sheetData = {sheetData} />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
