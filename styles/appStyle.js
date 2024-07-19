import { StyleSheet,Dimensions } from "react-native";

const screenHeight = Dimensions.get('screen').height;
const screenWidth = Dimensions.get('screen').width;

export const styles = StyleSheet.create({

    movieliststyle: {
        padding: 5,
        backgroundColor: '#404040',
        flex : 1,
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
        flex: 1,
        position: 'relative',  
    },
    imageView: {
        padding: 5,
        width: 130,
        height: 210,
        borderRadius: 15,
        flex: 1,

    },
    listView: {
        paddingTop: 5,
        paddingBottom: 5,
        
    },
    center_align: {
        justifyContent: 'center',
        alignContent: 'center',
        alignItems : 'center'
    },
    banner_img: {
        padding: 5,
        height: screenHeight / 2,
        width: screenWidth,
    },
    movie_detail: {
        backgroundColor: '#404040',
        flex : 1,
    },

}); 