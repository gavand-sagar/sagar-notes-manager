import { render,screen } from "@testing-library/react";
import Capitalize from "./Capitalize";

test('check if span 1 present ', () => {
    render(<Capitalize />)
    let spn01 = screen.getByTestId('spn01')
    expect(spn01).toBeInTheDocument();
})

test('check for "sagar"', () => {
    render(<Capitalize label={'sagar'}/>)
    let spn01 = screen.getByTestId('spn01')
    expect(spn01.innerHTML).toBe('Sagar');
})

test('check for "saGAr"', () => {
    render(<Capitalize label={'saGAr'}/>)
    let spn01 = screen.getByTestId('spn01')
    expect(spn01.innerHTML).toBe('Sagar');
})

test('check for "SAGAR"', () => {
    render(<Capitalize label={'SAGAR'}/>)
    let spn01 = screen.getByTestId('spn01')
    expect(spn01.innerHTML).toBe('Sagar');
})