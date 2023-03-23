export function addition(num1, numb2) {
    if (num1 == "" || numb2 == "numb2") {
        return 0;
    }
    return num1 + numb2
}

export function makeCapiltal(name) {
    if (name == '') {
        return ''
    }

    if (name == null || name == undefined) {
        return null
    }

    let first = name.charAt(0).toUpperCase()
    let remaining = name.substring(1).toLowerCase();
    return first + remaining;
}