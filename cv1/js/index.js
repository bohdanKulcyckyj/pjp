"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const INPUT_LINES_COUNT = 3;
const INPUT_LINES = [
    '2 * (3+5)',
    '15 - 2**7',
    '5-(5)'
];
const ALLOWED_OPERATORS = '+-*/';
const checkForUnaryOperators = (expression) => {
    const expressionCharList = expression.split('');
    expressionCharList.forEach((_char, _index) => {
        if (ALLOWED_OPERATORS.includes(_char)) {
            if (_index === 0 || isNaN(Number(expressionCharList[_index - 1])))
                throw 'ERROR';
        }
    });
};
const customEval = (expression) => {
    return 'ERROR';
};
const evaluateExpression = (expression) => {
    const expressionWithoutWhitespaces = expression.trim();
    try {
        checkForUnaryOperators(expressionWithoutWhitespaces);
        //return customEval(expressionWithoutWhitespaces)
        return eval(expressionWithoutWhitespaces);
    }
    catch (_a) {
        return "ERROR";
    }
};
// Printing output
INPUT_LINES.forEach(_line => console.log(evaluateExpression(_line)));
