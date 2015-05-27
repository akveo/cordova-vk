/**
 * Created by vl on 19.5.15.
 */
function VkSdk() {
    // Does nothing
};
VkSdk.prototype.init = function(appId, successCallback, errorCallback) {

    var initializationError = false;

    cordova.exec(sdkListenerCallback, sdkListenerError, "VkSdk", "initVkSdk", [appId]);

    function sdkListenerCallback(result) {
        if (initializationError)
            return;

        if (result.eventType === 'initialized') {
            successCallback(result);
        } else {
            document.dispatchEvent(new CustomEvent('vkSdk.' + result.eventType, result.eventData));
        }
    }
    function sdkListenerError(err) {
        if (initializationError)
            return;

        if (err.code === 'initError') {
            initializationError = true;
            errorCallback && errorCallback(err);
        } else {
            document.dispatchEvent(new CustomEvent('vkSdk.error', err));
        }
    }
};

/**
 * Listen to 'vkSdk.newToken' event to catch successful login event
 * @param permissions
 */
VkSdk.prototype.initiateLogin = function(permissions) {
    cordova.exec(null, null, "VkSdk", "loginVkSdk", [permissions]);
};

/**
 * Debugging method to get the fingerprint of your application and put it in the field on application admin page
 * @param successCallback
 * @param errorCallback
 */
VkSdk.prototype.getFingerPrintVkSdk = function(successCallback, errorCallback) {
    cordova.exec(successCallback, errorCallback, "VkSdk", "getFingerPrintVkSdk", []);
};

VkSdk.prototype.logout = function(successCallback, errorCallback) {
    cordova.exec(successCallback, errorCallback, "VkSdk", "logout");
};

module.exports = new VkSdk();