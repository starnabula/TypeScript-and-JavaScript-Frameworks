
type BaseVehicle = {
    maki: string;
    model: string;
}

type MotoBike = BaseVehicle & {
    type: 'motobike',
    fuel: 'petrol'
}

type Car = BaseVehicle & {
    type: 'car',
    fuel: 'petrol' | 'diesel';
    doors: number;
}

const myBik: MotoBike = {
    type: 'motobike',
    fuel: 'petrol',
    maki: 'jj',
    model: 'a'
}