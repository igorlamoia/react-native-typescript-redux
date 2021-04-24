# Instructions for adding custom fonts to your app:

## Linking

1. Find a font in `TTF` format and put it in `./src/assets/fonts`. I left a custom font in the folder as an example.
2. Now run `npx react-native link`. This is still needed even in the version 0.64 of react-native, you only have to do this once though. Be aware that you'll need to remove fonts yourself later if you want to remove them from your app. This will add items to your xcode project and Info.plist file as well as putting some files in place for android to bundle (specifically, it will move the font files to `./android/app/src/main/assets/`).
3. iOS uses the family name like `{fontFamily: 'ShadowsIntoLight'}` whereas on android, you must include all the different variations of the font you will use and reference them by their filename. So I downloaded ShadowsIntoLight-Regular.ttf that means android must use `{fontFamily: 'ShadowsIntoLight-Regular'}` (case sentitive).
