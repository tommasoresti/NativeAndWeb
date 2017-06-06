## About the Experiment ##

Sharing code between iOS, Android it's easy with React-Native. But what about a native app and a web app?

Whit this experiment i'm trying to separate all the business logic of a client app to just write twice the
layouts of our application, one for the native platform and one for the web.

Avoid to spend too much time studying the three platform folder [ios, android, web]

Focus on the **source** folder. It is divided in:
* **common**, reusable business logics and shared resources
* **native**, native components
* **web**, web components

## Requierements: ##

* **npm**

```
https://www.npmjs.com/get-npm
```


* **react-native-cli**:

```
npm install -g react-native-cli
```

* a **Mac** and **xCode** to run the **iOS project**
* **Android SDK** to run the **Android project**

## Startup: ##

Download project **dependencies** with npm. From the root directory type the command:

```
npm i
```

### iOS ###

```
npm run start
npm run ios-dev
```

### Android ###

```
npm run start
npm run ios-dev
```

### Web ###

```
npm run web-dev
```
