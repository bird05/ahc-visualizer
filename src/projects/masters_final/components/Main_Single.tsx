import React from 'react';
// CSS
import styled from "@emotion/styled";
// import useMedia from "use-media";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// MUI
import Stack from '@mui/material/Stack';
// ビルトインフック
import { useState, memo} from 'react';
// 外部コンポーネント
import { InputTypeSelector } from './UI/InputTypeSelector';
import { FolderSelector } from './UI/FolderSelector';
import { SeedSelector } from './UI/SeedSelector';
import { InputTextarea } from './UI/InputTextarea';
import { OutputTextarea } from './UI/OutputTextarea';
import { PlayStopButton } from './UI/PlayStopButton';
import { SpeedBar } from './UI/SpeedBar';
import { TarTurnInput } from './UI/TarTurnInput';
import { SeekBar } from './UI/SeekBar';
// import { Board } from './Board';
import { BoardController } from './display/BoardController';
import { ScoreChartController } from './display/ScoreChartController';
import GenerateGIF from '../functions/GenerateGIF';
// 型
import type { Input_type, Output_type } from "../types/typeFormat"

export const Main_Single = () => {
  // useState==============================

  console.log("Main_Single");
  return(
    <>
      <InputTypeSelector/>
      <SeedSelector/>
      <br></br>
      <InputTextarea/>
      <br></br>
      <OutputTextarea/>
      <br></br>
      <FolderSelector/>
      <br></br>
      <GenerateGIF/>
      <SDiv>
        <PlayStopButton/>
        <SpeedBar/>
        <TarTurnInput/>
      </SDiv>
      <SeekBar/>
      <hr></hr>
      <Stack direction="row">
        <div><BoardController/></div>
        {/* <ScoreChartController chartNum={1}/> */}
      </Stack>
    </>
  );
};
const SDiv = styled.div`
display: flex;
margin-top:5px;
`