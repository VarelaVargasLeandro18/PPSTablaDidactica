import { createIconSet } from "@expo/vector-icons";
import { useState } from "react";
import { FAB, Portal } from "react-native-paper";
import { GlobalContainer } from "../../components/centeredVHContainer";
import { Lang, Tabla } from "../../components/Tabla/tabla";


const glyphMap = { english: '🇺🇸', spanish: '🇪🇸', portuguese: '🇧🇷' };
const CustomIcon = createIconSet( glyphMap, 'Milonga_400Regular', '' );

export const Home = () => {
    const [lang, setLang] = useState<Lang>('ES');
    const [open, setOpen] = useState<boolean>(false);

    const handleOpen = ( { open } : { open: boolean } ) => setOpen(open);

    return (
        <>
            <Portal>
                <FAB.Group
                        visible={true}
                        open={open}
                        icon={open ? 'close' : 'flag'}
                        onStateChange={ (state) => handleOpen(state)}
                        actions={[
                            { icon: (props) => <CustomIcon {...props} name="spanish"/>, label: "Español", onPress: () => { setLang('ES') } },
                            { icon: (props) => <CustomIcon {...props} name="english"/>, label: "Inglés", onPress: () => { setLang('EN') } },
                            { icon: (props) => <CustomIcon {...props} name="portuguese"/>, label: "Portugés", onPress: () => { setLang('PR') } }
                        ]}
                    />
            </Portal>
            <GlobalContainer>
                <Tabla language={lang}/>
            </GlobalContainer>
        </>
    );

}