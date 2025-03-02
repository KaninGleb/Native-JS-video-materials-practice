import {createGreetinMessage, ManType} from './05.ts';
import {beforeEach, expect, test} from 'vitest';

let people: Array<ManType> = [
    {name: 'Andrew Ivanov', age: 33},
    {name: 'Alexander Petrov', age: 24},
    {name: 'Dmitry Sidorov', age: 18},
]

beforeEach( () => {
    people = [
        {name: 'Andrew Ivanov', age: 33},
        {name: 'Alexander Petrov', age: 24},
        {name: 'Dmitry Sidorov', age: 18},
    ]
})

test('Must receive an array of greeting messages', () => {

    const messages = createGreetinMessage(people)

    expect(messages.length).toBe(3)
    expect(messages[0]).toBe('Hello Andrew. Welcome to IT')
    expect(messages[1]).toBe('Hello Alexander. Welcome to IT')
    expect(messages[2]).toBe('Hello Dmitry. Welcome to IT')
})