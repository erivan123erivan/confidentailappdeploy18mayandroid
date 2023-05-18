import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NativeScreenNavigationContainer } from 'react-native-screens';
import DrawerNavigator from "./navigation/DrawerNavigator";
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import {ArticalDetailsScreen} from '../App'


const Drawernavigator = () => {
    const Drawer = createDrawerNavigator();
            return (
                
                        <NavigationContainer>
                        <Drawer.Navigator  initialRouteName='Home'>
                        <Drawer.Screen name="Home" component={GlScreen} />
                        <Drawer.Screen name="Home" component={GlScreen} />
                        {/* <Drawer.Screen name="articalDetails" component={ArticalDetailsScreen} /> */}

                        {/* <Drawer.Screen  name="articalDetails" component={ArticalDetailsScreen} /> */}

                        </Drawer.Navigator>
                        </NavigationContainer>
            )
}

export default Drawernavigator

const styles = StyleSheet.create({

})