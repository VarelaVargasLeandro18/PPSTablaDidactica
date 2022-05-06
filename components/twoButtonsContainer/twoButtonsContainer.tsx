import { Image, Pressable, Text, TouchableHighlight, View } from 'react-native';
import { Button, Portal } from 'react-native-paper';

export declare interface ITwoButtonsContainerProps {
    containerStyle : any,
    firstButtonStyle: any,
    firstButtonOnPress?() : void,
    firstButtonTextStyle: any,
    firstButtonText: string,
    secondButtonStyle: any,
    secondButtonTextStyle: any,
    secondButtonOnPress?() : void,
    secondButtonText: string,
}

export const TwoButtonsContainer = ( 
    { 
        containerStyle, 
        firstButtonStyle,
        firstButtonOnPress, 
        firstButtonTextStyle, 
        firstButtonText, 
        secondButtonOnPress, 
        secondButtonTextStyle, 
        secondButtonText 
    } : ITwoButtonsContainerProps ) => (
    <View style={containerStyle}>
        <TouchableHighlight style={firstButtonStyle} onPress={firstButtonOnPress}>
            <Image style={ {width: 100, height: 100} } source={ require('../../assets/button_icon.png') } />
        </TouchableHighlight>
    </View>
);