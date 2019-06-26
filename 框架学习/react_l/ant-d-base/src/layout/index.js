import React, {Component} from 'react';
import {Layout} from 'antd';
import BasicMean from './components/BasicMean'
import BasicMenu from './components/BasicMean';


const {
    Header, Footer, Sider, Content
} = Layout;

class BasicLayout extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <Layout>
                <Sider
                    width={256}
                    style={{minHeight: '100vh', color: 'white'}}
                >
                    <BasicMenu />
                </Sider>

                <Layout>
                    <Header
                        style={{background: "#fff", textAlign: 'center', padding: 0}}
                    >
                        Header
                    </Header>
                    <Content
                        style={{margin: '24px 16px 0'}}
                    >
                        <div style={{padding: 24, background: '#fff', minHeight: 360}}>
                            {this.props.children}
                        </div>
                    </Content>
                    <Footer
                        style={{textAlign: 'center'}}
                    >
                        Footer
                    </Footer>
                </Layout>
            </Layout>
        )
    }
}

export default BasicLayout;