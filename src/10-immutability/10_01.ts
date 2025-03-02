
export type UserType = {
    name: string
    hair: number
    address: {city: string, house?: number}
}

export type LaptopType = {
    title: string
}

export type UserWithLaptopType = UserType & {
    laptop: LaptopType
}

export type UserWithBooksType = UserType & {
    books: Array<string>
}

type CompanyType = { id: number, title: string }

export type WithCompaniesType = UserType & {
    companies: Array<CompanyType>
}

export function makeHairstyle (u: UserType, power: number) {
    const copy = {
        ...u,
        hair: u.hair / power,
    }
    return copy;
}

export function moveUser (u: UserWithLaptopType, city: string) {
    return {
        ...u,
        address: {
            ...u.address,
            city: city,
        },
    }
}

export function moveUserToOtherHouse (u: UserWithLaptopType & UserWithBooksType, house: number) {
    return {
        ...u,
        address: {
            ...u.address,
            house: house,
        },
    }
}

export function upgradeUserLaptop (u: UserWithLaptopType, laptop: string) {
    return {
        ...u,
        laptop: {
            ...u.laptop,
            title: laptop,
        }
    }
}

export function addNewBooksToUser (u: UserWithLaptopType & UserWithBooksType, books: string[]) {
    return {
        ...u,
        books: [...u.books, ...books],
    }
}

export function updateBook(u: UserWithLaptopType & UserWithBooksType, oldBook: string, newBook: string) {
    return  {
        ...u,
        books: u.books.map(b => b === oldBook ? newBook : b),
    }
}

export function removeBook(u: UserWithLaptopType & UserWithBooksType, book: string) {
    return  {
        ...u,
        books: u.books.filter(b => b !== book),
    }
}

export function updateCompanyTitle(u: UserWithLaptopType & WithCompaniesType, id: number, newTitle: string) {
    return  {
        ...u,
        companies: u.companies.map(c => c.id === id
            ? {...c, title: newTitle}
            : c),
    }

    // return {
    //     ...u,
    //     companies: u.companies.map(c => {
    //         if (c.id === id) {
    //             return {...c, title: newTitle};
    //         } else {
    //             return c;
    //         }
    //     })
    // }
}

export function updateCompanyTitle2(companies: {[key: string]: Array<CompanyType>},
                                    userName: string,
                                    id: number,
                                    newTitle: string,) {
    const companyCopy = {...companies}
    companyCopy[userName] = companyCopy[userName].map(c => c.id === id
        ? {...c, title: newTitle}
        : c)

    return companyCopy;
}