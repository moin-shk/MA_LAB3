import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ActivityIndicator,
  Share,
  TouchableOpacity,
  Animated,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationProp, ParamListBase } from '@react-navigation/native';

type Props = {
  navigation: NavigationProp<ParamListBase>;
};

const Orange: React.FC<Props> = ({ navigation }) => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [hasError, setHasError] = React.useState(false);
  const [isZoomed, setIsZoomed] = React.useState(false);
  const scaleValue = React.useRef(new Animated.Value(1)).current;

  const handleShare = async () => {
    try {
      await Share.share({
        message: 'Check out this juicy Orange!',
        url: 'https://upload.wikimedia.org/wikipedia/commons/c/c4/Orange-Fruit-Pieces.jpg',
      });
    } catch (error) {
      console.error('Error sharing:', error);
    }
  };

  const handleImagePress = () => {
    setIsZoomed(!isZoomed);
    Animated.spring(scaleValue, {
      toValue: isZoomed ? 1 : 1.5,
      useNativeDriver: true,
    }).start();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View 
        style={styles.content}
        accessible={true}
        accessibilityLabel="Orange details screen"
      >
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
          accessible={true}
          accessibilityLabel="Go back"
        >
          <Text style={styles.backButtonText}>← Back</Text>
        </TouchableOpacity>

        <Text 
          style={styles.title}
          accessibilityRole="header"
        >
          This is an Orange
        </Text>

        <View style={styles.imageContainer}>
          <TouchableOpacity onPress={handleImagePress} activeOpacity={0.9}>
            <Animated.Image 
              source={{ 
                uri: 'https://upload.wikimedia.org/wikipedia/commons/c/c4/Orange-Fruit-Pieces.jpg',
                cache: 'force-cache'
              }}
              style={[
                styles.image,
                { transform: [{ scale: scaleValue }] }
              ]}
              onLoadStart={() => setIsLoading(true)}
              onLoadEnd={() => setIsLoading(false)}
              onError={() => setHasError(true)}
              accessible={true}
              accessibilityLabel="Picture of orange slices"
            />
          </TouchableOpacity>
          {isLoading && (
            <ActivityIndicator 
              style={styles.loader}
              size="large"
              color="#FFA500"
            />
          )}
          {hasError && (
            <Text style={styles.errorText}>Failed to load image</Text>
          )}
        </View>

        <Text style={styles.description}>
          The orange is a citrus fruit known for its refreshing taste and high
          vitamin C content. Its bright color and sweet-tart flavor make it a
          popular fruit worldwide. Oranges can be eaten fresh, juiced, or used
          in various culinary applications.
        </Text>

        <TouchableOpacity 
          style={styles.shareButton}
          onPress={handleShare}
          accessible={true}
          accessibilityLabel="Share orange information"
        >
          <Text style={styles.shareButtonText}>Share</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    padding: 10,
  },
  backButtonText: {
    fontSize: 16,
    color: '#FFA500',
    fontWeight: 'bold',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 60,
    marginBottom: 20,
    color: '#333',
  },
  imageContainer: {
    position: 'relative',
    width: 250,
    height: 250,
    marginVertical: 20,
    overflow: 'hidden',
    borderRadius: 15,
    backgroundColor: '#f5f5f5',
  },
  image: {
    width: 250,
    height: 250,
    borderRadius: 15,
  },
  loader: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [
      { translateX: -25 },
      { translateY: -25 }
    ],
  },
  errorText: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [
      { translateX: -50 },
      { translateY: -10 }
    ],
    color: 'red',
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: '#666',
    textAlign: 'center',
    marginVertical: 20,
    paddingHorizontal: 20,
  },
  shareButton: {
    backgroundColor: '#FFA500',
    paddingHorizontal: 30,
    paddingVertical: 12,
    borderRadius: 25,
    marginTop: 20,
  },
  shareButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Orange;