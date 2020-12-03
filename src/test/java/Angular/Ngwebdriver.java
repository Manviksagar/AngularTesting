package Angular;

import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import com.paulhammant.ngwebdriver.ByAngular;
import com.paulhammant.ngwebdriver.NgWebDriver;

import java.util.concurrent.TimeUnit;


public class Ngwebdriver {
    public static void main(String[] args) throws InterruptedException {
        WebDriver driver=null;
        NgWebDriver ngDriver=null;
        WebDriverManager.chromedriver().setup();
        driver = new ChromeDriver();
        driver.get("http://www.way2automation.com/angularjs-protractor/banking/#/login");
        driver.manage().window().maximize();
        ngDriver = new NgWebDriver((JavascriptExecutor) driver);
        driver.manage().timeouts().implicitlyWait(1000, TimeUnit.SECONDS);
//click customer login button
        driver.findElement(By.cssSelector(".center:nth-child(1) > .btn")).click();
//click dropdown
        driver.findElement(By.id("userSelect")).click();
//select harry potter
        WebElement ele= driver.findElement(ByAngular.repeater("cust in Customers").xpath("//*[@id='userSelect']/option[3]"));
        ele.click();
//click login button
        driver.findElement(ByAngular.partialButtonText("Logi")).click();
//click drop number dropdown
        Thread.sleep(1000);
        driver.findElement(ByAngular.model("accountNo")).click();
        Thread.sleep(1000);
//select option 3 i.e 1006 using options locator
        driver.findElement(ByAngular.options("account for account in Accounts").xpath("//*[@id='accountSelect']/option[3]")).click();
        driver.findElement(ByAngular.model("accountNo")).click();
        driver.quit();
    }
}
