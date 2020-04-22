import 'react-native-gesture-handler';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Books from 'src/app/screens/Books';
import Routes from 'src/constants/routes';
import {Platform} from 'react-native';
import {white} from 'src/constants/colors';
import BookDetails from 'src/app/screens/BookDetails';
import CustomHeader from './components/CustomHeader';
import CustomBackButton from './components/CustomBackButton';

const Stack = createStackNavigator();

function LibraryStackScreen() {
  return (
    <Stack.Navigator initialRouteName={Routes.Library}>
      <Stack.Screen name={Routes.Library} component={Books} />
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
    </Stack.Navigator>
  );
}

export default LibraryStackScreen;