import Datause from "./Datause.json";

export function getAll(){
    return Promise.resolve(Datause);
}

export function getById(id){
    const product = Datause.find(item => item.id === id);

    return Promise.resolve(product);
}

export default {
    getAll,
    getById
}