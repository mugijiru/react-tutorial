import { MouseEventHandler } from 'react'

type Props = {
  onClick: MouseEventHandler,
  value: string | null
}

function Square({ onClick, value }: Props): JSX.Element {
  return (
    <button type="button" className="square" onClick={onClick}>
      {value}
    </button>
  )
}

export default Square
