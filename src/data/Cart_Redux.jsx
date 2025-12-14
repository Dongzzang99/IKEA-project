//Redux 라이브러리로 전역 state 관리 하는 파일
import { configureStore, createSlice } from "@reduxjs/toolkit";

let item = createSlice({ name: "user", initialState: "kim" });

export default configureStore({
  reducer: {
    product: item.reducer,
  },
});
