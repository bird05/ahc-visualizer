import { createSlice } from '@reduxjs/toolkit';
// 型
import type { Output_type } from "../types/typeFormat"
// 関数インポート
import { text_to_Output } from '../functions/CommonFunctions';

export const outputSlice = createSlice({
  name: 'output',
  initialState: {
    b:{
      is_valid:false,
      c:new Array(),
      d:new Array(),
      V:0,
      t:new Array(),
      r:new Array(),
    } as Output_type,
    urls:new Array(),
    isCompleteSet:false,
  },
  reducers: {
    setOutput: (state, action) => {
      if (Number.isNaN(action.payload)){
        state.b.is_valid=false;
        return;
      }
      state.b=text_to_Output(action.payload);
      state.isCompleteSet=true;
    },
    setUrls: (state, action) => {
      if (Number.isNaN(action.payload)) return;
      state.urls = action.payload;
    },
    // inputSliceにSeedの処理があるのでinputSliceには以下の関数は不要でこちらのみに存在する
    setIsCompleteSet: (state, action) => {
      if (Number.isNaN(action.payload)) return;
      state.isCompleteSet = action.payload;
    },
  },
});

export const { setOutput, setUrls, setIsCompleteSet } = outputSlice.actions;
export default outputSlice.reducer;