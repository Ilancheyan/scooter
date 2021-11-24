const User = require('../src/user')
describe ('User class',() => {
    test('Incorrect user name or password', () => {
        const testuser = new User("John","1234")
        testuser.validateUser()
        expect(testuser.validation).toBeFalsy()
        
        
    })
    test('Correct user name and password', () => {
        const testuser = new User("John","123")
        testuser.validateUser()
        console.log(testuser.validation)
        expect(testuser.validation).toBeTruthy()
    })
})