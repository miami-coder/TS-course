interface IAnimal {
    isAlive: boolean;
    sound:() => void
}

interface X {
    id: number;
}

class BirdClass implements IAnimal, X {
    isAlive: boolean;
    wings: boolean;
    id: number;


    constructor(isAlive: boolean, wings: boolean, id: number) {
        this.isAlive = isAlive;
        this.wings = wings;
        this.id = id;
    }

    sound(): void {

    }
}