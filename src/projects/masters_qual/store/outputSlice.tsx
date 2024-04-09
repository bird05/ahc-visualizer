import { createSlice } from '@reduxjs/toolkit';
// 型
import type { Input_type, Output_type, Ope_type } from "../types/typeFormat"

export const outputSlice = createSlice({
  name: 'output',
  initialState: {
    b:{
      is_valid:false,
      pi:-1,
      pj:-1,
      qi:-1,
      qj:-1,
      s:new Array(),
      d:new Array(),
      e:new Array(),
    } as Output_type
    // pi:-1,
    // pj:-1,
    // qi:-1,
    // qj:-1,
    // s:new Array(),
    // d:new Array(),
    // e:new Array(),
  },
  reducers: {
    setOutput: (state, action) => {
      if (Number.isNaN(action.payload)){
        state.b.is_valid=false;
        return;
      }
      const arr = action.payload.split('\n');
      let pi:number;
      let pj:number;
      let qi:number;
      let qj:number;
      let s:number[]=new Array();
      let d:string[]=new Array();
      let e:string[]=new Array();

      const one_data=arr[0].split(' ');
      if(one_data.length!=4){
        state.b.is_valid=false;
        return;
      }
      pi=Number(one_data[0]);
      pj=Number(one_data[1]);
      qi=Number(one_data[2]);
      qj=Number(one_data[3]);
      const len:number = arr.length;
      for(var i=1; i<len; ++i){
        if(arr[i]=="") break;
        const one_data=arr[i].split(' ');
        s[i-1]=Number(one_data[0]);
        d[i-1]=one_data[1];
        e[i-1]=one_data[2];
      }
      const res:Output_type={
        is_valid: true,
        pi: pi,
        pj: pj,
        qi: qi,
        qj: qj,
        s: s,
        d: d,
        e: e
      }
      state.b=res;;
      // state.b.pi=pi;
      // state.b.pj=pj;
      // state.b.qi=qi;
      // state.b.qj=qj;
      // state.b.s=s;
      // state.b.d=d;
      // state.b.e=e;
    },
  },
});

export const { setOutput } = outputSlice.actions;
export default outputSlice.reducer;