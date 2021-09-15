import { render, screen, fireEvent } from '@testing-library/react'

import Board from '.'

jest.mock('../Square', () => ({ value, onClick }: { value: string | null, onClick: () => void }) => {
  return (
    <button type="button" data-testid="mocked-square" onClick={onClick}>
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

  it('各 Square が Click された時は渡した関数が実行されること', () => {
    const alertMock = jest.spyOn(window, 'alert').mockImplementation()
    render(<Board squares={Array(9).fill(null)} onClick={() => { alert("clicked!") }} />)

    screen.getAllByTestId("mocked-square").forEach((square) => {
      fireEvent.click(square)
      expect(window.alert).toBeCalledWith('clicked!')
    })
    expect(alertMock).toHaveBeenCalledTimes(9)
  })
})
