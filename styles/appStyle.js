import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    movieliststyle: {
        justifyContent: 'center',
        alignContent: 'center',
        padding: 5,
        backgroundColor: '#404040'
    },
    movieNameText :{
        fontSize: 10,
        fontStyle: 'italic',
        fontWeight : 'bold',
        color: 'white',
        paddingTop: 2,
        width: 130,
        textAlign : 'center',
    },
    movieTitle :{
        alignContent: 'center',
        fontSize: 18,
        padding: 5,
        fontWeight: 'bold',
        color: 'white',
    },
    tochView: {
      paddingLeft: 10,
      position : 'relative',  
    },
    imageView : {
    padding: 5,
    width: 130,
    height: 210,
    borderRadius: 15,

    },
    listView: {
        paddingTop: 5,
        paddingBottom : 5,
        
    },
    center_align: {
        justifyContent: 'center',
        alignContent: 'center',
        alignItems : 'center'
    }

}); 