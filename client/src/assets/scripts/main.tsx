import React from 'react';
import ReactDOM from 'react-dom/client';
import MyInfo from './mycomponent';


ReactDOM.createRoot(document.getElementById("app")!).render(
    <React.StrictMode>
        <MyInfo/>
        <MyInfo/>
        <MyInfo/>
        <MyInfo/>
        <MyInfo/>
    </React.StrictMode>
)