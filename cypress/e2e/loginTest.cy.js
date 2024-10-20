import HomePage from '../pages/homePage.cy';

let homePage = new HomePage();

beforeEach(() => {
      homePage.visitHomePage();
})

describe('Invalid login', () => {
      it('Should not login with invalid credentials', () => {
            homePage.verifyHomePageUrl()
                  .clickSignupLoginBtn()
                  .verifyLoginPageUrl()
                  .enterInvalidLoginEmail()
                  .enterInvalidLoginPassword()
                  .clickLoginBtn()
                  .verifyLoginErrorMsg()
                  .verifyLoginPageUrl();
      })
})

describe('Valid login', () => {
      it('Should login with valid credentials', () => {
            homePage.verifyHomePageUrl()
                  .clickSignupLoginBtn()
                  .verifyLoginPageUrl()
                  .enterValidLoginEmail()
                  .enterValidLoginPassword()
                  .clickLoginBtn();
            homePage.verifyHomePageUrl();
      })
})