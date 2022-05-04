export const config : IConfigLang = {
    ES: {
        audioFolder: '',

        textAnimal: 'Animal',
        textCow: 'Vaca',
        textElephant: 'Elefante',
        textCrocodile: 'Cocodrilo',
        textScrab: 'Cangrejo',
        textOctopus: 'Pulpo',

        textColours: 'Colores',
        textYellow: 'Amarillo',
        textGreen: 'Verde',
        textRed: 'Rojo',
        textBlack: 'Negro',
        textBlue: 'Azul',

        textNumbers: 'Números',
        textOne: 'Uno',
        textTwo: 'Dos',
        textThree: 'Tres',
        textFour: 'Cuatro',
        textFive: 'Cinco'
    },
    EN: {
        audioFolder: '',

        textAnimal: 'Animal',
        textCow: 'Cow',
        textElephant: 'Elephant',
        textCrocodile: 'Crocodile',
        textScrab: 'Scrab',
        textOctopus: 'Octopus',

        textColours: 'Colours',
        textYellow: 'Yellow',
        textGreen: 'Green',
        textRed: 'Red',
        textBlack: 'Black',
        textBlue: 'Blue',

        textNumbers: 'Numbers',
        textOne: 'One',
        textTwo: 'Two',
        textThree: 'Three',
        textFour: 'Four',
        textFive: 'Five'
    },
    PR: {
        audioFolder: '',

        textAnimal: 'Animal',
        textCow: 'Vaca',
        textElephant: 'Elefante',
        textCrocodile: 'Jacaré',
        textScrab: 'Caranguejo',
        textOctopus: 'Polvo',

        textColours: 'Cores',
        textYellow: 'Amarelo',
        textGreen: 'Verde',
        textRed: 'Vermelho',
        textBlack: 'Preto',
        textBlue: 'Azul',

        textNumbers: 'Números',
        textOne: 'Um',
        textTwo: 'Dois',
        textThree: 'Três',
        textFour: 'Quatro ',
        textFive: 'Cinco'
    }
}

declare interface IConfigLang {
    ES: IConfigLangParticular,
    EN: IConfigLangParticular,
    PR: IConfigLangParticular
};

declare interface IConfigLangParticular {
    audioFolder : string,

    textAnimal : string,
    textCow : string,
    textElephant : string,
    textCrocodile : string,
    textScrab : string,
    textOctopus : string,

    textColours : string,
    textYellow : string,
    textGreen : string,
    textRed : string,
    textBlack : string,
    textBlue : string,

    textNumbers : string,
    textOne : string,
    textTwo : string,
    textThree : string,
    textFour : string,
    textFive : string
}