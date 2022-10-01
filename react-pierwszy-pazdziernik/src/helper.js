import uniqid from 'uniqid';


const createdId = () => {
    return uniqid()
}

const sum = (a, b) => {
    return a + b;
}

export {
    createdId,
    sum
}