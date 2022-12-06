import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { style } from "/styling";

function Product({ navigation, route }) {
  //   console.log(route);
  let data = route.params;
  return (
    <>
      <View style={{ padding: 10, backgroundColor: "white" }}>
        <View
          style={{
            alignItems: "center",
            sjustifyContent: "center",
            borderRadius: 25,
            backgroundColor: "white",
            height: "60%",
            paddingTop:60
        }}
        >
          <Image
            source={{ uri: data.image }}
            style={{ width: "100%", height: "50%", resizeMode: "contain" }}
          />
        </View>
        <View
          style={{
            backgroundColor: "white",
            padding: 10,
            // margin: 8,
            height: "40%",
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          }}
        >
          <ScrollView>
            <View>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "800",
                  color: "black",
                  borderBottomColor: "grey",
                  borderBottomWidth: 1.5,
                  padding: 5,
                }}
              >
                {data.title}
              </Text>
            </View>
            <View style={{ marginTop: 5 }}>
              <Text style={{ color: "grey" }}>{data.description}</Text>
            </View>
            <View style={{ marginTop: 5 }}>
              <Text style={{ color: "black", fontWeight: "600" }}>
                Sold {data.rating.count} Items
              </Text>
            </View>

            <View style={{ marginTop: 5 }}>
              <View style={{ flexDirection: "row" }}>
                <View style={{ marginTop: 15 }}>
                  <Text
                    style={{ fontWeight: "600", color: "black", fontSize: 16 }}
                  >
                    Price:{data.price}USD
                  </Text>
                </View>
                <View style={{ marginLeft: 80 }}>
                  <TouchableOpacity
                    style={{
                      borderRadius: 20,
                      paddingHorizontal: 30,
                      paddingVertical: 10,
                      backgroundColor: "black",
                    }}
                  >
                    <Text style={{ color: "white", fontWeight: "600" }}>
                      Cart
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    </>
  );
}

export default Product;