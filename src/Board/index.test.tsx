import { render, screen } from '@testing-library/react'

import Board from '.'

jest.mock('../Square', () => ({ value }: { value: string | null }) => {
  return (
    <button type="button" data-testid="mocked-square">
      {value}
    </button>
  )
})

describe('Board', () => {
  it('Square が9つ表示されること', () => {
    render(<Board squares={Array(9).fill(null)} onClick={() => {}} />)
    expect(screen.queryAllByTestId("mocked-square").length).toEqual(9)
  })

  it('各 Square には squares で与えられた文字が表示されること', () => {
    const squares = ["X", "X", "O", null, null, null, null, null, null]
    render(<Board squares={squares} onClick={() => { }} />)
    expect(screen.queryAllByText("X").length).toEqual(2)
    expect(screen.queryAllByText("O").length).toEqual(1)
  })
})
