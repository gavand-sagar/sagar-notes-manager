import { fireEvent, render, screen } from "@testing-library/react"
import Toggle from "./Toggle"

test('to check if button exists',()=>{
    render(<Toggle/>)
    let button = screen.getByTestId('btn01')
    expect(button).toBeInTheDocument();
})

test('to check if button exists',()=>{
    render(<Toggle/>)
    let span = screen.getByTestId('spn01')
    expect(span).toBeInTheDocument();
})

test('to check if span has "HTML" ',()=>{
    render(<Toggle/>)
    let span = screen.getByTestId('spn01')
    expect(span.innerHTML).toBe('HTML');
})

test('to check if span changes to CSS ',()=>{
    render(<Toggle/>)

    let span = screen.getByTestId('spn01')
    let button = screen.getByTestId('btn01')

    fireEvent.click(button)

    expect(span.innerHTML).toBe('CSS');
})



test('to check if span changes to CSS ',()=>{
    render(<Toggle/>)
    
    let span = screen.getByTestId('spn01')
    let button = screen.getByTestId('btn01')

    fireEvent.click(button)
    fireEvent.click(button)

    expect(span.innerHTML).toBe('HTML');
})