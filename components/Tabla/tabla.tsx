import { Audio } from 'expo-av';
import { useState } from 'react';
import { Image, Pressable, View } from 'react-native';

import { styles } from './styles';

export declare type Lang = "ES" | "EN" | "PR";
declare type Folder = "Animals" | "Colours" | "Audio" | "Numbers"

export declare interface ITablaProps {
    language : Lang
}

export const Tabla = ( {language} : ITablaProps ) => {
    const [showAnimals, setShowAnimals] = useState<boolean>(true);
    const [showColours, setShowColours] = useState<boolean>(false);
    const [showNumbers, setShowNumbers] = useState<boolean>(false);
    const audios : any = {
        "ES": {
            "azul": require('../../assets/Audio/ES/azul.m4a'),
            "cangrejo": require('../../assets/Audio/ES/cangrejo.m4a'),
            "cinco": require('../../assets/Audio/ES/cinco.m4a'),
            "cocodrilo": require('../../assets/Audio/ES/cocodrilo.m4a'),
            "cuatro": require('../../assets/Audio/ES/cuatro.m4a'),
            "dos": require('../../assets/Audio/ES/dos.m4a'),
            "elefante": require('../../assets/Audio/ES/elefante.m4a'),
            "naranja": require('../../assets/Audio/ES/naranja.m4a'),
            "negro": require('../../assets/Audio/ES/negro.m4a'),
            "pulpo": require('../../assets/Audio/ES/pulpo.m4a'),
            "rojo": require('../../assets/Audio/ES/rojo.m4a'),
            "tres": require('../../assets/Audio/ES/tres.m4a'),
            "uno": require('../../assets/Audio/ES/uno.m4a'),
            "vaca": require('../../assets/Audio/ES/vaca.m4a'),
            "verde": require('../../assets/Audio/ES/verde.m4a')
        },
        "EN": {
            "azul": require('../../assets/Audio/EN/azul.m4a'),
            "cangrejo": require('../../assets/Audio/EN/cangrejo.m4a'),
            "cinco": require('../../assets/Audio/EN/cinco.m4a'),
            "cocodrilo": require('../../assets/Audio/EN/cocodrilo.m4a'),
            "cuatro": require('../../assets/Audio/EN/cuatro.m4a'),
            "dos": require('../../assets/Audio/EN/dos.m4a'),
            "elefante": require('../../assets/Audio/EN/elefante.m4a'),
            "naranja": require('../../assets/Audio/EN/naranja.m4a'),
            "negro": require('../../assets/Audio/EN/negro.m4a'),
            "pulpo": require('../../assets/Audio/EN/pulpo.m4a'),
            "rojo": require('../../assets/Audio/EN/rojo.m4a'),
            "tres": require('../../assets/Audio/EN/tres.m4a'),
            "uno": require('../../assets/Audio/EN/uno.m4a'),
            "vaca": require('../../assets/Audio/EN/vaca.m4a'),
            "verde": require('../../assets/Audio/EN/verde.m4a')
        },
        "PR": {
            "azul": require('../../assets/Audio/PR/azul.m4a'),
            "cangrejo": require('../../assets/Audio/PR/cangrejo.m4a'),
            "cinco": require('../../assets/Audio/PR/cinco.m4a'),
            "cocodrilo": require('../../assets/Audio/PR/cocodrilo.m4a'),
            "cuatro": require('../../assets/Audio/PR/cuatro.m4a'),
            "dos": require('../../assets/Audio/PR/dos.m4a'),
            "elefante": require('../../assets/Audio/PR/elefante.m4a'),
            "naranja": require('../../assets/Audio/PR/naranja.m4a'),
            "negro": require('../../assets/Audio/PR/negro.m4a'),
            "pulpo": require('../../assets/Audio/PR/pulpo.m4a'),
            "rojo": require('../../assets/Audio/PR/rojo.m4a'),
            "tres": require('../../assets/Audio/PR/tres.m4a'),
            "uno": require('../../assets/Audio/PR/uno.m4a'),
            "vaca": require('../../assets/Audio/PR/vaca.m4a'),
            "verde": require('../../assets/Audio/PR/verde.m4a')
        },
    }

    const mostrarAnimales = () : void => {
        setShowAnimals(true);
        setShowColours(false);
        setShowNumbers(false);
    }

    const mostrarColores = () : void => {
        setShowColours(true);
        setShowAnimals(false);
        setShowNumbers(false);
    }

    const mostrarNumeros = () : void => {
        setShowNumbers(true);
        setShowAnimals(false);
        setShowColours(false);
    }

    const playAudio = async ( audio : string ) => {
        const { sound } = await Audio.Sound.createAsync( audios[language][audio] );
        sound.playAsync();
    }

    return (
        <View style={ {justifyContent: 'space-evenly', alignContent: 'center'} }>
            <View style={styles.rowButtons}>
                <Pressable onPress={ () => mostrarAnimales() }>
                    <Image source={ require('../../assets/Animals/animals_icon.png') } style={styles.icon}/>
                </Pressable>
                <Pressable onPress={ () => mostrarColores() }>
                    <Image source={ require('../../assets/Colours/paint_icon.png') } style={styles.icon}/>
                </Pressable>
                <Pressable onPress={ () => mostrarNumeros() }>
                    <Image source={ require('../../assets/Numbers/numbers_icon.png') } style={styles.icon}/>
                </Pressable>
            </View>
            {
                showAnimals ?
                (<View style={styles.columnButtons}>
                    <Pressable onPress={ () => playAudio( "vaca" ) }>
                        <Image source={ require('../../assets/Animals/cow_icon.png') } style={styles.icon}/>
                    </Pressable>
                    <Pressable onPress={ () => playAudio( "cangrejo" ) }>
                        <Image source={ require('../../assets/Animals/crab_icon.png') } style={styles.icon}/>
                    </Pressable>
                    <Pressable onPress={ () => playAudio( "cocodrilo" ) }>
                        <Image source={ require('../../assets/Animals/crocodile_icon.png') } style={styles.icon}/>
                    </Pressable>
                    <Pressable onPress={ () => playAudio( "elefante" ) }>
                        <Image source={ require('../../assets/Animals/elephant_icon.png') } style={styles.icon}/>
                    </Pressable>
                    <Pressable onPress={ () => playAudio( "pulpo" ) }>
                        <Image source={ require('../../assets/Animals/octopus_icon.png') } style={styles.icon}/>
                    </Pressable>
                </View>) : undefined
            }
            {
                showColours ?
                (<View style={styles.columnButtons}>
                    <Pressable onPress={ () => playAudio( "negro" ) }>
                        <Image source={ require('../../assets/Colours/black_icon.png') } style={styles.icon}/>
                    </Pressable>
                    <Pressable onPress={ () => playAudio( "azul" ) }>
                        <Image source={ require('../../assets/Colours/blue_icon.png') } style={styles.icon}/>
                    </Pressable>
                    <Pressable onPress={ () => playAudio( "verde" ) }>
                        <Image source={ require('../../assets/Colours/green_icon.png') } style={styles.icon}/>
                    </Pressable>
                    <Pressable onPress={ () => playAudio( "naranja" ) }>
                        <Image source={ require('../../assets/Colours/orange_icon.png') } style={styles.icon}/>
                    </Pressable>
                    <Pressable onPress={ () => playAudio( "rojo" ) }>
                        <Image source={ require('../../assets/Colours/red_icon.png') } style={styles.icon}/>
                    </Pressable>
                </View>) : undefined
            }
            {
                showNumbers ?
                (<View style={styles.columnButtons}>
                    <Pressable onPress={ () => playAudio( "uno" ) }>
                        <Image source={ require('../../assets/Numbers/one_icon.png') } style={styles.icon}/>
                    </Pressable>
                    <Pressable onPress={ () => playAudio( "dos" ) }>
                        <Image source={ require('../../assets/Numbers/two_icon.png') } style={styles.icon}/>
                    </Pressable>
                    <Pressable onPress={ () => playAudio( "tres" ) }>
                        <Image source={ require('../../assets/Numbers/three_icon.png') } style={styles.icon}/>
                    </Pressable>
                    <Pressable onPress={ () => playAudio( "cuatro" ) }>
                        <Image source={ require('../../assets/Numbers/four_icon.png') } style={styles.icon}/>
                    </Pressable>
                    <Pressable onPress={ () => playAudio( "cinco" ) }>
                        <Image source={ require('../../assets/Numbers/five_icon.png') } style={styles.icon}/>
                    </Pressable>
                </View>) : undefined
            }
        </View>
    )

}