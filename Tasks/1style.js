import { StyleSheet } from "react-native";
 
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerimage: {
        padding: 1
    },
    image: {
        width: 200,
        height: 200,
        marginBottom: 20,

    },
    list: {
        flex:1,
        flexDirection: 'row',

    },
    contentList: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    Button:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    OutterModal:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    InnerModal:{
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        width:300,
        height: 200,
    },
    ModalText:{
        marginBottom: 15,
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 15,
        fontWeight: 'bold',
        color: 'black',
    },
    ModalInput:{
        marginBottom: 15,
        justifyContent: 'center',
        alignItems: 'center',
        width:100,
        height: 55,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        borderBlockColor: 'blackShade',
    }
});