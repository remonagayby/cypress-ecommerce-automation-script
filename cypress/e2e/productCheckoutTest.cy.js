import HomePage from '../pages/homePage.cy';
import CartPage from '../pages/cartPage.cy';

let homePage = new HomePage();
let cartPage = new CartPage();

beforeEach(() => {
  homePage.visitHomePage();
})

describe('Valid product checkout', () => {

  it('Should compelete a product purchase after valid registration', () => {
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
            .addRandomProductToCart()
            .clickContinueShopping()
            .addRandomProductToCart()
            .clickViewCart()
            .verifyCartPageUrl()
            .verifyItemsInCart()
            .clickCheckoutBtn()
            .verifyCheckOutPageUrl()
            .verifyItemsTotalPrice()
            .clickPlaceOrderBtn()
            .verifyPaymentPageUrl()
            .enterCreditCardName()
            .enterCreditCardNumber()
            .enterCreditCardCvv()
            .enterCardExpirationMonth()
            .enterCardExpirationYear()
            .clickConfirmBtn()
            .verifyPaymentConfirmationPageUrl()
            .verifyConfirmationMsg()
            .verifyOrderPlacedHeader()
            .clickContinueBtn()
            .verifyHomePageUrl();
  })

  it('Should compelete a product purchase after valid login', () => {
    homePage.verifyHomePageUrl()
            .clickSignupLoginBtn()
            .verifyLoginPageUrl()
            .enterValidLoginEmail()
            .enterValidLoginPassword()
            .clickLoginBtn();
    homePage.verifyHomePageUrl()
            .addRandomProductToCart()
            .clickContinueShopping()
            .addRandomProductToCart()
            .clickViewCart()
            .verifyCartPageUrl()
            .verifyItemsInCart()
            .clickCheckoutBtn()
            .verifyCheckOutPageUrl()
            .verifyItemsTotalPrice()
            .clickPlaceOrderBtn()
            .verifyPaymentPageUrl()
            .enterCreditCardName()
            .enterCreditCardNumber()
            .enterCreditCardCvv()
            .enterCardExpirationMonth()
            .enterCardExpirationYear()
            .clickConfirmBtn()
            .verifyPaymentConfirmationPageUrl()
            .verifyConfirmationMsg()
            .verifyOrderPlacedHeader()
            .clickContinueBtn()
            .verifyHomePageUrl();
  })

  describe('Invalid product checkout', () => {
    it('Should not compelete a product purchase if user is not logged in', () => {
        homePage.verifyHomePageUrl()
                .addRandomProductToCart()
                .clickContinueShopping()
                .addRandomProductToCart()
                .clickViewCart()
                .verifyCartPageUrl()
                .verifyItemsInCart()
                .clickCheckoutBtn();
        cartPage.verifyUserShouldLoginMsg();
    })
})

})