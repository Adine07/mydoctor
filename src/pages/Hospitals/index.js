import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import {
  DummyHospital1,
  DummyHospital2,
  DummyHospital3,
  ILHospitalBG,
} from '../../assets/';
import {ListHospital} from '../../components/';
import {fonts, colors} from '../../utils';

const Hospitals = () => {
  return (
    <View style={styles.page}>
      <ImageBackground source={ILHospitalBG} style={styles.background}>
        <Text style={styles.title}>Nearby Hospitals</Text>
        <Text style={styles.desc}>3 Tersedia</Text>
      </ImageBackground>
      <View style={styles.content}>
        <ListHospital
          type="Rumah Sakit"
          name="Citra Bunga Merdeka"
          address="Jln. Citra Sulaiman 12"
          pic={DummyHospital1}
        />
        <ListHospital
          type="Rumah Sakit Anak"
          name="happy Family Kids"
          address="Jln. Citra Sulaiman 12"
          pic={DummyHospital2}
        />
        <ListHospital
          type="Rumah Sakit jiwa"
          name="Tingkatan Paling Atas"
          address="Jln. Citra Sulaiman 12"
          pic={DummyHospital3}
        />
      </View>
    </View>
  );
};

export default Hospitals;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.secondary,
    flex: 1,
  },
  background: {
    paddingTop: 30,
    height: 240,
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.white,
    textAlign: 'center',
  },
  desc: {
    fontSize: 14,
    fontFamily: fonts.primary[300],
    color: colors.white,
    marginTop: 6,
    textAlign: 'center',
  },
  content: {
    backgroundColor: colors.white,
    borderRadius: 20,
    marginTop: -30,
    flex: 1,
    paddingTop: 14,
  },
});
