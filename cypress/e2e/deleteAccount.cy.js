import HomePage from '../pages/homePage.cy';

let homePage = new HomePage();

beforeEach(() => {
  homePage.visitHomePage();
})

describe('Delete user', () => {

  it('Should successfully delete user', () => {
    homePage.clickSignupLoginBtn()
            .enterSignupName()
            .enterSignupEmail()
            .clickSigupBtn()
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
            .verifyAccountCreatedTxt()
            .verifyAccountCreatedSuccessMsg()
            .clickContinueBtn()
            .verifyHomePageUrl()
            .clickDeleteAccount()
            .verifyDeleteAccountPageUrl()
            .verifyAccountDeletedTxt()
            .verifyAccountDeletedSuccessMsg()
            .clickContinueBtn()
            .verifyHomePageUrl();
  })

})