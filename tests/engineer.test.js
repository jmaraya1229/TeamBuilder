const { TestWatcher } = require('jest')
const Engineer = require('../lib/engineer.js')

let en = new Engineer("Jesse", "10", "jess@gmail.com", "jithub")

test("Test getName", () => {
    expect(en.getName()).toBe("Jesse")
})

test("Test getId", () => {
    expect(en.getID()).toBe("10")
})

test("Test getEmail", () => {
    expect(en.getEmail()).toBe("jess@gmail.com")
})

test("Test getGithub", () => {
    expect(en.getGithub()).toBe("jithub")
})

test("Test getRole", () => {
    expect(en.getRole()).toBe("Engineer")
})