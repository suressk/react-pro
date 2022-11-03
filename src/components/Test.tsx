import React, { Component } from 'react'
import Form from './Form'

export default class Test extends Component {
  render() {
    return (
      <Form onSubmit={ (data: any) => { console.log(data) }}>
        <div>
          账号：
          <Form.Input type="text" name="username" /> 
        </div>
        <div>
          密码：
          <Form.Input type="password" name="pwd" /> 
        </div>
        <div>
          密码：
          <Form.Button>Submit</Form.Button> 
        </div>
      </Form>
    )
  }
}
