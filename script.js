function add(a, b) {
    return a + b
}

function multiply(a,b) {
  return a * b
}

function subtract(a, b) {
    return a - b
}

function divide(a, b) {
    return a / b
}

function sqrt(a) {
    return Math.sqrt(a)
}
function factorial(a) {
    if (a == 1) {
        return 1
    } else {
        return a * factorial(a - 1)
    }
}