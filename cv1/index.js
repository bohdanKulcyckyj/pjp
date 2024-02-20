"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var INPUT_LINES_COUNT = 3;
var INPUT_LINES = [
    '2 * (3+5)',
    '15 - 2**7',
    '5-(5)'
];
var ALLOWED_OPERATORS = '+-*/';
var checkForUnaryOperators = function (expression) {
    var expressionCharList = expression.split('');
    expressionCharList.forEach(function (_char, _index) {
        if (ALLOWED_OPERATORS.includes(_char)) {
            if (_index === 0 || isNaN(Number(expressionCharList[_index - 1])))
                throw 'ERROR';
        }
    });
};
var customEval = function (expression) {
    return 'ERROR';
};
var evaluateExpression = function (expression) {
    var expressionWithoutWhitespaces = expression.trim();
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
INPUT_LINES.forEach(function (_line) { return console.log(evaluateExpression(_line)); });
