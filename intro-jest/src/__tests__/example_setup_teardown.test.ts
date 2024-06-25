describe('setup and teardown examples', () => {
    
    // Antes de todos los tests
    beforeAll(() => {
        console.log('beforeAll');
    })

    // Antes de cada test
    beforeEach(() => {
        console.log('beforeEach');
    })

    // Después de todos los test
    afterAll(() => {
        console.log('afterAll');
    })

    // Después de cada test
    afterEach(() => {
        console.log('afterEach');
    })
    
    test('example 1', () => {
        expect(true).toBe(true);
    })
});