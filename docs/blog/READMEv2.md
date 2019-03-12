# Flutter vs React Native
Flutter vs React Native comparison.



## Bridge

### React Native
JavaScript and native code communicate through a bridge which means that executing any heavier JavaScript code will result in overall app's FPS drop (making animations look janky).   
What you can do is writing dirty code to workaround / try to hide this but it always comes with a cost and never solves the real problem.

### Flutter
You don't have to worry about the bridge because there is no such in Flutter apps.
Every single line of Flutter app source is compiled to native code.



## Performance

### React Native
React Native's performance seems fragile. While it's good in very simple apps, writing more complex JavaScript working through the bridge will totally kill it. The bridge gets full very, very quickly.

### Flutter
Thanks to no bridge, Flutter guarantees stable 60 FPS and [even aiming for 120 FPS]()!



## UI Elements

### React Native
React Native provides couple very basic elements out of the box.   
The quality of the components made by community very differs.
For example, there's no single good TabBar component.
You also won't find stable and performant Navigation library.

### Flutter
Flutter provides lots of wonderful, official material components out of the box.   
There is also growing number of community packages.



## Navigation

### React Native
There is no single production-ready navigation library for React Native.   
React Navigation is written in JavaScript only and it clogs the bridge in any navigation action.   
There is no discussion about 60fps, or even 30fps. Very negative experience and the API is also not good.
Then we have Wix's native navigation.
It made me a very good first impression and I fell in love with this lib.
Very performant, fluid animations, etc but the more I played with it the more problems with it I found.   
From annoying flickers to [resetting all the styles]() after quitting and restoring the app.
React Native is simply immature and unacteptable for production apps.

### Flutter
You get Navigation out of the box plus you have very good community alternative.




## Production

### React Native
React is the best way to build UI's and that true. It's reusable and the code is very clean. I love writing React Native code and JavaScript.

### Flutter
Dart is more Java-like, it's a mix of Java and JavaScript. It is more verbose and harder to learn than JS.   
The advantage of Flutter when it comes to productivity, is much better cli, very good tooling, very good vs code support and the builds are much, much faster. Also building an apk is easier.



## App Size

### React Native
App size starts from 9mb and [XX]()mb with Expo apps.

### Flutter
Flutter app size starts from 5mb.



React Native will die.