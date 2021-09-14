import { render, screen } from '@testing-library/react'

import Board from '.'

jest.mock('../Square', () => () => (<div data-testid="mocked-square" ></div>))

describe('Board', () => {
  it('Square が9つ表示されること', () => {
    render(<Board squares={Array(9).fill(null)} onClick={() => { }} />)
    expect(screen.queryAllByTestId("mocked-square").length).toEqual(9)
  })
})
