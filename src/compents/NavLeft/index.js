import React from 'react';
import { Menu } from 'antd';
import './index.less'

//左侧菜单的组件
import MenuConfig from './../../config/menuConfig'
const SubMenu = Menu.SubMenu;
export default class NavLeft extends React.Component{
    componentWillMount(){
        const menuTreeNode = this.renderMenu(MenuConfig)
        this.setState({
            menuTreeNode
        })
    }
    //渲染菜单树 (递归的方法)
    renderMenu = (data) =>{
        return data.map((item)=>{
            if(item.children){
                return (
                    <SubMenu title={item.title} key={item.key}>
                        {this.renderMenu(item.children)}
                    </SubMenu>
                )
            }
            return <Menu.Item title={item.title} key={item.key}>
                {item.title}
            </Menu.Item>
        })
    }
    handleClick =(e)=>{
        console.log(e)
    }
    render(){
        return(
            <div>
                <div className="logo">
                    <img src="/assets/logo-ant.svg" alt=""/>
                    <h1>大唐网络</h1>
                </div>
                <Menu theme="dark" onClick={this.handleClick}>
                    {this.state.menuTreeNode}
                </Menu>
            </div>
        )
    }
} 