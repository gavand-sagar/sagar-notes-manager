import { render, screen } from "@testing-library/react"
import UserInfo from "./UserInfo"

test('check if label 1 present ', () => {
    render(<UserInfo />)
    let label = screen.getByTestId('lbl01')
    expect(label).toBeInTheDocument();
})

test('check if label2  present ', () => {
    render(<UserInfo />)
    let label2 = screen.getByTestId('lbl02')
    expect(label2).toBeInTheDocument();
})


test('check if label 1 has content "Name :"', () => {
    render(<UserInfo />)
    let label = screen.getByTestId('lbl01')
    expect(label.innerHTML).toBe('Name :')
})


test('check firstName="sagar"', () => {    
    render(<UserInfo firstName="sagar"/>)    
    let label2 = screen.getByTestId('lbl02')
    expect(label2.innerHTML).toBe('sagar')
})

test('check firstName="Mike"', () => {    
    render(<UserInfo firstName="Mike"/>)    
    let label2 = screen.getByTestId('lbl02')
    expect(label2.innerHTML).toBe('Mike')
})