import HomePage from '../pages/homePage.cy';

let homePage = new HomePage();

beforeEach(() => {
  homePage.visitHomePage();
})

describe('valid resgistration', () => {

  it('Should signup successfully with valid credentials', () => {
    homePage.verifyHomePageUrl()
            .clickSignupLoginBtn()
            .verifyLoginPageUrl()
            .enterSignupName()
            .enterSignupEmail()
            .clickSigupBtn()
            .verifySignupPageUrl()
            .selectTitle()
            .enterPassword()
            .selectRandomBirthDay()
            .selectRandomBirthMonth()
            .selectRandomBirthYear()
            .checkForNewsLettersAndOffers()
            .enterFirstName()
            .enterLastName()
            .enterCompanyName()
            .enterAddress()
            .selectRandomCountry()
            .enterState()
            .enterCity()
            .enterZipCode()
            .enterMobileNumber()
            .clickCreateAccountBtn()
            .verifyAccountCreatedPageUrl()
            .verifyAccountCreatedTxt()
            .verifyAccountCreatedSuccessMsg()
            .clickContinueBtn()
            .verifyHomePageUrl();
  })

})