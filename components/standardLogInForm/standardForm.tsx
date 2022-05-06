import { View, Image, StyleSheet } from 'react-native';
import { widthPercentageToDP } from 'react-native-responsive-screen';

import { ILabelledTextInputProps, LabelledTextInput } from '../labelledTextInput/labelledTextInput';
import { ITwoButtonsContainerProps, TwoButtonsContainer } from '../twoButtonsContainer/twoButtonsContainer';

export declare interface IStandardFormProps {
    containerStyles : any,
    firstLabelledTextInputProps : ILabelledTextInputProps,
    secondLabelledTextInputProps : ILabelledTextInputProps,
    imageStyle : any,
    twoButtonsContainerProps : ITwoButtonsContainerProps,
}

export const StandardForm = ( props : IStandardFormProps ) => (
    <View style={props.containerStyles}>
            <View style={styles.inputsContainer}>
                <LabelledTextInput {...props.firstLabelledTextInputProps} />
                <LabelledTextInput {...props.secondLabelledTextInputProps} />
            </View>

            <Image style={ props.imageStyle } source={ require('../../assets/icon.png') } />

            <TwoButtonsContainer {...props.twoButtonsContainerProps} />
    </View>
);

const styles = StyleSheet.create({
    inputsContainer: {
        top: 260,
        left: 50
    }
});