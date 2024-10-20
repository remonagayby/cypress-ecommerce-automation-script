import HomePage from '../pages/homePage.cy';

let homePage = new HomePage();

beforeEach(() => {
  homePage.visitHomePage();
})

describe('valid resgistration', () => {

  it('Should compelete a product purchase', () => {
    homePage.clickSignupLoginBtn()
            .enterSignupName()
            .enterSignupEmail()
            .clickSigupBtn()
            .selectTitle()
            .enterPassword()
            .selectRandomBirthDate()
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
            .verifyAccountCreatedTxt()
            .verifyAccountCreatedSuccessMsg()
            .clickContinueBtn()
            .verifyHomePageUrl();
  })

})