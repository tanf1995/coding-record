import {Component} from 'react';
import { Menu, Icon } from 'antd';
import Link from 'umi/link';


const SubMenu = Menu.SubMenu; 

class BasicMenu extends Component{
    render(){
        return (
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                <Menu.Item key="1">
                    <Link to="/">
                        <Icon type="pie-chart" />
                        <span>首页</span>
                    </Link>
                </Menu.Item>
                <SubMenu
                    key="sub1"
                    title={
                        <span>
                            <Icon type="dashboard" />
                            <span>Dashboard</span>
                        </span>
                    }
                >
                    <Menu.Item key="2">
                        <Link to='/dashboard/analyze'>
                            分析页
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <Link to="/dashboard/monitor">
                            监控页
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="4">
                        <Link to="/dashboard/workplace">
                            工作台
                        </Link>
                    </Menu.Item>
                </SubMenu>
                <Menu.Item key="5">
                    <Link to="/puzzlecards">
                        <Icon type="pie-chart" />
                        <span>卡片列表</span>
                    </Link>
                </Menu.Item>
                <Menu.Item key="6">
                    <Link to="/mylist">
                        <Icon type="pie-chart" />
                        <span>复杂列表</span>
                    </Link>
                </Menu.Item>
            </Menu>
        )
    }
}

export default BasicMenu;