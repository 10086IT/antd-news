import React from 'react';
import {DesktopOutlined, FileOutlined, PieChartOutlined, TeamOutlined, UserOutlined} from "@ant-design/icons";
import {Layout, Menu} from "antd";
import PropTypes from "prop-types";

const Sider = (props) => {
    const {height, theme} = props;
    const [collapsed, setCollapsed] = React.useState(false);

    function getItem(label, key, icon, children) {
        return {
            key,
            icon,
            children,
            label,
        };
    }
    const items = [
        getItem('Option 1', '1', <PieChartOutlined />),
        getItem('Option 2', '2', <DesktopOutlined />),
        getItem('User', 'sub1', <UserOutlined />, [
            getItem('Tom', '3'),
            getItem('Bill', '4'),
            getItem('Alex', '5'),
        ]),
        getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
        getItem('Files', '9', <FileOutlined />),
    ];
    return (
        <>
            <Layout.Sider theme={theme} collapsible collapsed={collapsed} className='pages-layout-sider-fixed'></Layout.Sider>
            <Layout.Sider theme={theme} style={{paddingTop: height}} collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)} className='pages-layout-sider'>
                <Menu theme={theme} defaultSelectedKeys={['1']} mode="inline" items={items} />

            </Layout.Sider>
        </>

    );
};

Sider.propTypes = {
    height: PropTypes.string,
    theme: PropTypes.string,
}
Sider.defaultProps = {
    height: '48px',
    theme: 'light'
}
export default Sider;
