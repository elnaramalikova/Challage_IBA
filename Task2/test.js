const { Builder, By, Key, util } = require('selenium-webdriver');
async function searchPage() {
    let driver = await new Builder().forBrowser('chrome').build();
    await driver.get('https://ibar.az/');
    await driver.findElement(By.xpath("//header/section[1]/div[1]/div[1]/div[3]/span[2]/div[1]/div[2]/span[1]")).click().then(function() {
        // driver.findElement(By.xpath("//header/section[1]/div[1]/div[1]/div[3]/span[2]/div[1]/div[3]/div[1]/ul[1]/li[1]")).click()
        // driver.findElement(By.xpath("//header/section[1]/div[1]/div[1]/div[3]/span[2]/div[1]/div[3]/div[1]/ul[1]/li[2]")).click()
        driver.findElement(By.xpath("//header/section[1]/div[1]/div[1]/div[3]/span[2]/div[1]/div[3]/div[1]/ul[1]/li[3]")).click()
    })

    await driver.sleep(100000)
}
searchPage();