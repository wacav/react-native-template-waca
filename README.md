> # React Native Template With Typescript
>
> made by wacav

---

## Module Download

**Common**

```bash
# yarn
yarn
# npm
npm install
```

**Android**

```bash
# Not Thing
```

**IOS**

```bash
# yarn
yarn pod
# npm
npm run pod-i
```

---

## APP SETTING

### Android Change Package

1. **AndroidManifest.xml** `<manifest xmlns:android="http://schemas.android.com/apk/res/android" package="`**`<CHANGE PACKAGE NAME>`**`>`
2. Package Folder name Change `**com/tempapp/** MainActivity.java`
3. **app/build.gradle** `defaultConfig { applicationId`**`"<CHNAGE PACKAGE NAME>"`**`}`
4. Chnage JAVA File `package`**`<CHNAGE PACKAGE NAME>`**

### IOS Chnage BundleIdentifier

1. Project > General > Identity > Bundle Identifier

### Change Display App Name

1. `/app.json` Chnage **displayName**
2. **IOS** Goto `/ios/<AppName>/info.plist` and Edit **`CFBundleName`**
3. **Android** `/android/app/src/main/res/values/strings.xml` Change `<string name="app_name">`**`<APP NAME>`**`</string>`

## Change Project Name

```bash

###################
# Run choose one
###################

# npx
npx react-native-rename <Project Name>

# yarn
yarn rename <Project Name>

# npm
npm run rename <Project Name>
```

---

## Main module version

```json
{
  "dependencies": {
    "react-native": "0.63.1",
    "react": "16.13.1",
    "axios": "^0.19.2",
    "react-native-vector-icons": "^7.0.0",
    "styled-components": "5.1.1"
  },
  "devDependencies": {
    "@babel/core": "^7.10.5",
    "eslint": "^7.4.0",
    "jest": "^26.1.0",
    "prettier": "^2.0.5",
    "typescript": "^3.9.6"
  }
}
```
