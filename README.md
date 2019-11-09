# Default React-Native Template

## USE

> typescript, mobx, react-navigation@next, styled-components, react-native-vector-icons

```[bash]
# Module Download ( 모듈 다운로드 )
yarn
# IOS Pod Install ( IOS 사용 하는 Pod 다운로드 )
yarn pod
# Android Gradlew Clean ( Android Gradle Clean )
yarn clean:android
# Start Android ( with Metro ) ( Android 시작 )
yarn android
# Start IOS ( with Metro ) ( IOS 시작 )
yarn ios
# Metro Start ( Metro 시작 )
yarn start
# Android Production APK Build ( 안드로이드 서명 된 APK 제작 )
yarn build:android
```

## Memo

1. mobx5+(5 버전 이상) 에서는 android hermes 엔진이 아직 지원을 해주지 않아 hermes 엔진을 꺼두었습니다.
2. firebase의 경우 v6 이 나오면 추가할 예정입니다.
