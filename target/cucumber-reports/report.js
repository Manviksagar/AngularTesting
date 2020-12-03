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
  "duration": 327400,
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
  "duration": 8884616700,
  "status": "passed"
});
formatter.match({
  "location": "OutTest.user_navigates_to_Login_Page()"
});
formatter.result({
  "duration": 1688226900,
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
  "duration": 2633103300,
  "status": "passed"
});
formatter.match({
  "location": "OutTest.success_message_is_displayed()"
});
formatter.result({
  "duration": 851993600,
  "status": "passed"
});
formatter.after({
  "duration": 69900,
  "status": "passed"
});
formatter.before({
  "duration": 78000,
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
  "duration": 6914291700,
  "status": "passed"
});
formatter.match({
  "location": "OutTest.user_navigates_to_Login_Page()"
});
formatter.result({
  "duration": 1585826400,
  "status": "passed"
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
  "duration": 2638931000,
  "status": "passed"
});
formatter.match({
  "location": "OutTest.success_message_is_displayed()"
});
formatter.result({
  "duration": 955967500,
  "status": "passed"
});
formatter.after({
  "duration": 38300,
  "status": "passed"
});
});