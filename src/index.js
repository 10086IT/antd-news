import React from "react";
import ReactDom from 'react-dom';
import Pages from "./pages";
import 'antd/dist/reset.css';
import './index.less';

ReactDom.render(<Pages />, document.querySelector('#root'));
