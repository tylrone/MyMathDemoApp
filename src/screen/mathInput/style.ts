import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 15,
        paddingTop:15,

        //alignItems: 'center',
        // justifyContent: 'center'
    },
    inputContainer: {
        flex: 1,
    },
    textInputContainer:{
        height: '50%',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: 'rgba(0,0,0,0.5)',
        padding:5
    },
    exampleContainer: {
        flex: 1
    },
    btnGiai:{
        paddingVertical: 5,
        paddingHorizontal: 25,
        marginTop: 25,
        alignSelf:'center',
        alignItems:'center',
        borderRadius: 3,
        backgroundColor: '#377FEC',


    },
    titleBtn:{
        color: 'white',
        fontSize: 16
    },
    duongPC:{
        borderTopWidth: 1,
        borderTopColor: '#AEB1C5',
        marginBottom: 10
    },
    mauBT:{
        flex:1,
        marginTop: 5
    },
    mauDV:{
        textDecorationStyle: 'solid',
        textDecorationLine:'underline',
        fontSize: 16
        
    },
    titleMauDV:{
        fontSize: 16
    },
    itemMauDV:{
        paddingVertical: 5
    }
});
export default styles;