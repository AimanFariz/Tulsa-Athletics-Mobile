import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import Vision from '../../main_screens/Vision';
import Home from '../../main_screens/Home';
import Shop from '../../main_screens/Shop';
import MyHurricane from '../../main_screens/MyHurricane';

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarActiveTintColor: '#003595',
                tabBarInactiveTintColor: '#000000',
                headerShown: false,
                tabBarStyle: { position: 'absolute', backgroundColor: '#D0B787' },
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = 'home';
                    } else if (route.name === 'Vision') {
                        iconName = 'play-circle';
                    } else if (route.name === 'Shop') {
                        iconName = 'cart';
                    } else if (route.name === 'My Hurricane') {
                        iconName = 'person';
                    }

                    return <Icon name={iconName} size={size} color={color} />;
                },
            })}
        >
            <Tab.Screen name='Home' component={Home} />
            <Tab.Screen name='Vision' component={Vision} />
            <Tab.Screen name='Shop' component={Shop} />
            <Tab.Screen name='My Hurricane' component={MyHurricane} />
        </Tab.Navigator>
    );
}

export default Tabs;
