# React Native Basic Components

React Native provides several basic components that are essential for building mobile applications. Here are the fundamental components:

1. **View** - The most fundamental component, similar to a `div` in web development. It's a container that supports layout with flexbox, style, touch handling, and accessibility controls.

2. **Text** - Used to display text. All text elements must be wrapped in a `Text` component.

3. **Image** - For displaying images from various sources (local assets, network, temporary local images).

4. **TextInput** - Allows users to enter text. It's the basic building block for forms.

5. **ScrollView** - A scrollable container that can host multiple components and views.

6. **FlatList** - Optimized for rendering long lists of data that can change over time.

7. **TouchableOpacity**, **TouchableHighlight**, **Pressable** - Components that provide feedback when pressed. Used to create buttons and interactive elements.

8. **Button** - A simple button component with a title.

9. **Switch** - A controlled component that renders a boolean input.

10. **StatusBar** - Controls the app's status bar.

11. **ActivityIndicator** - Displays a spinning indicator to show that an operation is in progress.

12. **Modal** - A component that presents content above an app's main UI.

13. **SafeAreaView** - Automatically applies padding to account for the device's notch, status bar, etc.

14. **KeyboardAvoidingView** - Adjusts its height or position based on keyboard position to prevent the keyboard from covering inputs.

15. **StyleSheet** - Not a visual component, but a utility to create and manage styles.

Each of these components is imported directly from the 'react-native' package:

```javascript
import { 
  View, 
  Text, 
  Image, 
  TextInput, 
  Button,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Switch,
  ActivityIndicator
} from 'react-native';
```
