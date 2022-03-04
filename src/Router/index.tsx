import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
    BottomTabNavigationOptions,
    createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import Screens from './../screens';
import TabBarIcon from './components/TabBarIcon';
import {colors} from '../Theme';
import Header from './components/Header';

const Tabs = createBottomTabNavigator();

const getGeneralOptions = (iconName: string): BottomTabNavigationOptions => ({
    tabBarIcon: options => (
        <TabBarIcon
            {...options}
            name={iconName}
            color={options.focused ? 'gold' : options.color}
        />
    ),
    headerPressColor: colors.blue[20],
    tabBarStyle: {
        backgroundColor: colors.blue[20],
    },
    tabBarActiveTintColor: 'gold',
    tabBarInactiveTintColor: colors.blue[80],
    header: ({route}) => (
        <Header
            title={route.name}
            bgColor={colors.blue[20]}
            textColor={'white'}
        />
    ),
});

const Router = () => {
    return (
        <NavigationContainer>
            <Tabs.Navigator>
                <Tabs.Screen
                    options={getGeneralOptions('text-document')}
                    name="Counters"
                    component={Screens.Counters}
                />
                <Tabs.Screen
                    options={getGeneralOptions('dots-three-horizontal')}
                    name="Config"
                    component={Screens.Settings}
                />
            </Tabs.Navigator>
        </NavigationContainer>
    );
};

export default Router;
