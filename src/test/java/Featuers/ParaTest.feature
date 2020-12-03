Feature: Testing login feature with parameter passing

  Scenario: Login gmail page with login credentials
    Given user navigate to gmail home page
    When login with "Sagar" and "password"
    And click on submit button
    Then user should login to home page

  Scenario: Login gmail page with login credentials with numeric
    Given user navigate to gmail home page
    When login with "Sagar" and 123
    And click on submit button
    Then user should login to home page

