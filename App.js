// Import necessary modules and components from their respective libraries
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View, Button, Pressable, TextInput, Modal } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import VideoPlayer from 'expo-video-player';
import 'react-native-gesture-handler';
// Import the Firebase configuration from the 'firebaseConfig' file in the 'src' directory
import { dbFirebase } from './src/firebaseConfig';
// Import the 'Link' component from the 'react-navigation/native' library
import { Link } from '@react-navigation/native';
// Import the 'useCallback' hook from the 'react' library
import { useCallback } from "react";
// Import the 'WebView' component from the 'react-native-webview' library
import { WebView } from 'react-native-webview';
// Import the 'useFonts' hook from the 'expo-font' library
import { useFonts } from 'expo-font';
// Import the 'SplashScreen' module from the 'expo-splash-screen' library
import * as SplashScreen from 'expo-splash-screen';
import ImagePicker from 'react-native-image-picker';
// Import the 'SvgUri' component from the 'react-native-svg' library
import { SvgUri } from 'react-native-svg';
import { flushSync } from 'react-dom';
// Creating a BottomTabNavigator instance
const tab = createBottomTabNavigator();
// Creating a DrawerNavigator instance
const Drawer = createDrawerNavigator();









// A screen component that displays a web page using WebView
function VideoScreen() {
  return (
    <WebView style={{marginTop:0}}
      source={{ uri: 'https://kainatv.com/' }}
    />
  );
}

  





















// A screen component that displays some text

function AccountScreen() {
  const webViewRef = null;

  const onMessage = (event) => {
    const data = JSON.parse(event.nativeEvent.data);
    if (data.type === 'upload_image') {
      showImagePicker();
    }
  };

  const showImagePicker = () => {
    const options = {
      title: 'Select Image',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.showImagePicker(options, async (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        const formData = new FormData();
        formData.append('image', {
          uri: response.uri,
          type: response.type,
          name: response.fileName,
        });

        // Send the formData object to the WebView
        webViewRef.current.postMessage(JSON.stringify({ type: 'image_data', formData }));
      }
    });
  };

  return (
    <WebView
      ref={webViewRef}
      style={{ marginTop: 0 }}
      source={{ uri: 'https://institutoperforma.com/' }}
      onMessage={onMessage}
      javaScriptEnabled={true}
      mixedContentMode="always"
    />
  );
}

  
  




 









// A screen component that displays some text
function PaymentScreen() {
  return (
    <WebView style={{marginTop:0}}
    source={{ uri: 'https://kainatv.com/cart/' }}
  />
  );
}



// A function that creates a DrawerNavigator with two screens
function DDrawer() {
  const Drawer = createDrawerNavigator();
  const navigation = useNavigation();
 
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <Drawer.Navigator  drawerContent={props=><Constummenu{...props}/>} initialRouteName='Home'>
     <Drawer.Screen 
  name="Latest news"
  component={GlScreen}
  options={{
    headerTitle: 'Latest news',
    headerTitleStyle: {
      fontFamily: 'futura-pt',
    },
    headerLeft: () => (
      <Image
      source={require('./assets/icon.png')}
      style={{ width: 30, height: 30, marginLeft: 10 }}
      onPress={() => navigation.navigate('Chat')}
    />
    ),
 
    headerRight: () => (
      <View style={{ flexDirection: 'row' }}>
        <Ionicons
          name="chatbubble"
          size={25}
          color="#64676B"
          style={{ marginRight: 10 }}
          onPress={() => navigation.navigate('Chat')}
        />
        <Ionicons
          name="compass"
          size={25}
          color="#64676B"
          style={{ marginRight: 10 }}
          onPress={() => navigation.navigate('order')}
        />
          <View>
      <TouchableOpacity onPress={openModal}>
        <Ionicons
          name="person"
          size={25}
          color="#64676B"
          style={{ marginRight: 10 }}
        />
      </TouchableOpacity>
      <Modal
        visible={modalVisible}
        animationType="slide"
        onRequestClose={closeModal}
      >
        <View style={{marginTop:69, marginLeft:'auto',marginRight:'auto'}}>
          {/* Your modal content goes here */}
          <Text style={{fontSize:16,fontFamily:'futura-pt'}}>Contact information</Text>
          <Text style={{fontSize:16,fontFamily:'futura-pt'}}>+33 0767261221</Text>
          <Text style={{fontSize:16,fontFamily:'futura-pt'}}>theaurorax23@gmail.com</Text>


          <TouchableOpacity onPress={closeModal}>
            <Text style={{marginTop:69, marginLeft:'auto',marginRight:'auto',fontSize:16,fontFamily:'futura-pt'}}>Close </Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
      </View>
    ),
  }}
/>
     
     
      
      <Drawer.Screen
        name="Artical Details"
        component={ArticalDetailsScreen}
        options={{
          headerTitle: 'Article',
          headerTitleStyle: {
            fontFamily: 'futura-pt',
          },
          headerRight: () => (
            <View style={{flexDirection:'row',}}>
              <Ionicons
               name="chatbubble"
               size={25}
               color="#64676B"
               style={{ marginRight: 10, }}
               onPress={() => navigation.navigate('Chat')}
             />
 
 <Ionicons
               name="compass"
               size={25}
               color="#64676B"
               style={{ marginRight: 10, }}
               onPress={() => navigation.navigate('order')}
             />
            </View>
            
           ),
        }}
      />
    </Drawer.Navigator>
  );
}








