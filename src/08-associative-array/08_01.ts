
type UsersType = {
    [key: string]: {id: number, name: string}
}

const users: UsersType = {
    '101': {id: 101, name: 'Dimych'},
    '3232312': {id: 3232312, name: 'Natasha'},
    '1212': {id: 1212, name: 'Valera'},
    '1': {id: 1, name: 'Katya'},
}

// О(1)
// users[1]
const user = {id: 100500, name: 'Igor'};
users[user.id] = user;
delete users[user.id];
users[user.id].name = 'Vitya'



const usersArray = [
    {id: 101, name: 'Dimych'},
    {id: 3232312, name: 'Natasha'},
    {id: 1212, name: 'Valera'},
    {id: 1, name: 'Katya'},
]

// О(n)
// usersArray.find(u => u.id === 1);
// const usersCopy = [...usersArray.filter(u => u.id !== user.id), user];
// var users = usersArray.filter(u => u.id !== user.id);