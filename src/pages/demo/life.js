import React from 'react';
import Child from './child';
import './index.less'
//引入antd的button插件
import { Button } from 'antd'

export default class Life extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            count:0
        };
        
    }
    //箭头函数可以不用bind 绑定
    handleAdd=()=>{
        this.setState({
            count:this.state.count+1
        })
    }

    //直接写方法的话 调用方法时需要使用bind绑定this
    handlejf(){
        this.setState({
            count:this.state.count-1
        })
    }

    //render方法输出内容 必须有return方法 而且必须有一个跟元素
    render(){
        return <div className="content">
            <p>React 生命周期介绍</p>
            <button onClick={this.handleAdd}>点击一下</button>
            <Button onClick={this.handleAdd} type="primary">Primary</Button>
            <button onClick={this.handlejf.bind(this)}>点击一下</button>
            <p>{this.state.count}</p>
            <Child name={this.state.count}></Child>
        </div>
    }
}