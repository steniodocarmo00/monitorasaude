import * as dotenv from "dotenv";

dotenv.config();

module.exports = {
  "expo": {
    "name": "Monitora Saúde",
    "slug": "monitorasaude",
    "extra": {
      "eas": {
        "projectId": "6355a5d7-de06-42da-9a42-792469191dcd"
      }
    },
    "experiments": {
      "tsconfigPaths": true
    },
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/icon.png",
    "userInterfaceStyle": "light",
    "splash": {
      "image": "./assets/splash.png",
      "resizeMode": "contain",
      "backgroundColor": "#69B578"
    },
    "assetBundlePatterns": [
      "**/*"
    ],
    "ios": {
      "supportsTablet": true,
      "config":{
        "googleMapsApiKey": process.env.GOOGLE_MAPS_API_KEY
      }
    },
    "android": {
      "adaptiveIcon": {
        "foregroundImage": "./assets/adaptive-icon.png",
        "backgroundColor": "#ffffff"
      },
      "config": {
        "googleMaps": {
          "apiKey": process.env.GOOGLE_MAPS_API_KEY
        }
      },
      "package": "com.cesupa.monitorasaude",
      "versionCode": 1
    },
    "web": {
      "favicon": "./assets/favicon.png"
    },
    "plugins": [
      [
        "expo-location",
        {
          "locationAlwaysAndWhenInUsePermission": "Allow $(PRODUCT_NAME) to use your location."
        },
      ],
      "expo-router"
    ]
  }
}
