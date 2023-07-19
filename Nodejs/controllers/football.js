const Football = require("../models/football");
const sequelize = require("../data/db");

const { Builder, By, Key, until, Capabilities } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

exports.get_data = async function (req, res) {
  try {
    const options = new chrome.Options();
    options.addArguments('--headless');
    options.addArguments('--disable-gpu');
    options.addArguments('--disable-infobars');
    options.setUserPreferences({ 'excludeSwitches': ['enable-automation'] });

    const driver = new Builder()
      .forBrowser('chrome')
      .setChromeOptions(options)
      .setChromeService(new chrome.ServiceBuilder('C:\\Users\\Huseyin\\Desktop\\BetProject\\Nodejs\\node_modules\\chromedriver\\lib\\chromedriver\\chromedriver.exe')) 
      .build();

    const url = '*****************************';
    await driver.get(url);

    await driver.sleep(5000);

    const matchNames = await driver.findElements(By.className('matchName'));
    const codes = await driver.findElements(By.className('matchCode'));
    const dates = await driver.findElements(By.className('date'));
    const guesses = await driver.findElements(By.className('bet'));
    const bets = await driver.findElements(By.className('odd'));
    const rates = await driver.findElements(By.className('rate'));
    const playedCounts = await driver.findElements(By.className('playedCount'));

    const matchesData = [];
    for (let i = 0; i < matchNames.length; i++) {
      const matchName = await matchNames[i].getText();
      const code = await codes[i].getText();
      const date = await dates[i].getText();
      const guess = await guesses[i].getText();
      const bet = await bets[i].getText();
      const rate = await rates[i].getText();
      const playedCount = await playedCounts[i].getText();

      matchesData.push({
        matchname: matchName,
        code: code,
        date: date,
        guess: guess,
        bet: bet,
        rate: rate,
        played: playedCount
      });
    }

    for (const matchData of matchesData) {
      const existingMatch = await Football.findOne({
        where: {
          matchname: matchData.matchname,
          code: matchData.code,
          date: matchData.date,
        },
      });

      if (!existingMatch) {
        await Football.create(matchData);
      } else {
        
        const currentDate = new Date();
        const existingMatchDate = new Date(existingMatch.date);

        if (existingMatchDate < currentDate) {
          await Football.destroy({
            where: {
              id: existingMatch.id
            }
          });
        }
      }
    }

    await driver.quit();
  } catch (error) {
    console.log('Veri çekme işlemi sırasında bir hata oluştu:', error);
  }
};

exports.get_apidata = async function (req, res) {
  try {
    const data = await Football.findAll();
    res.json({ data });
  } catch (error) {
    console.log('Veri çekme işlemi sırasında bir hata oluştu:', error);
  }
};
