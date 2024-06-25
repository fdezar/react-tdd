import { test, expect, describe } from '@jest/globals';

// Describe es opcional, es para agrupar
describe('this is for group test cases', () => {
    // Se puede usar It en lugar de Test
    test('description', () => {
        // To Be valida equidad/equivalencia
        expect(true).toBe(true);
    });

    test('description 2', () => {
        expect(true).toBe(true);
    });
});