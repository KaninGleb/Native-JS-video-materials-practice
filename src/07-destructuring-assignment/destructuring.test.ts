import {beforeEach, expect, test} from 'vitest';
import {ManType} from './Destructuring.tsx';

let props: ManType;

beforeEach( () => {
    props = {
        name: 'Dimych',
        age: 32,
        lessons: [{title: '1'}, {title: '2'}],
        address: {
            street: {
                title: 'street',
            }
        }
    }
})

test('', () => {
    const {name, age, lessons} = props;
    const {title} = props.address.street;

    expect(typeof name).toBe('string');
    expect(age).toBe(32);
    expect(lessons.length).toBe(2);
    expect(title).toBe('street');
})

test('', () => {
    const l1 = props.lessons[0];
    const l2 = props.lessons[1];

    const [ls1, ls2] = props.lessons;

    expect(l1.title).toBe('1');
    expect(l2.title).toBe('2');

    expect(ls1.title).toBe('1');
    expect(ls2.title).toBe('2');
})