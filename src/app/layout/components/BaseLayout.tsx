import {RC} from 'react';
import {Outlet} from "react-router-dom";
import {Layout} from "antd";
import NavBar from '@layout/components/NavBar';

const {Header, Content} = Layout;

const BaseLayout:RC = () => {
    return (
        <Layout>
            <Header><NavBar/></Header>
            <Content> <div className="container mx-auto"><Outlet/></div> </Content>
        </Layout>
    );
};


export default BaseLayout;