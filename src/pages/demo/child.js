import React from 'react';

export default class Child extends React.Component{
   

    render(){
        return <div>
            <div>这是一个子元素</div>
            <p style={{color:'red'}}>{this.props.name}</p>
        </div>
    }
}