import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './projects/masters_qual/App.tsx' // プロジェクト切り替え時ここを変える
import './index.css'
import { Provider } from "react-redux";
import { store } from './projects/masters_qual/store/store.tsx'; // プロジェクト切り替え時ここを変える

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
)
