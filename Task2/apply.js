const { Builder, By, Key, util } = require('selenium-webdriver');
async function applyOnline() {
    let driver = await new Builder().forBrowser('chrome').build();
    await driver.get('https://ibar.az/');
    await driver.sleep(6000);
    await driver.findElement(By.xpath("//a[contains(text(),'Onlayn müraciət et')]")).click();
    await driver.sleep(6000);
    // console.log("dcyjvj")
    await driver.findElement(By.xpath("//span[contains(text(),'Göndər')]")).click();
    let fullname = driver.findElement(By.name('fullname'));
    let display = fullname.findElement(By.name('fullname')).isDisplayed();
    //await driver.sleep(10000);
    console.log("AAAAAAAAA");
    if (display !== true) {
        console.log("YES")
    } else {
        console.log("NO")
    }
}
applyOnline();