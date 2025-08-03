import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Dimensions } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

const { width, height } = Dimensions.get('window');

const Dots = ({ selected }) => {
  return (
    <View style={[styles.dot, selected && styles.selectedDot]} />
  );
};

const Done = (props) => (
  <TouchableOpacity style={styles.doneButton} {...props}>
    <Text style={styles.doneText}>Done</Text>
  </TouchableOpacity>
);

const OnboardingScreen = ({ navigation }) => {
  return (
    <Onboarding
      onSkip={() => navigation.navigate('RoleSelection')}
      onDone={() => navigation.navigate('RoleSelection')}
      DoneButtonComponent={Done}
      DotComponent={Dots}
      bottomBarColor="transparent"
      containerStyles={styles.container}
      imageContainerStyles={styles.imageContainer}
      pages={[
        {
          backgroundColor: 'rgb(160,184,138)',
          image: <Image source={require('../assets/OnboardingFirst.png')} style={styles.backgroundImage} />,
        },
        {
          backgroundColor: 'rgb(160,184,138)',
          image: <Image source={require('../assets/OnboardingSecond.png')} style={styles.backgroundImage} />,
        },
        {
          backgroundColor: 'rgb(160,184,138)',
          image: <Image source={require('../assets/OnboardingThird.png')} style={styles.backgroundImage} />,
        },
      ]}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    width: width,  
    height: height * 0.85, // Keeps some space for navigation buttons
    resizeMode: 'contain', // Prevents text inside the image from getting cut
  },
  dot: {
    height: 8,
    width: 8,
    borderRadius: 3,
    marginHorizontal: 3,
    backgroundColor: '#D3D3D3',
  },
  selectedDot: {
    backgroundColor: '#272953',
    width: 8,
    height: 8,
  },
  doneButton: {
    marginRight: 16,
  },
  doneText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default OnboardingScreen;

