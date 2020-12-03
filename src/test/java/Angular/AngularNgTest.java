package Angular;


import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import com.paulhammant.ngwebdriver.ByAngular;
import com.paulhammant.ngwebdriver.NgWebDriver;


public class AngularNgTest {
    public static NgWebDriver ngDriver;

    public static void main(String[] args) throws InterruptedException {

        //System.setProperty("webdriver.chrome.driver", "C:\\Automation\\chromedriver_win32_2\\chromedriver.exe");
        WebDriverManager.chromedriver().setup();
        WebDriver driver = new ChromeDriver();
        driver.get("http://juliemr.github.io/protractor-demo/");
        ngDriver = new NgWebDriver((JavascriptExecutor) driver);
        ngDriver.waitForAngularRequestsToFinish();
        driver.findElement(ByAngular.model("first")).sendKeys("2");
        driver.findElement(ByAngular.model("second")).sendKeys("2");
        driver.findElement(ByAngular.buttonText("Go!")).click();
        Thread.sleep(3000);
        driver.quit();

    }
}
