import { storage } from '../lib/storage';
import { saveUsername } from '../user';

jest.mock('../lib/storage.ts');

test('first example', () => {
    const myMock = jest.fn()
        .mockReturnValueOnce(true)
        .mockReturnValueOnce('Hello World');
    
    // console.log(myMock);
    const result1 = myMock();
    const result2 = myMock();

    expect(myMock).toHaveBeenCalled();
    // expect(myMock).toHaveBeenCalledTimes(3);

    expect(result1).toBe(true);
    expect(result2).toBe('Hello world');
});

test('second example', () => {
    const username = 'john doe';
    saveUsername(username);
    expect(storage.save).toHaveBeenCalledTimes(1);
    expect(storage.save).toHaveBeenCalledWith({ key: 'username', value: 'john doe'});
})