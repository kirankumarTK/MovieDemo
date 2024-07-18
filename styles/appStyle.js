import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    movieliststyle: {
        justifyContent: 'center',
        alignContent: 'center',
        padding: 5,
        backgroundColor: '#404040'
    },
    movieNameText :{
        fontSize: 15,
        fontStyle: 'italic',
        fontWeight : 'bold',
        color: 'white',
        paddingBottom: 5,
        paddingTop: 5,
        width: 150,
        textAlign : 'center',
    },
    movieTitle :{
        alignContent: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    },
    tochView: {
      padding: 5,
      position : 'relative',  
    },
    imageView : {
    padding: 2,
    width: 150,
    height: 250,
    borderRadius: 10,

    },
    listView: {
        paddingTop: 20,
        paddingBottom : 20,
        
    },
    center_align: {
        justifyContent: 'center',
        alignContent: 'center',
        alignItems : 'center'
    }

}); 