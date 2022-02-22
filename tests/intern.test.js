const { TestWatcher } = require('jest')
const Intern = require('../lib/intern.js')

let intern = new Intern("Jess", "9", "js@gmail.com", "J University")

test("Test getName", () => {
    expect(intern.getName()).toBe("Jess")
})

test("Test getId", () => {
    expect(intern.getID()).toBe("9")
})

test("Test getEmail", () => {
    expect(intern.getEmail()).toBe("js@gmail.com")
})

test("Test getSchool", () => {
    expect(intern.getSchool()).toBe("J University")
})

test("Test getRole", () => {
    expect(intern.getRole()).toBe("Intern")
})