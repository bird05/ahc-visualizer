import React from "react";
// ビルトインフック
import { useState,useEffect,useRef } from "react";
// Redux
import { useSelector } from '../../store/store';
import { useDispatch } from 'react-redux';
import { setTarTurn } from '../../store/tarTurnSlice';
import { setPlayingFlag } from '../../store/playingFlagSlice';
// CSS
import styled from "@emotion/styled";
// MUI
import Stack from '@mui/material/Stack';
// 型
// import type { Input_type, Output_type, Ope_type } from "../types/typeFormat"
// import { prependOnceListener } from "process";

export const TarTurnInput = () => {
  // useState==============================
  // const [Input, setInput] = useState([] as Input_type); // Inputデータ
  // const [intervalID,setIntervalID] = useState(null);
  let intervalID=0;
  const refIntervalID = useRef(intervalID);
  // Redux==============================
  const s = useSelector((state) => state.output.b.s);
  const tarTurn = useSelector((state) => state.tarTurn.tarTurn);
  const seed = useSelector((state) => state.input.seed);
  const playingFlag = useSelector((state) => state.playingFlag.playingFlag);
  const dispatch = useDispatch();
  // useEffect==============================
  const refTarTurn = useRef(tarTurn);
  useEffect(() => {
    refTarTurn.current = tarTurn;
    console.log(refTarTurn.current);
  },[tarTurn]);
  useEffect(() => {
    if(playingFlag) playBoard();
    else stopBoard();
  },[playingFlag]);
  // Seed変更時にターンを0に戻す
  useEffect(() => {
    dispatch(setTarTurn(0));
  },[seed]);
  // Styled CSS==============================
  const InputTrunSelect = styled.input`
  width:70px;
  text-align:right; 
  `
  const SLabel = styled.label`
  padding: 0px 4px;
  `

  // 関数==============================
  // tarTurn読み取り
  const readTarTurn = () => {

  }
  // 定期実行
  const advanceTarTurn = () => {
    dispatch(setTarTurn(Number(refTarTurn.current)+1));
    // console.log(refTarTurn.current);
  }
  // 再生開始
  function playBoard(){
    // console.log("start");
    clearInterval(refIntervalID.current);
    refIntervalID.current = setInterval(() => {
      // ターン上限で停止
      if(refTarTurn.current>=s.length){
        stopBoard();
      }else{
        advanceTarTurn();
        console.log(refIntervalID.current);
      }
    }, 100);
  }
  // 再生停止
  const stopBoard = () => {
    // console.log("stop");
    clearInterval(refIntervalID.current);
    refIntervalID.current=0;
    dispatch(setPlayingFlag(false))
  }
  // DOM==============================
  console.log("TarTurnInput");
  return(
    <>
      <SLabel>turn:</SLabel>
      <InputTrunSelect type="number" id="turn" defaultValue={tarTurn} min={0} max={s.length} onChange={(e) => dispatch(setTarTurn(e.target.value))}/>
    </>
  )
};