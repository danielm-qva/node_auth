import { describe, test, expect } from '@jest/globals'

import { suma, resta } from './example'

describe('module operaciones', () => {
    test('add 1 + 2 =  3', () => {
        expect(suma(1, 2)).toBe(3)
    });

    test('resta 4 - 6 = -2', () => {
        expect(resta(4, 6)).toBe(-2)
    })
});