import React, {memo} from 'react';
import {Layout, Space} from "antd";
import PropTypes from 'prop-types';
import {CoffeeOutlined} from "@ant-design/icons";
import './index.less';

const Header = memo((props) => {
    const {height} = props;
    return (
       <>
           <Layout.Header style={{height, lineHeight: height}} className='pages-layout-header-fixed'></Layout.Header>
           <Layout.Header style={{height, lineHeight: height}} className='pages-layout-header'>
               <Space className='header-logo'>
                   <span>中国历史</span>
                   <CoffeeOutlined />
               </Space>
           </Layout.Header>
       </>
    );
});
Header.propTypes = {
    height: PropTypes.string,
}
Header.defaultProps = {
    height: '48px',
}
export default Header;
