Feature: Testing Back ground feature for login feature

  Background:
    Given user is on LandingPage
    When    user navigates to LandingPage Page


  @Smoke
  Scenario Outline: Login as a authenticated user with valid username and Password
    And    user enters <username> and <Password>
    Then    success message is populated

    Examples:
      | username                | Password      |
      | blog.cucumber@gmail.com | Cucumber@blog |
      | blog.cucumber@gmail.com | Cucumber@blog |

  Scenario Outline: Login as a authenticated user with valid username and Password with BG
    And    user enters <username> and <Password>
    Then    success message is populated


    Examples:
      | username                | Password      |
      | blog.cucumber@gmail.com | Cucumber@blog |

