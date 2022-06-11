export {};

interface Profile {
    //必須パラメータ
    name: string;
    underTwenty: boolean;
    //非必須パラメータ
    [index: string]: string | number | boolean;
}

let profile: Profile = {name: 'Ham', underTwenty: false};

// how to write index signatures
// { [ index: typeForIndex ]: typeForValue }

profile.name = 'Ham';
profile.age = 43;
profile.nationality = 'Japan';

