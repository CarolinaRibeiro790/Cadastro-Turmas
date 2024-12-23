import { createNativeStackNavigator} from '@react-navigation/native-stack';

import {Groups} from '../../src/screens/Groups';
import {Players} from '../../src/screens/Players';
import {NewGroup} from '../../src/screens/NewGroup';

const {Navigator, Screen} = createNativeStackNavigator();

export function AppRoutes(){
    return(
        <Navigator screenOptions={{headerShown: false}}>
            <Screen
                name='groups'
                component={Groups}
            />

            <Screen
                name='new'
                component={NewGroup}
            />

            <Screen
                name='players'
                component={Players}
            />
        </Navigator>
    )
}