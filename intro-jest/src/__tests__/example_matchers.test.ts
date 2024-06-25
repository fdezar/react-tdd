describe('matchers', () => {

    test('toBe', () => {
        // equivalente: true === true
       expect(true).toBe(true) 
    });

    test('toEqual', () => {
        const data: { [key: string]: number } = { one: 1 };
        data['two'] = 2;
        expect(data).toEqual({one: 1, two: 2});

        const arr = ['one', 'two'];
        expect(arr).toEqual(['one', 'two']);
    })

    test('not', () => {
        expect(true).not.toBe(false);
    })
});