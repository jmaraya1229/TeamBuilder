const { TestWatcher } = require('jest')
const Manager = require('../lib/manager.js')

let mn = new Manager("James", "1", "james@gmail.com", "123")

test("Test getName", () => {
    expect(mn.getName()).toBe("James")
})

test("Test getId", () => {
    expect(mn.getID()).toBe("1")
})

test("Test getEmail", () => {
    expect(mn.getEmail()).toBe("james@gmail.com")
})

test("Test getOfficeNumber", () => {
    expect(mn.getOfficeNumber()).toBe("123")
})

test("Test getRole", () => {
    expect(mn.getRole()).toBe("Manager")
})