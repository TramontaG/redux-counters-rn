import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
    BottomTabNavigationOptions,
    createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import Screens from './../screens';
import TabBarIcon from './TabBarIcon';
import {colors} from '../Theme';

const Tabs = createBottomTabNavigator();

const generalTabStyle: BottomTabNavigationOptions = {
    headerPressColor: colors.blue[20],
    headerStyle: {
        backgroundColor: colors.blue[20],
    },
    tabBarStyle: {
        backgroundColor: colors.blue[20],
    },
};

const Router = () => {
    return (
        <NavigationContainer>
            <Tabs.Navigator>
                <Tabs.Screen
                    options={{
                        tabBarIcon: options => (
                            <TabBarIcon
                                {...options}
                                name="text-document"
                                color={options.focused ? 'gold' : options.color}
                            />
                        ),
                        ...generalTabStyle,
                    }}
                    name="Counters"
                    component={Screens.Counters}
                />
                <Tabs.Screen
                    options={{
                        tabBarIcon: options => (
                            <TabBarIcon
                                {...options}
                                name="dots-three-horizontal"
                                color={options.focused ? 'gold' : options.color}
                            />
                        ),
                        ...generalTabStyle,
                    }}
                    name="Config"
                    component={Screens.Settings}
                />
            </Tabs.Navigator>
        </NavigationContainer>
    );
};

export default Router;
