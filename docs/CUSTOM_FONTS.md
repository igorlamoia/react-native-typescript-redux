# Instructions for adding custom fonts to your app:

## Linking

1. Find a font in `TTF` format and put it in `./src/assets/fonts`. I left a custom font in the folder as an example.
2. Now run `npx react-native link`. This is still needed even in the version 0.64 of react-native, you only have to do this once though. Be aware that you'll need to remove fonts yourself later if you want to remove them from your app. This will add items to your xcode project and Info.plist file as well as putting some files in place for android to bundle.
3. I downloaded Montserrat-Regular.ttf, on iOS you can use the family name like `{ fontFamily: 'MontserratRegular' }`.
   On android though, you must include all the different fonts by their filename. That means you must type the exact name of the file: `{ fontFamily: 'Montserrat-Regular' }` (case sentitive).
