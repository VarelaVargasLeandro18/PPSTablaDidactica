import { StyleSheet } from "react-native";
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";
import { globalStyles } from "../../globalStyles/globalStyles";

export const styles = StyleSheet.create({
    button: globalStyles.button,
    buttonText: globalStyles.buttonText,
    columnButtons: {
        height: heightPercentageToDP('25%'),
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    rowButton: {
        ...globalStyles.button,
        maxWidth: 75
    },
    rowButtons: {
        width: widthPercentageToDP('80%'),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignSelf: 'baseline',
        margin: 5
    },
    icon: {
        width: 100,
        height: 100
    }
})