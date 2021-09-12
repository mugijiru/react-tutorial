import { render, fireEvent, screen } from '@testing-library/react'

import Square from '.'

describe('Square', () => {
  it('props で渡された値が表示されること', () => {
    render(<Square value="X" onClick={() => { }} />)
    expect(screen.getByRole('button').textContent).toEqual('X')
  })

  it('クリックすると props で渡された関数が実行されること', () => {
    const alertMock = jest.spyOn(window, 'alert').mockImplementation();
    render(<Square value="" onClick={() => { alert('This is test!') }} />)
    fireEvent.click(screen.getByRole('button'))
    expect(alertMock).toHaveBeenCalledTimes(1)
    expect(window.alert).toBeCalledWith('This is test!');
  })
})
