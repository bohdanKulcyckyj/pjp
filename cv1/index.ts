import { ExpressionResultType } from "./types"

const INPUT_LINES_COUNT = 3;
const INPUT_LINES = [
    '2 * (3+5)',
    '15 - 2**7',
    '5-(5)'
]
const ALLOWED_OPERATORS: string = '+-*/' 

const checkForUnaryOperators = (expression: string) => {
    const expressionCharList = expression.split('')

    expressionCharList.forEach((_char: string, _index: number): void => {
        if(ALLOWED_OPERATORS.includes(_char)) {
            if(_index === 0 || isNaN(Number(expressionCharList[_index - 1]))) throw 'ERROR'
        }
    })
}

const customEval = (expression: string): ExpressionResultType => {
    return 'ERROR'
}

const evaluateExpression = (expression: string): ExpressionResultType => {
    const expressionWithoutWhitespaces = expression.trim();
    try {
        checkForUnaryOperators(expressionWithoutWhitespaces)
        //return customEval(expressionWithoutWhitespaces)
        return eval(expressionWithoutWhitespaces)
    } catch {
        return "ERROR"
    }
}

// Printing output
INPUT_LINES.forEach(_line => console.log(evaluateExpression(_line)))