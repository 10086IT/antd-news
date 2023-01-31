import React from 'react';
import {Layout} from 'antd';
import './index.less';

export default class Pages extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
                <div className='pages'>
                    <Layout hasSider className='pages-layout'>
                        <Layout.Sider className='pages-layout-sider-fixed'></Layout.Sider>
                        <Layout.Sider className='pages-layout-sider'>sider</Layout.Sider>
                        <Layout >
                            <Layout.Header className='pages-layout-header-fixed'></Layout.Header>
                            <Layout.Header className='pages-layout-header'>header</Layout.Header>
                            <Layout.Content>content</Layout.Content>
                        </Layout>
                    </Layout>
                </div>
        )
    }
}
