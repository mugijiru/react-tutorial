import React, { MouseEventHandler } from 'react'

type Props = {
  onClick: MouseEventHandler,
  value: number
}

const Square: React.FC<Props> = (props) => {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  )
}

export default Square
