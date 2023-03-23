// some setup
// some action
// some validations of inputs and expectetions

import { addition, makeCapiltal } from "./operations"

const testOutcomes = [
    {
        value1: 30,
        value2: 40,
        result: 70
    },
    {
        value1: -30,
        value2: 40,
        result: 10
    },
    {
        value1: -30,
        value2: -40,
        result: -70
    }
]

for (const iterator of testOutcomes) {
    test('check some', () => {
        let res = addition(iterator.value1, iterator.value2)
        expect(res).toBe(iterator.result)
    })
}



test('check some', () => {
    let res = addition(40, 50)
    expect(res).not.toBe(50)        
})





test('check capitilize method for "sagar"', () => {
    let res = makeCapiltal("sagar")
    expect(res).toBe("Sagar")
})

test('check capitilize method for "saGAR"', () => {
    let res = makeCapiltal("saGAR")
    expect(res).toBe("Sagar")
})

test('check capitilize method for "SAGAR"', () => {
    let res = makeCapiltal("SAGAR")
    expect(res).toBe("Sagar")
})