// A custom menu component for the drawer navigator
function Constummenu() {
  return (
    <View style={{flex:1,paddingTop:10,paddingHorizontal:20,}}>
      <View style={{flex:0.3,flexDirection:'row', alignItems:'center',justifyContent:'center'}}>
      <Image
      source={require('./assets/icon.png')}
      style={{ height: 40, width: 40, marginRight: 20 }}
    />
      </View>
      <View style={{flex:0.5,flexDirection:'column', alignItems:'center'}}>
        <View style={{marginTop:10}}>
          <Link style={{fontSize:16,fontFamily:'futura-pt'}} to={{ screen: 'Chat' }} >
            Chat
          </Link>
        </View>
      
        <View style={{marginTop:10}}>
          <Link style={{fontSize:16,fontFamily:'futura-pt'}} to={{ screen: 'Shop' }} >
            Shop
          </Link>
        </View>
        <View style={{marginTop:10}}>
          <Link style={{fontSize:16,fontFamily:'futura-pt'}} to={{ screen: 'order' }} >
            Order
          </Link>
        </View>
        <View style={{marginTop:10}}>
          <Link style={{fontSize:16,fontFamily:'futura-pt'}} to={{ screen: 'Home' }} >
            Newspepper
          </Link>
        </View>
      </View>


    
   



      <View style={{flex:0.2,flexDirection:'row', alignItems:'center'}}>
        <Image source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-fACBRAOyOzIWj5F4cSvWYICGx44X6JUV_w&usqp=CAU'}} style={{height:23,width:23,marginRight:20,}} />
        <Link style={{fontSize:16,fontFamily:'futura-pt'}} to={{ screen: 'order' }} >
           Your order
        </Link>
        <Image source={require('./assets/qrcode.png')} style={{height:60,width:60,marginLeft:60,}} />
      </View>
    </View>
  );
}


 
   







