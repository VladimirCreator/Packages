'use strict';

/**
  * @param {number[][]} matrix
  * @param {number} min
*/
function print(matrix, min) {
    const padding = Math.max(
        ...matrix.flat().map(number => number.toString().length)
    ) + 1;

    TESTABLE(
        matrix,
        (number) => undefined,
        (row) => {
            let string = row.reduce(
                (string, number) => string += number.toString().padStart(padding, ' '),
                ''
            ) + ' |';
            string += ' ' + Math.min(...row.filter(number => number > 0)).toString();
            if (row.includes(min)) {
                string += ' *';
            }

            console.log(string);
        },
        (column) => undefined,
    );
}

/** Возвращает функцию, которая возвращает случайное число в заданном диапазоне.
  * @param {{ min: number, max: number }} range
  * @returns {(undefined: undefined, index: number) => number}
*/
function init_initializer({ min, max }) {

    const multiplier = Math.abs(min) + max;

    return function initializer(undefined, index) {
        const seed = Math.random();
        const number = seed * multiplier;

        return Math.round(number) + min;
    };
}

/** Возвращает матрицу.
  * @param {{ rows: number, columns: number }} config
  * @param {(undefined: undefined, index: number) => number} init_number
  * @return {number[][]}
*/
function init_matrix({ rows: height, columns: width }, init_number) {
    width = { length: width }; height = { length: height };

    const build_row = (undefined, index) => Array.from(width, init_number);
    const matrix = Array.from(height, build_row);
    return matrix;
}

/**
  * @param {number[][]} matrix
  * @param {(matrix: number[][], i: number, j: number)} strategy
  * @return {void}
*/
function init_visitor(strategy) {
    let { rowIndex: i = 0, columnIndex: j = 0 } = { rowIndex: 0, columnIndex: 0 };

    /**
      * @param {number[][]} matrix
      * @param {(number: number) => void} onNumber
    */
    return function visit(matrix, onNumber) {
        for (i = 0; i < matrix.length; ++i) {
            for (j = 0; j < matrix[i].length; ++j) {
                onNumber(strategy(matrix, i, j));
            }
        }
    };
}

/**
  * @param {number} min
  * @param {number} max
  * @return { { min: number, max: number } }
*/
function init_range(min, max) {
    return {
        min,
        max
    };
}

/**
  * @param { number[][] } matrix
  * @return { ({ didReadRow, didReadColumn }: { didReadRow: (row: number[], min: number) => void, didReadColumn: (column: number[]) => void }) => void }
*/
function init_main(matrix) {

    const flattenedMatrix = matrix.flat();

    const [min, max] = [
        Math.min(...flattenedMatrix),
        Math.max(...flattenedMatrix)
    ];

    return function main({ didReadRow, didReadColumn }) {
        let row = [];
        let column = [];

        for (let rowIndex = 0; rowIndex < matrix.length; ++rowIndex) {
            row = [];
            column = [];

            for (let columnIndex = 0; columnIndex < matrix[rowIndex].length; ++columnIndex) {
                row.push(matrix[rowIndex][columnIndex]);
                column.push(matrix[columnIndex][rowIndex]);
            }
            didReadRow?.call(undefined, row, min);
            didReadColumn?.call(undefined, column);
        }
        //print(matrix, min);
    }

}

const range = init_range(-100, 100);
const initializer = init_initializer(range);

const matrix = init_matrix({ rows: 10, columns: 10 }, initializer)

const main = init_main(!true ? matrix : [[0, 1, 2], [3, 4, 5], [6, 7, 8]]);
main(
    {
        didReadRow: (row, extremum) => {
            const min = Math.min(...row.filter(number => number > 0));

            const repeated = row
                .map(
                    (number, index) => {
                        // every 3 elements
                        if (index === 0) {
                            return undefined;
                        }

                        if (index % 3 == 0 || index === row.length - 1) {
                            const chunk = row.slice(index - 3, index);
                            return chunk;
                        }
                    }
                )
                .filter(block => block)
                .map(
                    (array) => {
                        if (array.every(number => number >= 0) || array.every(number => number < 0)) {
                            return 1;
                        }
                        else {
                            return 0;
                        }
                    }
                )
                .reduce(
                    (accumulator, value) => accumulator += value, 0
                );

            const string = row.join(' ')
                .concat(' | ', min)
                .concat(' | ', repeated)
                .concat(' | ', row.includes(extremum) ? '*' : '');

            console.log(string);
        }
    }
)
