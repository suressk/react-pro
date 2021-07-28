import React, { Component } from 'react'
import ctx from './context'

type InputType = 'text' | 'password' | 'checkbox' | 'radio'

interface IInputProps {
    name: string
    type: InputType
}

export default class Input extends Component<IInputProps> {

    static contextType = ctx

    handleChange = (e: React.SyntheticEvent) => {
        const val = e.target.value
        this.context.changeFormData(this.props.name, val)
    }

    render() {
        return (
            <span>
                <input
                    type={this.props.type || 'text'}
                    value={this.context.formData[this.props.name] || ""}
                    onChange={this.handleChange}
                />
            </span>
        )
    }
}
