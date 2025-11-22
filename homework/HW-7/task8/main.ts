class Cinderella {
    name: string;
    age: number;
    footSize: number;


    constructor(name: string, age: number, footSize: number) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}

class Prince {
    name: string;
    age: number;
    slipper: number;
    wife?: Cinderella;


    constructor(name: string, age: number, slipper: number) {
        this.name = name;
        this.age = age;
        this.slipper = slipper;
    }
}

const cinderellas: Cinderella[] = [
    new Cinderella('Sinderell1', 20, 27),
    new Cinderella('Sinderell2', 21, 28),
    new Cinderella('Sinderell3', 22, 29),
    new Cinderella('Sinderell4', 23, 30),
    new Cinderella('Sinderell5', 24, 31),
    new Cinderella('Sinderell6', 25, 32),
    new Cinderella('Sinderell7', 26, 33),
    new Cinderella('Sinderell8', 27, 34),
    new Cinderella('Sinderell9', 28, 35),
    new Cinderella('Sinderell10', 29, 36)
]

const prince: Prince = new Prince('Petro', 27, 33);

// for (const cinderella of cinderellas) {
//     if (cinderella.footSize === prince.slipper) {
//         prince.wife = cinderella;
//     }
// }
const cinderellaMain = cinderellas.find(cinderella => cinderella.footSize === prince.slipper);
prince.wife = cinderellaMain!;