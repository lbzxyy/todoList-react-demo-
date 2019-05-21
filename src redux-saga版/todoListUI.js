import React from 'react';
import { Input,Button,List,Typography } from 'antd';

// 无状态组件  其实就是一个函数
const TodoListUI = (props) => {
    return(
        <div>
        <div>
            <Input placeholder="input info" 
            value={props.inputValue} 
            onChange={ props.handleChange }
            style={{ width: '300px', margin: '10px'}}>
            </Input>
            <Button type="primary" onClick={ props.submit }>提交</Button>
        </div>
        <List
            style={{marginTop: '10px', width: '300px'}}
            bordered
            dataSource={props.list}
            renderItem={(item,index) => (
                <List.Item onClick={ props.handleDelete.bind(this,index) }>
                <Typography.Text mark>[ITEM]</Typography.Text> {item}
                </List.Item>
            )}
            />
      </div>
    )
}


export default TodoListUI;