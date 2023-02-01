import React from 'react';
import {Layout} from 'antd';
import './index.less';
import Sider from "@pages/sider";
import Header from "@pages/header";
import Content from "@pages/content";
import Footer from "@pages/footer";

const Pages = () => {
    return (
        <div className='pages'>
            <Layout hasSider  className='pages-layout'>
                <Sider />
               <Layout>
                   <Header />
                    <Content/>
                   <Footer />
                </Layout>
            </Layout>

        </div>
    )
}

export default Pages;
