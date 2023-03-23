import { fireEvent, render, screen } from "@testing-library/react"
import Square from "./Square"

test('to check if span changes to CSS ', () => {
    render(<Square />)

    let input = screen.getByTestId('inp01')
    let button = screen.getByTestId('btn01')
    let div = screen.getByTestId('outputdiv')

    // input box value set to 8
    fireEvent.change(input, { target: { value: '8' } })

    fireEvent.click(button)


    expect(div.innerHTML).toBe('64');
})