function GlScreen({ navigation }) {
    // Initialize the data state as null
  const [data, setData] = useState(null);
   // Fetch the data from the "articles" Firebase collection when the component mounts
  useEffect(() => {
    getUserData();
  }, []);
 // Retrieve data from Firebase and update the "data" state
  const getUserData = async () => {
    let doc = await dbFirebase.collection('articles').get();
    let data = doc.docs.map((x) => {
      return x.data();
    });
    console.log('data', data);
    setData(data);
  };

   
   
   

  // Initialize the search query state as an empty string
  const [searchQuery, setSearchQuery] = useState('');
 // Filter the "data" array based on the search query
  const filteredData = data ? data.filter((item) => item.title.includes(searchQuery)) : [];
  
  const [isModalVisible, setModalVisible] = useState(false);

  const handlePress = () => {
    setModalVisible(true);
  };

  
  const handleChatPress = () => {
    navigation.navigate('Chat'); // replace 'Chat' with the name of your chat screen
  };

  
  
  return (
      // Render the screen with a search bar and a list of articles
    <View style={{ flex: 1 , backgroundColor:'white',textTransform: 'capitalize' }}>
     
      {/* Render the search bar */}
      <View style={styles.containers}>
     
      <View style={styles.contentsearchbar}>
  {/* Render the image search icon */}
  <Ionicons
  name="search-outline"   
  size={19}
  style={styles.searchIcon}
/>

  {/* Render the search input */}
  <TextInput
    style={styles.searchInput}
    onChangeText={(query) => setSearchQuery(query)}
    value={searchQuery}
    placeholder="Search for an article..."
    placeholderTextColor="#757575"
    keyboardType="web-search"
    clearButtonMode="while-editing"
    returnKeyType="search"
    onSubmitEditing={() => handleSearch()}
    underlineColorAndroid="transparent"
    blurOnSubmit={true}
    autoCapitalize="none"
    autoCorrect={false}
    leftIcon={
      <Image
        source={require('./assets/search.png')}
        style={styles.searchIcon}
      />
    }
    textAlignVertical="center"
    paddingLeft={30}
  />



</View>





 





 








  {/* Render the list of articles */}
        <FlatList
          data={filteredData}
          style={{ flex: 1 }}
          keyExtractor={(_, index) => index.toString()}
          showsVerticalScrollIndicator={false}
          renderItem={({ item, index }) => (
            <TouchableOpacity style={styles.screen} onPress={() => navigation.navigate('Artical Details', { dataToShow: item })}>
              <View style={styles.imgCont}>
                <Image style={styles.img} source={{ uri: item.image }} />
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 10 }}>
                <Text style={{ fontSize: 16, fontFamily:'futura-pt', textTransform: 'capitalize' }}>{item.title}</Text> 
                <Text style={{ fontFamily:'futura-pt' }}> {item.date}</Text>
              </View>


              <View>
              <View style={{flexDirection:'row',justifyContent:'space-between',marginRight:50,}}>
             
               <Image style={{height:30,width:30,marginLeft:10,}} source={{
          uri: 'https://kainatv.com/wp-content/uploads/2023/03/cropped-adaptive-icon-removebg-preview.png',
        }} />
                <View style={{flexDirection:'row'}}>
                  <Image style={{height:20,width:20,}} source={{ uri: 'data:image/png;base64,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' }} />
                  <Text style={{ fontFamily:'futura-pt' }}> {item.likes}</Text>
                </View>
               </View>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
      <TouchableOpacity style={styles.floatingButton} onPress={handleChatPress}>
  <View style={styles.middle}>
    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
      <Ionicons name="chatbubbles" size={19} color="white" style={{ marginRight: 8 , backgroundColor:'#3F73E7', padding:5,borderRadius:25, }} />
      <Text style={{ color: 'white' }}>Send a message</Text>
      <Ionicons name="ios-add" size={24} color="white" style={{ marginLeft: 8 }} />
    </View>
  </View>
</TouchableOpacity>

   
    </View>
     
      
  );
}
 








