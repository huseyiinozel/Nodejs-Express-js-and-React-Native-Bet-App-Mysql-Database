import React,{useEffect} from "react";
import {SafeAreaView,Text,View,FlatList,ActivityIndicator} from "react-native"
import styles from "./Football.style"
import Card from "../../componenets/Card/Card";
import useFetch from "../../hooks/useFetch/useFetch";
function Football() {


    const url = "http://192.168.1.7:3000/football/api"

    const { loading, data, error, fetchData } = useFetch(url);
    useEffect(() => {
        fetchData();
      }, []);


      const renderData = ({ item }) => <Card prop={item}  ></Card>;
    return (


        <SafeAreaView>
        {loading ? (
            <ActivityIndicator size="large" />
          ) : (
            <FlatList data={data.data} renderItem={renderData} />
          )}
        
        </SafeAreaView>
    )
}


export default Football;