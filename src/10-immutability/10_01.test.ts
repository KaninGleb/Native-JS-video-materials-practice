import {
    addNewBooksToUser,
    makeHairstyle,
    moveUser,
    moveUserToOtherHouse, updateBook, updateCompanyTitle, updateCompanyTitle2,
    upgradeUserLaptop,
    UserType,
    UserWithBooksType,
    UserWithLaptopType, WithCompaniesType
} from './10_01.ts';
import {expect, test} from 'vitest';

test('reference type test', () => {
    const user: UserType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
        }
    }

    const awesomeUser = makeHairstyle(user, 2);

    user.address.city = 'Kiev';

    expect(user.hair).toBe(32);
    expect(awesomeUser.hair).toBe(16);
    expect(awesomeUser.address).toBe(user.address);
})

test('change address', () => {
    const user: UserWithLaptopType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12,
        },
        laptop: {
            title: 'ZenBook',
        }
    }

    const movedUser = moveUser(user, 'Kiev');

    expect(user).not.toBe(movedUser);
    expect(user.address).not.toBe(movedUser.address);
    expect(user.laptop).toBe(movedUser.laptop);
    expect(movedUser.address.city).toBe('Kiev');
})

test('upgrade laptop to macbook', () => {
    const user: UserWithLaptopType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12,
        },
        laptop: {
            title: 'ZenBook',
        }
    }

    const updatedUser = upgradeUserLaptop(user, 'MackBook');

    expect(user).not.toBe(updatedUser);
    expect(user.address).toBe(updatedUser.address);
    expect(user.laptop).not.toBe(updatedUser.laptop);
    expect(user.laptop.title).toBe('ZenBook');
    expect(updatedUser.laptop.title).toBe('MackBook');
})

test('upgrade laptop to macbook', () => {
    const user: UserWithLaptopType & UserWithBooksType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12,
        },
        laptop: {
            title: 'ZenBook',
        },
        books: ['css', 'html', 'js', 'react'],
    }

    const updatedUser = moveUserToOtherHouse(user, 99);

    expect(user).not.toBe(updatedUser);
    expect(user.books).toBe(updatedUser.books);
    expect(user.laptop).toBe(updatedUser.laptop);
    expect(user.address).not.toBe(updatedUser.address);
    expect(user.address.house).not.toBe(updatedUser.address.house);
})

test('add new books to user', () => {
    const user: UserWithLaptopType & UserWithBooksType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12,
        },
        laptop: {
            title: 'ZenBook',
        },
        books: ['css', 'html', 'js', 'react'],
    }

    const updatedUser = addNewBooksToUser(user, ['ts', 'rest api']);

    expect(user).not.toBe(updatedUser);
    expect(user.laptop).toBe(updatedUser.laptop);
    expect(user.address).toBe(updatedUser.address);
    expect(user.books).not.toBe(updatedUser.books);
    expect(user.books.length).toBe(4);
    expect(updatedUser.books[4]).toBe('ts');
    expect(updatedUser.books[5]).toBe('rest api');
    expect(updatedUser.books).toEqual(['css', 'html', 'js', 'react', 'ts', 'rest api']);
})

test('update js to ts', () => {
    const user: UserWithLaptopType & UserWithBooksType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12,
        },
        laptop: {
            title: 'ZenBook',
        },
        books: ['css', 'html', 'js', 'react'],
    }

    const updatedUser = updateBook(user, 'js', 'ts');

    expect(user).not.toBe(updatedUser);
    expect(user.laptop).toBe(updatedUser.laptop);
    expect(user.address).toBe(updatedUser.address);
    expect(user.books).not.toBe(updatedUser.books);
    expect(user.books.length).toBe(4);
    expect(updatedUser.books[2]).toBe('ts');
})

test('remove js book', () => {
    const user: UserWithLaptopType & WithCompaniesType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12,
        },
        laptop: {
            title: 'ZenBook',
        },
        companies: [
            {id: 1, title: 'Epam'},
            {id: 2, title: 'IT-Incubator'},
        ]
    }

    const updatedUser = updateCompanyTitle(user, 1, 'EPAM');

    expect(user).not.toBe(updatedUser);
    expect(user.address).toBe(updatedUser.address);
    expect(user.companies).not.toBe(updatedUser.companies);
    expect(user.companies[0].title).toBe('Epam');
    expect(updatedUser.companies[0].title).toBe('EPAM');
    expect(updatedUser.companies[0]).toEqual( {id: 1, title: 'EPAM'} );
})

test('update company', () => {
    // const user: UserWithLaptopType = {
    //     name: 'Dimych',
    //     hair: 32,
    //     address: {
    //         city: 'Minsk',
    //         house: 12,
    //     },
    //     laptop: {
    //         title: 'ZenBook',
    //     },
    // }

    const companies = {
        'Dimych': [{id: 1, title: 'Epam'}, {id: 2, title: 'IT-Incubator'}],
        'Artem': [{id: 2, title: 'IT-Incubator'}],
    }

    const copy = updateCompanyTitle2 (companies, 'Dimych', 1, 'EPAM');

    expect(copy['Dimych']).not.toBe(companies['Dimych']);
    expect(copy['Artem']).toBe(companies['Artem']);
    expect(copy['Dimych'][0].title).toBe('EPAM');
})