const ages = [18, 20, 22, 1, 100, 90, 14];

const predicate = (age: number) => {
    return age > 90;
}

const oldAges = [100] // > 90

type CourseType = {
    title: string
    price: number
}

const courses = [
    {title: 'CSS', price: 110},
    {title: 'JS', price: 200} ,
    {title: 'REACT', price: 150},
]

const cheapPredicate = (course: CourseType) => {
    return course.price < 160;
}

console.log(ages)
console.log(predicate)
console.log(oldAges)
console.log(courses)
console.log(cheapPredicate)