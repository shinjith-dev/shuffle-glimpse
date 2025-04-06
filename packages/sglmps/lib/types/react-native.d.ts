import "react-native";

declare module "react-native" {
  export interface PressableStateCallbackType {
    hovered?: boolean;
    focused?: boolean;
  }
}