function ArticalDetailsScreen(props) {
  // Extracting the "dataToShow" object from the navigation route params
  const { dataToShow } = props.route.params

  return (
    // A scrollable container that covers the entire screen with a white background color
    <ScrollView style={{backgroundColor:'white'}} showsVerticalScrollIndicator={false}>
      <View style={{ flex: 1, paddingHorizontal: 10 }}>
        {/* Container for the article's main image */}
        <View style={[styles.imgCont, { marginBottom: 10 }]}>
          {/* The main image of the article */}
          <Image style={styles.img} source={{ uri: dataToShow.image }} />
        </View>
        {/* If the article has a video link, show it using the VideoPlayer component */}
        {dataToShow["video link"] &&
          <View style={{ height: 250, width: '100%', }}>
            <VideoPlayer
              loadin
              style={{ height: 250,}}
              inFullScreen={false}
              videoProps={{
                // The video should start playing automatically
                shouldPlay: false,
                // The video should be resized to cover the entire screen
                resizeMode:'cover',
                source: {
                  // The URI of the video to be played
                  uri: dataToShow["video link"]
                },
              }}
            />
          </View>
        }
        {/* The category of the article */}
        <Text style={styles.categoryText}>{dataToShow.category}</Text>
        {/* The title of the article and its publishing date */}
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={styles.text}>{dataToShow.title}</Text>
          <Text style={styles.text}>{dataToShow.date}</Text>
        </View>
        {/* Container for the paragraphs of the article */}
        <View style={{backgroundColor:'white' ,padding:10,}}>
          {/* The first paragraph of the article */}
          <Text style={{marginBottom:10,fontFamily:'futura-pt', color:'#354855'}}>{dataToShow.paragraphone}</Text>
          {/* The second paragraph of the article */}
          <Text style={{marginBottom:10,fontFamily:'futura-pt', color:'#354855'}}>{dataToShow.paragraphtwo}</Text>
          {/* The third paragraph of the article */}
          <Text style={{marginBottom:10,fontFamily:'futura-pt', color:'#354855'}}>{dataToShow.paragraphthree}</Text>
          {/* The fourth paragraph of the article */}
          <Text style={{marginBottom:10,fontFamily:'futura-pt', color:'#354855'}}>{dataToShow.paragraphfour}</Text>
        </View>
      </View>
    </ScrollView>
  );
}






const TabBarIcon = ({ focused, icon, color}) => {
  console.log("Rendering icon:", icon); 
  return (
    <SvgUri
      uri={icon}
      width={22}
      height={22}
      fill={focused ? color : 'gray'}
    />
  );
};




export default function App() {
  
  // Load custom font
  const [fontsLoaded] = useFonts({
    'futura-pt': require('./assets/fonts/FuturaCyrillicDemi.ttf'),
  });

  // Hide SplashScreen when fonts are loaded
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  // If custom font is not loaded, return null to show a blank screen
  if (!fontsLoaded) {
    return null;
  }
  

   
  // Render the app inside NavigationContainer
  return (
    <NavigationContainer>
   <tab.Navigator
    screenOptions={({ route }) => ({
      // Set tab bar icon based on route name
      tabBarIcon: ({ focused, color, size }) => {
        let icon;
        if (route.name == "Accueil") {
          icon = focused ? require('./assets/svg/home-full.png') : require('./assets/svg/home.svg');
        } else if (route.name == "Home") {
          icon = focused ? require('./assets/svg/home-full.png') : require('./assets/svg/home.png');
        } else if (route.name == "Shop") {
          icon = focused ? require('./assets/svg/shop-full.png') : require('./assets/svg/shop.png');
        } else if(route.name == "ecommerce"){
          icon = focused ? require('./assets/svg/chat.svg') : require('./assets/svg/chat.svg');
        }else if(route.name == "Chat"){
          icon = focused ? require('./assets/svg/video-full.png') : require('./assets/svg/video.png');
        }else if(route.name == "order"){
          icon = focused ? require('./assets/svg/wallet-full.png') : require('./assets/svg/wallet.png');
        }
        return <Image source={icon} style={{ width: 22, height: 22 }} resizeMode="contain" />;i
      },
      tabBarLabelStyle: {
        fontFamily: 'futura-pt',
        fontSize: 12,
        color: 'black',
       
      },
      
      tabBarActiveTintColor: 'black', 
    })}
  >
    {/* Set up the screens for each tab */}
  
   



    
  
     



    <tab.Screen
      options={{ tabBarShowLabel: true, headerShown: false }}
      name='Home'
      component={DDrawer}
    />

    <tab.Screen
      options={{ tabBarShowLabel: true, headerShown: false }}
      name='Shop'
      component={VideoScreen}
    />


<tab.Screen
      options={{ tabBarShowLabel: true, headerShown: false }}
      name='Chat'
      component={AccountScreen}
    />

<tab.Screen
      options={{ tabBarShowLabel: true, headerShown: false }}
      name='order'
      component={PaymentScreen}
    />


  



    
    
     
  </tab.Navigator>




  </NavigationContainer>


  );
};



 // all Styles for the application
