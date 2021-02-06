import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Web from './Web'
import MainScreen from './MainScreen'
const appNavigator=createStackNavigator({
    Home:{
        screen:MainScreen,
        navigationOptions:{
            headerShown:false
        }
    },
    Detail : {
        screen:Web,
        navigationOptions:{
                headerShown:false
            }
        
    },
})
export default AppContainer = createAppContainer(appNavigator);