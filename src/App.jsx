import { useState } from "react";
// src/App.jsx
import "./App.css";

import {
  ContainerHeader,
  MainLayout,
  ContainerNavbar,
  Footer,
} from "./components/layout";
import { MenuNavbar } from "./components/menu";
import { HomePage } from "./pages";

//commit test
function App() {
  return (
    <>
      <ContainerHeader />
      <MainLayout>
        {/* 검색 컴포넌트 */}
        <ContainerNavbar />
        {/* 가구 종류 정렬 카드 포함 홈페이지 컴포넌트 */}
        <HomePage />
      </MainLayout>
      <Footer></Footer>
    </>
  );
}

export default App;
