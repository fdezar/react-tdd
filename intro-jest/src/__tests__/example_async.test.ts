// Código asíncrono

// callbacks y promises

const asyncCallback = (cb) => {
    setTimeout(() => {
        cb(false);
    }, 1000);
};

const asyncPromise = () => new Promise((resolve => resolve(true)));

describe('async code', () => {
    test('example of async with callback', (done) => {
        asyncCallback((result) => {
            expect(result).toBe(true);
            done();
        })
    })

    test('example of async with promises', () => {
        return asyncPromise().then((result) => expect(result).toBe(true));
    });

    // si pones test.only corre solo ese test
    test('example of async with async/await', async () => {
        const result = await asyncPromise();
        expect(result).toBe(true);
    });
})