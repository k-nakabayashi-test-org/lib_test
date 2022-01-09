import { User } from "../lib/index";

test('test', () => {

    const user = new User('tester', 'fisrt', 44);

    expect(user.familyName)
        .toBe('tester');

    expect(user.givenName)
        .toBe('fisrt');

    expect(user.age).toEqual(44);
        
});