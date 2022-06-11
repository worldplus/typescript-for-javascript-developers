export {};

class VisaCart {
    constructor(public readonly owner: string) {}
}

let myVisaCard = new VisaCart('はむさん');
console.log(myVisaCard.owner);
// myVisaCard.owner = 'ベーコン';
