package com.stepdefnition;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class ParaSteps {
    @Given("^user navigate to gmail home page$")
    public void userNavigateToGmailHomePage() {
    }

    @When("^login with \"([^\"]*)\" and \"([^\"]*)\"$")
    public void loginWithAnd(String name, String pass) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        System.out.println(name + " "+ pass);
    }

    @And("^click on submit button$")
    public void clickOnSubmitButton() {
    }

    @Then("^user should login to home page$")
    public void userShouldLoginToHomePage() {
    }

    @When("^login with \"([^\"]*)\" and (\\d+)$")
    public void loginWithAnd(String name, int number) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        System.out.println(name + " "+ number);
    }
}
