import { StyleSheet } from "react-native";
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";
import { globalStyles } from "../../globalStyles/globalStyles";

export const styles = StyleSheet.create({
    formContainer: {
        height: heightPercentageToDP('60%'),
        width: widthPercentageToDP('80%'),
    },
    image: {
        width: 500,
        height: 500,
        position: 'absolute',
        marginHorizontal: ((widthPercentageToDP('100%') - 500) / 2),
        top: (heightPercentageToDP('50%') - 500),
        zIndex: 0
    },
    inputTransparent: {
        backgroundColor: '#00D1FF',
        width: 250,
        marginTop: 5,
        zIndex: 1
    },
    buttonLogIn: globalStyles.button,
    buttonText: globalStyles.buttonText
})