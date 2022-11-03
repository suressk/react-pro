import React from 'react'

import {Consumer} from './context'

const Button: React.FC<any> = props => {
  return (
    <Consumer>
      { ctx => {
        return (
        <button
          onClick={() => {
            ctx.submit()
          }}
        >
          {props.children}
        </button>)
      }}
    </Consumer>
  )
}

export default Button