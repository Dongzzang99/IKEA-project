import { useState } from "react";
// src/App.jsx
import "./App.css";

import {
  ContainerHeader,
  MainLayout,
  ContainerNavbar,
  Footer,
} from "./components/layout";
import { MenuNavbar, CategoryProductList } from "./components/menu";
import { HomePage } from "./pages";
import ProductDetailPage from "./pages/ProductDetailPage";
import { Route, Routes } from "react-router-dom";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("none");

  //카테고리 버튼 토글 (현 상태 category와 새로 들어올 category 값이 같으면  none)
  const handleSelectCategory = (category) => {
    setSelectedCategory((prev) => (prev === category ? "none" : category));
  };
  return (
    <>
      <ContainerHeader />
      <MainLayout>
        {/* 검색 컴포넌트 */}
        <ContainerNavbar />
        {/* 가구 카테고리 카드1 */}
        <MenuNavbar onSelectCategory={handleSelectCategory} />
        {/* 가구 카테고리 카드2 - 카테고리 카드 누르면 나오는 리스트 */}
        <CategoryProductList category={selectedCategory} />

        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/products/:id" element={<ProductDetailPage />} />
        </Routes>
      </MainLayout>
      <Footer></Footer>
    </>
  );
}

export default App;
