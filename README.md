# Cordova VK social network plugin
cordova/phonegap adapter for vksdk. iOS 9 compatible

You can use this plugin to authenticate a user via VK application rather than via webview. It is made for using official VkSDKs for iOS and Android. 
This project is based on another github project https://github.com/DrMoriarty/cordova-social-vk . But Api was made a bit more generic to fit our needs.

## Installation and Setup
First, you need to create VK application on a developer page: https://vk.com/apps?act=manage

#### Android
```bash
cordova plugin add cordova-vk
```
Official VK documentation of how to setup and the app are located here: https://vk.com/dev/android_sdk . Fill in Fill in the "Batch name for Android", "Main Activity for Android" and "Certificate fingerprint for Android" fields. 
To generate fingerprint once android app is installed and running now, you can use `VkSdk.getFingerPrintVkSdk` method like this:
VkSdk.getFingerPrintVkSdk(function(fpt) { alert(fpt); });

#### iOS
```bash
cordova plugin add cordova-vk --variable VK_APP_ID=vk123456
```
Where **vk123456** is a unique identificator of your application, which you can see in your app settings: https://vk.com/editapp?id=123456 . Please note, that **vk** prefix should also be presented. This is needed to setup callback url scheme, so that VK application can open yours.

## Sample usage
Upon your application startup you need to call `VkSdk.init` method with your APP id as an argument.
```javascript
VkSdk.init('123456');
```
To initiate login process, you should call `VkSdk.initiateLogin` method:
```javascript
VkSdk.initiateLogin(['photos', 'offline']);
```

As per SDKs' architecture receiving token is an event, rather than a callback, you need to listen to `vkSdk.newToken` event to understand, when your user was logged in:
```javascript
document.addEventListener('vkSdk.newToken', function(token) {
  console.log('New token is ' + token);
});
```

## Important notes
Library is not complete. If you need bindings for some particular methods, create PRs or Issues. Thanks for your cooperation.

## License
MIT