const styles = StyleSheet.create({
  accueil: {
  
  }
  , font: {
    fontFamily:'futura-pt',
    fontSize: 22,
    color:'black',
  },
  imagemiddle:{
   height:34,
   width:34,
  },
  middle:{
    borderColor:'#F2F3F5',
    borderWidth:0,
    borderRadius:30,
    padding:7,
    backgroundColor:'#2963E2',
    shadowRadius: 2,
  },
  container: {
    marginLeft: 20,
    marginTop: 20,
    marginRight: 10,
    // flexDirection: 'flex',
    backgroundColor: 'white',
    width: '90%',
    height: '100%',
  },
  searchBar: {
    flexDirection:'row',
    justifyContent: 'center',
    height: 37,
    padding:10,
    width: 300,
    backgroundColor:'#E6EBF5',
    color:'#A8ADC1',
    borderRadius:20,
    marginTop:10,
    marginLeft:'auto',
    marginRight:'auto',
  },
  contentsearchbar:{
    flexDirection:'row',
    justifyContent: 'center',
    height: 37,
    padding:10,
    width: 300,
    marginBottom:10,
    backgroundColor: '#EFEFEF',
    color:'#A8ADC1',
    borderRadius:10,
    marginTop:10,
    paddingRight:2,
    marginLeft:'auto',
    marginRight:'auto',
  },

  tinyLogo: {
    width: '100%',
    height: '35%',
    resizeMode: 'cover',
    marginLeft: .0,
    marginTop: 12,
  },
  image: {
    opacity: 2,
    padding: 10,
    margin: 20,
    flex: 1,
    resizeMode: 'center',
    justifyContent: 'center',
  },
  
  text: {
    fontFamily:'futura-pt',
    color: 'black',
    marginTop: 20,
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'left',
    paddingLeft: 30,
  },
  subtext: {
    marginTop: 20,
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'left',
    paddingLeft: 30,
  },
  navigator:{
   backgroundColor: 'orange',
  },
  screen: {
    shadowColor: '#485056',  
    elevation: 2,  
    marginLeft: 12,
    marginBottom: 0,
    marginTop: 20,
    height: 230,
    marginRight: 12,
    backgroundColor: 'white',
    borderRadius: 6,
    marginBottom:10,
  },


  btn: {

  },
  containers:{
    width: '100%',
    height: '100%',
  },
  contentbox:{
   width:200,
   height:200,
   marginLeft:20,
   marginTop:10,
   borderRadius:20,
   backgroundColor:'white',
  }
,
  imgCont: {
    height: 150,
    width: '100%',
  },
  img: {
    height: '100%',
    width: '100%',
    borderRadius: 4
  },
  textCont: {
    marginVertical: 4
  },
  categoryText: {
    fontFamily:'futura-pt',
    alignItems: 'center',
    alignSelf: 'center',
    textTransform: 'capitalize',
    fontSize: 22,
    marginVertical: 10,
    fontWeight: '500'
  },
  text: {
    fontFamily:'futura-pt',
    textTransform: 'capitalize',
    fontSize: 18,
    fontWeight: '500'
  },
  badget:{
    marginLeft:10,
    backgroundColor:'#E2EBF7',  
    padding:5,
    borderRadius: 20,
    color:'#285191',
  },
  floatingButton:{
    position:'absolute',
    width:'100%',
    height:100,
    alignItems:'center',
    justifyContent: 'center',
    bottom:0,
    paddingTop:29,
  },
  floatingButtondeux:{
    backgroundColor: '#2963E2',
    width:'100%',
    height:100,
    
  },
  buttonw:{
    alignItems: 'center',
    justifyContent: 'center',
    color:'#FFFFFF',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 100,
    elevation: 3,
    backgroundColor: '#0095DA',
  },
  
  searchIcon: {
    width: 18,      
    height: 18 ,
    marginLeft:15,
  },
  searchInput:{
    width:280,
  }

});



