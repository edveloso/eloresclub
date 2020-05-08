import { AppRegistry } from "react-native";
import Routes from "./Routes";
import { name as appName } from "./app.json";

AppRegistry.registerComponent(appName, () => Routes);