import react, {useEffect, useState} from 'react';
import {StyleSheet, SafeAreaView, FlatList, ScrollView} from "react-native";
import Article from "../components/Article";
import axios from "axios";
///*<a href="https://www.flaticon.com/free-icons/sports" title="sports icons">Sports icons created by small.smiles - Flaticon</a>*/
const HomeScreen = () => {

    const [articles, setArticles] = useState([]);

    const getNews = () => {
        axios.get('https://newsapi.org/v2/top-headlines?country=gb&apiKey=d010b18835f04879afc821addfdfcbed',{
                params:{
                    category: "sports"
                }
            }
        )
            .then( (response) => {
                // handle success
                console.log(response.data.articles);
                setArticles(response.data.articles);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
    }

    useEffect(() => {
        getNews();
    }, []);

    return(
        <ScrollView style={styles.container}>
            <FlatList
                data={articles}
                renderItem={({item}) =>
                    <Article
                        urlToImage = {item.urlToImage}
                        title ={item.title}
                        description ={item.description}
                        author ={item.author}
                        publishedAt ={item.publishedAt}
                        sourceName ={item.source.name}
                        url = {item.url}
                    />}
                keyExtractor = {(item) => item.title}
            />
        </ScrollView>
    )
}

export default HomeScreen;

const styles = StyleSheet.create({
    container:{

    }
})