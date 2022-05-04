import { StyleSheet } from "react-native";
import { widthPercentageToDP } from "react-native-responsive-screen";

export const globalStyles = StyleSheet.create({
    button: {
        width: widthPercentageToDP('60%'),
        alignSelf: 'center',
        backgroundColor: '#D3B7547F',
    },
    buttonText: {
        fontFamily: 'Milonga_400Regular',
        color: '#000000FF',
    }
});