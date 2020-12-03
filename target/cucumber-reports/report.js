$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Background.feature");
formatter.feature({
  "line": 1,
  "name": "Testing Back ground feature for login feature",
  "description": "",
  "id": "testing-back-ground-feature-for-login-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 9,
  "name": "Login as a authenticated user with valid username and Password",
  "description": "",
  "id": "testing-back-ground-feature-for-login-feature;login-as-a-authenticated-user-with-valid-username-and-password",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 8,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "user enters \u003cusername\u003e and \u003cPassword\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "success message is populated",
  "keyword": "Then "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "testing-back-ground-feature-for-login-feature;login-as-a-authenticated-user-with-valid-username-and-password;",
  "rows": [
    {
      "cells": [
        "username",
        "Password"
      ],
      "line": 14,
      "id": "testing-back-ground-feature-for-login-feature;login-as-a-authenticated-user-with-valid-username-and-password;;1"
    },
    {
      "cells": [
        "blog.cucumber@gmail.com",
        "Cucumber@blog"
      ],
      "line": 15,
      "id": "testing-back-ground-feature-for-login-feature;login-as-a-authenticated-user-with-valid-username-and-password;;2"
    },
    {
      "cells": [
        "blog.cucumber@gmail.com",
        "Cucumber@blog"
      ],
      "line": 16,
      "id": "testing-back-ground-feature-for-login-feature;login-as-a-authenticated-user-with-valid-username-and-password;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 163900,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "user is on LandingPage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user navigates to LandingPage Page",
  "keyword": "When "
});
formatter.match({
  "location": "OutTest.user_is_on_homepage()"
});
formatter.result({
  "duration": 8345638500,
  "status": "passed"
});
formatter.match({
  "location": "OutTest.user_navigates_to_Login_Page()"
});
formatter.result({
  "duration": 2904883600,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Login as a authenticated user with valid username and Password",
  "description": "",
  "id": "testing-back-ground-feature-for-login-feature;login-as-a-authenticated-user-with-valid-username-and-password;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 8,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "user enters blog.cucumber@gmail.com and Cucumber@blog",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "success message is populated",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "blog.cucumber@gmail.com",
      "offset": 12
    },
    {
      "val": "Cucumber@blog",
      "offset": 40
    }
  ],
  "location": "OutTest.user_enters_username_and_Password(String,String)"
});
formatter.result({
  "duration": 691848000,
  "status": "passed"
});
formatter.match({
  "location": "OutTest.success_message_is_displayed()"
});
formatter.result({
  "duration": 2070715200,
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d87.0.4280.88)\nBuild info: version: \u00273.7.0\u0027, revision: \u00272321c73\u0027, time: \u00272017-11-02T22:22:35.584Z\u0027\nSystem info: host: \u0027WINVA185060-0WA\u0027, ip: \u0027192.168.56.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_74\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 87.0.4280.88, chrome: {chromedriverVersion: 87.0.4280.88 (89e2380a3e36c..., userDataDir: C:\\Users\\Va185060\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:58904}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 05e06ae0db4142e9616b13c97bc14d2f\n*** Element info: {Using\u003dcss selector, value\u003d.info-account}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:600)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:370)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:464)\r\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:430)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:362)\r\n\tat com.stepdefnition.OutTest.success_message_is_displayed(OutTest.java:44)\r\n\tat ✽.Then success message is populated(Background.feature:11)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 59300,
  "status": "passed"
});
formatter.before({
  "duration": 52000,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "user is on LandingPage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user navigates to LandingPage Page",
  "keyword": "When "
});
formatter.match({
  "location": "OutTest.user_is_on_homepage()"
});
formatter.result({
  "duration": 5883812600,
  "status": "passed"
});
formatter.match({
  "location": "OutTest.user_navigates_to_Login_Page()"
});
formatter.result({
  "duration": 13469400,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d87.0.4280.88)\nBuild info: version: \u00273.7.0\u0027, revision: \u00272321c73\u0027, time: \u00272017-11-02T22:22:35.584Z\u0027\nSystem info: host: \u0027WINVA185060-0WA\u0027, ip: \u0027192.168.56.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_74\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 87.0.4280.88, chrome: {chromedriverVersion: 87.0.4280.88 (89e2380a3e36c..., userDataDir: C:\\Users\\Va185060\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:58960}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 854719aca680a9dc95aec56d0e81ed77\n*** Element info: {Using\u003dlink text, value\u003dSign in}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:600)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:370)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByLinkText(RemoteWebDriver.java:424)\r\n\tat org.openqa.selenium.By$ByLinkText.findElement(By.java:246)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:362)\r\n\tat com.stepdefnition.OutTest.user_navigates_to_Login_Page(OutTest.java:29)\r\n\tat ✽.When user navigates to LandingPage Page(Background.feature:5)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 16,
  "name": "Login as a authenticated user with valid username and Password",
  "description": "",
  "id": "testing-back-ground-feature-for-login-feature;login-as-a-authenticated-user-with-valid-username-and-password;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 8,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "user enters blog.cucumber@gmail.com and Cucumber@blog",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "success message is populated",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "blog.cucumber@gmail.com",
      "offset": 12
    },
    {
      "val": "Cucumber@blog",
      "offset": 40
    }
  ],
  "location": "OutTest.user_enters_username_and_Password(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "OutTest.success_message_is_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 113600,
  "status": "passed"
});
});