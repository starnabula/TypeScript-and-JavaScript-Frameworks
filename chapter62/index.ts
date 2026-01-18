
type Example<T> = {
    name: string;
    age: number;
    value: T
}

const ex: Example<boolean> = { name: 'john', age: 25, value: true };