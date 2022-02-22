const { TestWatcher } = require('jest')
const Employee = require('../lib/employee.js')

let em = new Employee("Bryle", "10", "b@gmail.com")

test("Test getName", () => {
    expect(em.getName()).toBe("Bryle")
})

test("Test getId", () => {
    expect(em.getID()).toBe("10")
})

test("Test getEmail", () => {
    expect(em.getEmail()).toBe("b@gmail.com")
})

test("Test getRole", () => {
    expect(em.getRole()).toBe(Employee)
})