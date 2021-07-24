import React, { Component } from 'react'
import { Provider } from './context'

interface IFormProps {
    onSubmit?: (data: object) => void
}

export default class Form extends Component<IFormProps> {
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
