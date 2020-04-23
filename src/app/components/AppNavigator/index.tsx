import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Routes from 'src/constants/routes';
import CustomHeader from './components/LibraryTabScreen/components/CustomHeader';
import CustomSearchButton from './components/LibraryTabScreen/components/CustomSearchButton';
import { white } from 'src/constants/colors';
import { Platform } from 'react-native';
import BookDetails from 'src/app/screens/BookDetails';
import CustomBackButton from './components/LibraryTabScreen/components/CustomBackButton';
import Search from 'src/app/screens/Search';
import LibraryTabScreen from './components/LibraryTabScreen';

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={Routes.Library}>
        <Stack.Screen 
          name={Routes.Library}
          component={LibraryTabScreen} 
          options={{
            headerBackground: () => <CustomHeader />,
            headerRight: () => <CustomSearchButton />,
            headerTintColor: white,
            headerTitleAlign: Platform.OS === 'ios' ? 'center' : 'left'
          }}
        />
        <Stack.Screen
          name={Routes.Details}
          component={BookDetails}
          options={{
            headerBackground: () => <CustomHeader />,
            headerLeft: (props) => <CustomBackButton {...props} />,
            headerTintColor: white,
            headerTitleAlign: Platform.OS === 'ios' ? 'center' : 'left'
          }}
        />
        <Stack.Screen
          name={Routes.Search}
          component={Search}
          options={{
            headerBackground: () => <CustomHeader />,
            headerLeft: (props) => <CustomBackButton {...props} />,
            headerTintColor: white,
            headerTitleAlign: Platform.OS === 'ios' ? 'center' : 'left'
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
