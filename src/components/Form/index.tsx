import React, { Component } from 'react'
import { Provider } from './context'
import Input from './Input'
import Button from './Button'

interface IFormProps {
    onSubmit: (data: object) => void
}

// interface IFromSS {
//   Input: Component
//   Button: Component
// }

export default class Form extends Component<IFormProps, {}, any> {
    state = {
        formData: {},
        changeFormData: (name: string, val: any) => {
            this.setState({
                formData: {
                    ...this.state.formData,
                    [name]: val
                }
            })
        },
        submit: () => {
            this.props.onSubmit && this.props.onSubmit(this.state.formData)
        }
    }
    render() {
        return (
            <Provider value={this.state}>
                {this.props.children}
            </Provider>
        )
    }
}

/* @ts-ignore */
Form.Input = Input
/* @ts-ignore */
Form.Button = Button
