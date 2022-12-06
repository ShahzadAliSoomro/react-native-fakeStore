import { View,Text,TextInput, TouchableOpacity, ScrollView,Image } from "react-native";
import styles from "./styling";
import axios from "axios";
import { useEffect, useState } from "react";


function Home(){
    const [productList,setProductList] = useState([])
    let getData = ()=>{
        let api = 'https://fakestoreapi.com/products'
        axios.get(api).then((res)=>{
            setProductList(res.data)
        }).catch((err)=>{
            console.log(err)
        })
    }
    useEffect(()=>{
        getData()
    },[])

    return (
    <>
      <View style={[styles.bgLight,styles.h100]}>
        <View style={[styles.bgWhite,styles.p2,styles.py3,{borderBottomRightRadius:10}]}>
            <View>
                <Text style={[styles.textPrimary,styles.fs2]}>Availble Product</Text>
                <View style={[styles.flexRow,styles.py2]}>
                   <TouchableOpacity style={styles.btn}>
                     <Text style={styles.textWhite}>See More</Text>
                   </TouchableOpacity>
                </View>
            </View>
        </View>
        <View style={styles.p2}>
      <ScrollView>
        {productList && productList.map((e,i)=><View>
            <Image style={{width:200,height:200}} source={{uri:e.image}} />
            <Text>{e.title}</Text>
        </View>)}
      </ScrollView>
        </View>
      </View>
    </>
    )
}
export default Home