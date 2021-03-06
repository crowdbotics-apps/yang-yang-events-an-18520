import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ArticleList73132Navigator from '../features/ArticleList73132/navigator';
import ArticleList73131Navigator from '../features/ArticleList73131/navigator';
import ArticleList73130Navigator from '../features/ArticleList73130/navigator';
import ArticleList73113Navigator from '../features/ArticleList73113/navigator';
import ArticleList73112Navigator from '../features/ArticleList73112/navigator';
import ArticleList73111Navigator from '../features/ArticleList73111/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import TutorialNavigator from '../features/Tutorial/navigator';
import MapsNavigator from '../features/Maps/navigator';
import CalendarNavigator from '../features/Calendar/navigator';
import CameraNavigator from '../features/Camera/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
ArticleList73132: { screen: ArticleList73132Navigator },
ArticleList73131: { screen: ArticleList73131Navigator },
ArticleList73130: { screen: ArticleList73130Navigator },
ArticleList73113: { screen: ArticleList73113Navigator },
ArticleList73112: { screen: ArticleList73112Navigator },
ArticleList73111: { screen: ArticleList73111Navigator },
Messenger: { screen: MessengerNavigator },
Tutorial: { screen: TutorialNavigator },
Maps: { screen: MapsNavigator },
Calendar: { screen: CalendarNavigator },
Camera: { screen: CameraNavigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
