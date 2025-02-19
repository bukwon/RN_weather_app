import { StatusBar } from 'expo-status-bar';
import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import { Dimensions } from 'react-native';

import * as Location from 'expo-location';

const SCREEN_WIDTH = Dimensions.get('window').width;

console.log(SCREEN_WIDTH);

const App = () => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [city, setCity] = useState(null);

  // 허가 여부
  const [permitted, setPermitted] = useState(true);

  const locationData = async () => {
    const { granted } = await Location.requestForegroundPermissionsAsync();
    // console.log(permission);

    if (!granted) {
      setPermitted(false);
      setErrorMsg('위치에 대한 권한 부여가 거부되었습니다.');

      return;
    }

    const {coords: {latitude ,longitude}} = await Location.getCurrentPositionAsync({ accuracy: 5 });
    

    const address = await Location.reverseGeocodeAsync(
      { latitude, longitude },
      { useGoogleMaps: false });

      // console.log(address);
      // console.log(address[0].city);

      const cityAddress = address[0].city;
      setCity(cityAddress);
  };


  useEffect(() => {
    locationData();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.cityCon}>
        <Text style={styles.city}>{city}</Text>
      </View>
      <View style={styles.regDateCon}>
        <Text style={styles.regDate}>10월 13일, 일, 13:18</Text>
      </View>
      <ScrollView horizontal pagingEnabled showsHorizontalScrollIndicator={false} contentContainerStyle={styles.weather}>
        <View style={styles.weatherInner}>
          <View style={styles.day}>
            <Text style={styles.desc}>맑음</Text>
          </View>
          <View style={styles.tempCon}>
            <Text style={styles.temp}>24</Text>
          </View>
        </View>
        <View style={styles.weatherInner}>
          <View style={styles.day}>
            <Text style={styles.desc}>맑음</Text>
          </View>
          <View style={styles.tempCon}>
            <Text style={styles.temp}>24</Text>
          </View>
        </View>
        <View style={styles.weatherInner}>
          <View style={styles.day}>
            <Text style={styles.desc}>맑음</Text>
          </View>
          <View style={styles.tempCon}>
            <Text style={styles.temp}>24</Text>
          </View>
        </View>
        <View style={styles.weatherInner}>
          <View style={styles.day}>
            <Text style={styles.desc}>맑음</Text>
          </View>
          <View style={styles.tempCon}>
            <Text style={styles.temp}>24</Text>
          </View>
        </View>
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffe01a',
  },
  regDateCon: {
    alignItems: 'center',
  },
  regDate: {
    paddingTop: 10,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 15,
    backgroundColor: 'black',
    color: 'white',
    fontWeight: 'bold',
    borderRadius: 20,
    overflow: 'hidden',
  },
  cityCon: {
    flex: 0.3,
  },
  city: {
    flex: 1,
    marginTop: 50,
    paddingTop: 20,
    fontSize: 40,
    textAlign: "center",
    fontWeight: "bold",
  },
  weatherInner: {
    flex: 3,
    width: SCREEN_WIDTH,
  },
  day: {
    flex: 0.2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  desc: {
    flex: 1.5,
    marginTop: 20,
    fontSize: 25,
    fontWeight: 'bold',
  },
  tempCon: {
    flex: 0.3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  temp: {
    fontSize: 120,
  },
});

export default App;