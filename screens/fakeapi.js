// import {StyleSheet, Text, View} from 'react-native';
import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  RefreshControl,
  TextInput,
  Touchable,
  ToastAndroid,
} from "react-native";
import { GlobalStyle } from "../global";
import { useState, useEffect } from "react";
import Product from "./product";
import styles from "../styling";
function FakeApi({navigation}) {
  let [mydata, setData] = React.useState([]);
  let [loader, setloader] = React.useState(false);
  let [refresh, setRefresh] = React.useState(false);
  const [allCategories, setAllCategories] = useState([]);
  const [Txt, setTxt] = useState("");
  const searchtxt = (e) => {
    setTxt(e.taget.value);
  };
  console.log(Txt);
  let datasearch = mydata.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key].toString().toLowerCase().includes(Txt.toString().toLowerCase())
    );
  });
  let handleRefresh = () => {
    setRefresh(true);
    setTimeout(() => {
      setRefresh(false);
      ToastAndroid.show("Refreshed Successfully", 2000);
    }, 1500);
  };
  let getData = async () => {
    setloader(true);
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setData(data);
      setloader(false);
    } catch (error) {
      console.log(error);
      setloader(false);
    }
  };
  let getCategories = () => {
    let li = mydata.map((x) => x.category);
    li = [...new Set([...li])];
    setAllCategories([...li]);
  };
  let move =(e)=>{
navigation.navigate('Product',e)
  }
  useEffect(() => {
    getData();
    getCategories();
  }, []);
  return loader ? (
    <View
      style={{
        height: "100%",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Image
        source={{
          uri: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921",
        }}
        style={{ width: "50%", height: "50%" }}
      />
    </View>
  ) : (
    <>
      <View style={styles.bgInfo}>
        <Text
          style={{
            textAlign: "center",
            marginHorizontal: 20,
            marginVertical: 20,
            fontSize: 26,
            fontWeight: "bold",
            color: "white",
            fontFamily: "cursive",
          }}
        >
          Fake Store
        </Text>
      </View>
      <View style={GlobalStyle.SearchInput}>
        <TextInput
          placeholder="Search..."
          placeholderTextColor={"#242948"}
          style={{
            width: "85%",
            color: "#242948",
            fontSize: 18,
            fontFamily: "sans-serif",
            paddingHorizontal: 20,
          }}
          onChangeText={(e) => {
            setTxt(e);
          }}
        />
        <TouchableOpacity
          style={{
            width: "15%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: "row", margin: 15 }}>
        <ScrollView horizontal={true} style={{ paddingVertical: 10 }}>
          {allCategories.map((item, index) => (
            <View style={{ marginHorizontal: 5 }} key={index}>
              <TouchableOpacity>
                <Text style={{ color: "black", fontWeight: "600", padding: 3 }}>
                  {item}
                </Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      </View>
        <View>
          <ScrollView
            refreshControl={
              <RefreshControl onRefresh={handleRefresh} refreshing={refresh} />
            }
          >
            <View style={GlobalStyle.main}>
              {datasearch?.map((e, i) => {
                return (
                  <TouchableOpacity key={i} onPress={()=>move(e)} style={GlobalStyle.mainScreen}>
                  <View key={i} >
                    <View key={i} style={GlobalStyle.card}>
                      <View style={GlobalStyle.cardHeader}></View>
                      <View style={GlobalStyle.cardImageContainer}>
                        <Image
                          source={{ uri: e.image }}
                          style={GlobalStyle.cardImage}
                        />
                      </View>
                      <View style={GlobalStyle.cardBodyContainer}>
                        <Text style={GlobalStyle.cardHeader}>{e.title}</Text>
                        <Text
                          style={[
                            GlobalStyle.cardHeader,
                            { textAlign: "justify" },
                          ]}
                        >
                          {e.description.slice(0, 70) +
                            (e.description > 70 ? "..." : " ")}
                        </Text>
                        <Text style={GlobalStyle.cardBodyHeadings}>
                          {e.price} USD
                        </Text>
                      </View>
                    </View>
                  </View>
                  </TouchableOpacity>
                );
              })}
            </View>
          </ScrollView>
        </View>
    </>
  );
}

export default FakeApi;