export {};

namespace Japanese {
    export namespace Tokyo {
        export class Person {
            constructor(public name: string) {}
        }        
    }
    export namespace Osaka {
        export class Person {
            constructor(public name: string) {}
        }        
    }
}

namespace English {
    export class Person {
        constructor(
            public firstName: string,
            public middleName: string,
            public lastName: string
        ) {}
    }    
}

const me = new Japanese.Tokyo.Person('はむさん');
console.log(me.name);

const meOsaka = new Japanese.Tokyo.Person('はむやん');
console.log(meOsaka.name);

const michael = new English.Person('Micheal', 'Joseph', 'Jackson');
console.log(michael);

