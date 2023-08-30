import React from 'react'
import {Image, SafeAreaView, StyleSheet, Text, View} from "react-native";


const Article = () => {
    return(
        <SafeAreaView style={styles.container}>
            {/*image*/}
            <Image source={{
                uri: "https://app.gemoo.com/share/image-annotation/555593990881419264?codeId=vz2ewLxnWpKpa&origin=imageurlgenerator"
            }}
            style={styles.image}/>
          <View style={{padding:20}}>
            {/*Title*/}
            <Text style={styles.title}>Tech News Application using React Native</Text>

            {/*Description*/}
            <Text style={styles.description}>You are wabulubududbdub on Native react You are wabulubududbdub on Native react You are wabulubududbdub on Native react You are wabulubududbdub on Native react</Text>

            <View style={styles.data}>
                <Text style={styles.heading}>by: <Text style={styles.author}>Lewis Mutonyi</Text></Text>
                <Text style={styles.date}>29th Aug 23</Text>
            </View>

            {/* Source */}
            <View style={{marginTop:10}}>
                <Text>source: <Text style={styles.source}>Programming knowledge</Text></Text>
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
    }
})