//
//  VkSdkPlugin.h

#import <Cordova/CDV.h>
#import <VKontakte/VKSdk.h>

@interface VkSdkPlugin : CDVPlugin <VKSdkDelegate>
{
    NSString*     clientId;
}

@property (nonatomic, retain) NSString*     clientId;

- (void)initVkSdk:(CDVInvokedUrlCommand*)command;
- (void)login:(CDVInvokedUrlCommand*)command;
- (void)share:(CDVInvokedUrlCommand*)command;
- (void)logout:(CDVInvokedUrlCommand*)command;


@end
