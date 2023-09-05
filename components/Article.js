import React from 'react'
import {Image, SafeAreaView, StyleSheet, Text, View} from "react-native";
import moment from "moment";


const Article = (props) => {
    return(
        <SafeAreaView style={styles.container}>
            {/*image*/}
            <Image source={{
                uri: props.urlToImage
            }}
                   style={styles.image}/>
            <View style={{padding:20}}>
                {/*Title*/}
                <Text style={styles.title}>{props.title}</Text>

                {/*Description*/}
                <Text style={styles.description} numberOfLines={3}>
                    {props.description}
                </Text>

                <View style={styles.data}>
                    <Text style={styles.heading}>by: <Text style={styles.author}>{props.author}</Text></Text>
                    <Text style={styles.date}>{moment(props.publishedAt).format("MMM Do YY")}</Text>
                </View>

                {/* Source */}
                <View style={{marginTop:10}}>
                    <Text>source: <Text style={styles.source}>{props.sourceName}</Text></Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Article;

const styles = StyleSheet.create({
    container:{
        width: "90%",
        alignSelf: "center",
        borderRadius: 40,
        shadowOpacity: 0.5,
        shadowColor: "#000",
        shadowOffset: {
            height: 5,
            width: 5
        },
        backgroundColor: "#F5F5F5",
        marginTop: 20
    },
    image:{
        height: 200,
        width: "100%",
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40
    },
    titles:{
        fontSize: 18,
        fontWeight: "600",
        marginTop: 10
    },
    description:{
        fontSize: 16, fontWeight: "400", marginTop:10
    },
    data:{
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 10
    },
    heading:{
    },
    author:{
        fontWeight: "bold"
    },
    date:{
        fontWeight: "bold",
        color: "#BB342F",
        fontSize: 15
    },
    source:{
        color: "#BB342F",
        fontWeight: "bold",
        fontSize: 18
    },
    // @media screen and (max-width: 1024px){
    // container:{
    //
    // }
})