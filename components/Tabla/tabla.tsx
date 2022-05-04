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
    const [folder, setFolder] = useState<Folder>("Animals");
    

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
                    <Pressable>
                        <Image source={ require('../../assets/Animals/cow_icon.png') } style={styles.icon}/>
                    </Pressable>
                    <Pressable>
                        <Image source={ require('../../assets/Animals/crab_icon.png') } style={styles.icon}/>
                    </Pressable>
                    <Pressable>
                        <Image source={ require('../../assets/Animals/crocodile_icon.png') } style={styles.icon}/>
                    </Pressable>
                    <Pressable>
                        <Image source={ require('../../assets/Animals/elephant_icon.png') } style={styles.icon}/>
                    </Pressable>
                    <Pressable>
                        <Image source={ require('../../assets/Animals/octopus_icon.png') } style={styles.icon}/>
                    </Pressable>
                </View>) : undefined
            }
            {
                showColours ?
                (<View style={styles.columnButtons}>
                    <Pressable >
                        <Image source={ require('../../assets/Colours/black_icon.png') } style={styles.icon}/>
                    </Pressable>
                    <Pressable >
                        <Image source={ require('../../assets/Colours/blue_icon.png') } style={styles.icon}/>
                    </Pressable>
                    <Pressable >
                        <Image source={ require('../../assets/Colours/green_icon.png') } style={styles.icon}/>
                    </Pressable>
                    <Pressable >
                        <Image source={ require('../../assets/Colours/orange_icon.png') } style={styles.icon}/>
                    </Pressable>
                    <Pressable>
                        <Image source={ require('../../assets/Colours/red_icon.png') } style={styles.icon}/>
                    </Pressable>
                </View>) : undefined
            }
            {
                showNumbers ?
                (<View style={styles.columnButtons}>
                    <Pressable >
                        <Image source={ require('../../assets/Numbers/one_icon.png') } style={styles.icon}/>
                    </Pressable>
                    <Pressable >
                        <Image source={ require('../../assets/Numbers/two_icon.png') } style={styles.icon}/>
                    </Pressable>
                    <Pressable >
                        <Image source={ require('../../assets/Numbers/three_icon.png') } style={styles.icon}/>
                    </Pressable>
                    <Pressable >
                        <Image source={ require('../../assets/Numbers/four_icon.png') } style={styles.icon}/>
                    </Pressable>
                    <Pressable >
                        <Image source={ require('../../assets/Numbers/five_icon.png') } style={styles.icon}/>
                    </Pressable>
                </View>) : undefined
            }
        </View>
    )

}