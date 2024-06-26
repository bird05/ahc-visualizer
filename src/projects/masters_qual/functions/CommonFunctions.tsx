// 型
import type { Input_type, Output_type } from "../types/typeFormat"

// export const val_to_hue = (val:number) => {
//   const N:number=10;
//   return 205-val/(N*N-1)*205;
// }
// 範囲外判定
export const is_outer_range = function(x:number, y:number, H:number, W:number){
  return x<0 || H<=x || y<0 || W<=y;
}
// 値を色に変換する関数
export const val_to_hue = function(N:number, val:number){
  return 205-val/(N*N-1)*205;
}
// 数値を0埋めして桁数を合わせる関数(num:数値, len:桁数)
export const zeroPadding = function(num, len){
  return ( Array(len).join('0') + num ).slice( -len );
}
// urlからtextを取得する
export const read_text_from_url = async (url) => {
  const response = await fetch(url);
  const text=await response.text();
  return text;
}
// textをInputに変換する
export const text_to_Input = function(text):Input_type{
  const arr = text.split('\n');
  const res:Input_type={
    is_valid: true,
    t: -1,
    N: 0,
    v: new Array(),
    h: new Array(),
    a: new Array()
  }
  let t:number=-1;
  let N:number=0;
  let v:string[]=new Array();
  let h:string[]=new Array();
  let a:number[][]=new Array();
  const one_data=arr[0].split(' ');
  // 1行目の要素数が2でない
  if(one_data.length!=2){
    res.is_valid=false;
    return res;
  }
  // Nが数値ではない
  if(isNaN(one_data[1])){
    res.is_valid=false;
    return res;
  }
  t=one_data[0];
  N=one_data[1];
  // Nが0以下
  if(N<=0){
    res.is_valid=false;
    return res;
  }
  if(arr.length<N*3){
    res.is_valid=false;
    return res;
  }
  for(let i=1; i<N*3; ++i){
    if(i<=N){
      v[i-1]=arr[i];
    }else if(i<=N*2-1){
      h[i-N-1]=arr[i];
    }else{
      a[i-N*2]=arr[i].split(' ');
      // aの要素数がNでない
      if(a[i-N*2].length!=N){
        res.is_valid=false;
        return res;
      }
    }
  }

  [res.t, res.N, res.v, res.h, res.a] = [t, N, v, h, a];
  return res;
}
// textをOutputに変換する
export const text_to_Output = function(text):Output_type{
  const arr = text.split('\n');
  const res:Output_type={
    is_valid: true,
    pi: -1,
    pj: -1,
    qi: -1,
    qj: -1,
    s: new Array(),
    d: new Array(),
    e: new Array(),
  }
  let pi:number=-1;
  let pj:number=-1;
  let qi:number=-1;
  let qj:number=-1;
  let s:number[]=new Array();
  let d:string[]=new Array();
  let e:string[]=new Array();
  const one_data=arr[0].split(' ');
  // 1行目の要素数が4でない
  if(one_data.length!=4){
    res.is_valid=false;
    return res;
  }
  pi=Number(one_data[0]);
  pj=Number(one_data[1]);
  qi=Number(one_data[2]);
  qj=Number(one_data[3]);
  const len:number = arr.length;
  for(let i=1; i<len; ++i){
    if(arr[i]=="") break;
    const one_data=arr[i].split(' ');
    s[i-1]=Number(one_data[0]);
    d[i-1]=one_data[1];
    e[i-1]=one_data[2];
  }

  [res.pi, res.pj, res.qi, res.qj, res.s, res.d, res.e] = [pi, pj, qi, qj, s, d, e];
  return res;
}