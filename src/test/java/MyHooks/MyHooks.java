package MyHooks;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;

import java.sql.SQLOutput;

public class MyHooks {


    @Before
    public void setUp(Scenario sc){


        System.out.println("Setup method from Hooks");
        System.out.println(sc.getName());
    }

    @After
    public void tearDown(){
        System.out.println("Tear Down method from Hooks");
    }
}
