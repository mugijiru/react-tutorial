import { MouseEventHandler } from 'react'

type Props = {
  onClick: MouseEventHandler,
  value: string | null
}

const Square = ({ onClick, value }: Props) => {
  return (
    <button className="square" onClick={onClick}>
      {value}
    </button>
  )
}

export default Square
