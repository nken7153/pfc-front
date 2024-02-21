import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageFrame from "./PageFrame";
import AimSettingPage from "./Pages/AimSetting/AimSettingPage";
import AddDishPage from "./Pages/Dish/AddDishPage";
import SearchDishPage from "./Pages/Dish/SearchDishPage";
import { MeasureMetabolicPage } from "./Pages/Measure/MeasureMetabolicPage";
import Top from "./Pages/Menu";
import SearchStuffPage from "./Pages/Stuff/SearchStuffPage";

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageFrame />}>
          <Route path="/" element={<Top />} />
          <Route path="/Stuff/Search" element={<SearchStuffPage />} />
          <Route path="/Dish/Add" element={<AddDishPage />} />
          <Route path="/Dish/Search" element={<SearchDishPage />} />
          <Route path="/Measure/Metabolic" element={<MeasureMetabolicPage />} />
          <Route path="/Measure/AIM" element={<AimSettingPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default Routers;
