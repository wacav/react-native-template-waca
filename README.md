# Default React-Native Template

## 제작

기존 React-Native 앱을 처음부터 다시 만들기 귀찮아, Default 세팅을 하나 만들어 해당 프로젝트로 부터 제작을 하려고 한다.

## USE DEPENDANCY

- react-native
- typescript
- mobx
- react-navigation@next
- styled-components
- react-native-vector-icons
- aes-js / buffer
- react-hook-form
- @react-native-community/async-storage
- jetifier
- react-native-permissions
- react-native-reanimated
- react-native-gesture-handler
- react-native-screens
- react-native-safe-area-context
- @react-native-community/masked-view

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

1. `src/config/index.template.ts` 를 복사하여 같은 Directory에 `index.ts` 파일로 바꾼 후 내부 세팅을 해주자.
2. mobx5+(5 버전 이상) 에서는 android hermes 엔진이 아직 지원을 해주지 않아 hermes 엔진을 꺼두었습니다.
3. firebase의 경우 v6 이 나오면 추가할 예정입니다.
