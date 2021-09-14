import { useState } from 'react'
import Board from './Board'
import TSquare from './TSquare'

function calculateWinner(squares: TSquare[]): string | null {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]
  for (let i = 0; i < lines.length; i += 1) {
    const [a, b, c] = lines[i]
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]
    }
  }
  return null
}

type History = {
  squares: TSquare[]
}

function Game(): JSX.Element {
  const [history, setHistory] = useState<History[]>([{ squares: Array(9).fill(null) }])
  const [stepNumber, setStepNumber] = useState<number>(0)
  const [xIsNext, setXIsNext] = useState<boolean>(true)

  const handleClick = (i: number) => {
    const historySubset = history.slice(0, stepNumber + 1)
    const current = historySubset[historySubset.length - 1]
    const squares = current.squares.slice()
    if (calculateWinner(squares) || squares[i]) { return }

    squares[i] = xIsNext ? 'X' : 'O'

    setHistory(historySubset.concat([{ squares }]))
    setStepNumber(historySubset.length)
    setXIsNext(!xIsNext)
  }

  const jumpTo = (step: number) => {
    setStepNumber(step)
    setXIsNext((step % 2) === 0)
  }

  const current = history[stepNumber]
  const winner = calculateWinner(current.squares)

  const moves = history.map((_step, move) => {
    const desc = move ? `Go to move #${move}` : 'Go to game start'

    /* eslint-disable react/no-array-index-key */
    return (
      <li key={move}>
        <button type="button" onClick={() => jumpTo(move)}>{desc}</button>
      </li>
    )
    /* eslint-enable react/no-array-index-key */
  })

  let status
  if (winner) {
    status = `Winner: ${winner}`
  } else {
    status = `Next player: ${xIsNext ? 'X' : 'O'}`
  }

  return (
    <div className="game">
      <div className="game-board">
        <Board squares={current.squares} onClick={(i: number) => handleClick(i)} />
      </div>
      <div className="game-info">
        <div>{status}</div>
        <ol>{moves}</ol>
      </div>
    </div>
  )
}

export default Game
