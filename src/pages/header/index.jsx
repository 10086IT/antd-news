import React, {memo} from 'react';
import {Layout, Space, Dropdown, Avatar, Badge, Tabs} from "antd";
import PropTypes from 'prop-types';
import {BellOutlined, CoffeeOutlined, QuestionCircleOutlined, UserOutlined} from "@ant-design/icons";
import './index.less';


const TabsData = [
    {
        label: (
            <a>
                个人中心
            </a>
        ),
        key: '0',
        children: <div>123</div>
    },
    {
        label: (
            <a>
                个人设置
            </a>
        ),
        key: '1',
        children: <div>123</div>
    },
    {
        type: 'divider',
    },
    {
        label: '退出登录',
        key: '3',
        children: <div>123</div>
    },
];
const items = [
    {
        label: (
            <a>
                个人中心
            </a>
        ),
        key: '0',
    },
    {
        label: (
            <a>
                个人设置
            </a>
        ),
        key: '1',
    },
    {
        type: 'divider',
    },
    {
        label: '退出登录',
        key: '3',
    },
];

const Header = memo((props) => {
    const {height} = props;
    const onChange = (key) => {
        console.log(key);
    };
    return (
       <>
           <Layout.Header style={{height, lineHeight: height}} className='pages-layout-header-fixed'></Layout.Header>
           <Layout.Header style={{height, lineHeight: height, padding: '0 16px'}} className='pages-layout-header header'>
               <a>
                   <Space className='header-left'>
                       <span>中国历史</span>
                       <CoffeeOutlined />
                   </Space>
               </a>
               <Space className='header-right' size='large'>
                   <a>
                       <QuestionCircleOutlined />
                   </a>
                   <Dropdown
                       menu={{
                           items: [],
                       }}
                       trigger={['click']}
                       dropdownRender={()=>(<Tabs centered className='header-right-tabs' defaultActiveKey="1" items={TabsData} onChange={onChange} />)}
                   >
                       <a>
                           <Badge count={99} size='small' offset={[10, -10]} overflowCount={10}>
                               <BellOutlined className='header-notify' />
                           </Badge>
                       </a>
                   </Dropdown>

                   <Dropdown
                       menu={{
                           items,
                       }}
                   >
                           <a>
                               <span>任大銮</span>
                               <Avatar size="middle" icon={<UserOutlined />} />
                           </a>
                   </Dropdown>
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
