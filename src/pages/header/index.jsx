import React, {memo} from 'react';
import {Layout} from "antd";
import PropTypes from 'prop-types';

const Header = memo((props) => {
    const {height} = props;
    return (
       <>
           <Layout.Header className='pages-layout-header-fixed'></Layout.Header>
           <Layout.Header style={{height}} className='pages-layout-header'>header</Layout.Header>
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
