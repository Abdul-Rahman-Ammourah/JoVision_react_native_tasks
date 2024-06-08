import { StyleSheet } from "react-native";
 
export default styles = StyleSheet.create({
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
        justifyContent: 'center',
        alignItems: 'center',
        width:100,
        height: 55,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        borderBlockColor: 'blackShade',
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
        alignItems: 'center',
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
        width:55,
        height: 55,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        borderBlockColor: 'blackShade',
        textAlign: 'center',
    },
    ModalbuttonRemove:{
        position: 'absolute',
        bottom: 190,
        left: 165,
        
    },
    ModalbuttonAdd:{
        position: 'absolute',
        bottom: 220,
        right: 165,
        
        

    }
});