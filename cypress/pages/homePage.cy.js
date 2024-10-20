import LoginPage from "./loginPage.cy";
import DeleteAccountPage from "./deleteAccountPage.cy";
import CartPage from "./cartPage.cy"

class HomePage {

    visitHomePage() {
        cy.visit("/");
        cy.clearCookies();
        cy.clearLocalStorage();
        return this;
    }

    #pageURL() {
        return cy.url();
  }

    #lnkSignupLogin() {
        return cy.get('a[href="/login"]');
    }

    #lnkLogout() {
        return cy.get('a[href="/logout"]');
    }

    #lnkDeleteAccount() {
        return cy.get('a[href="/delete_account"]');
    }

    #lnkLoginAs() {
        return cy.get('.fa.fa-user');
    }

    #productsList() {
        return cy.get('div[class="productinfo text-center"]:visible');
    }

    #btnAddToCart() {
        return this.#productsList().find('.btn-default.add-to-cart:visible');
    }

    #lnkViewCart() {
        return cy.get('a[href="/view_cart"]').parent('.text-center');
    }

    #btnContinueShopping() {
        return cy.get('.btn-success.close-modal');
    }

    #txtSuccessAddCart() {
        return cy.get('.modal-title.w-100');
    }

    verifyHomePageUrl() {
        cy.fixture('url').then(url => {
            this.#pageURL().should('eq', url.homePage);
        })
        return this
    }

    clickSignupLoginBtn() {
        this.#lnkSignupLogin().click()
        return new LoginPage();
    }

    clickLogoutBtn() {
        this.#lnkLogout().click();
        return this;
    }

    clickDeleteAccount() {
        this.#lnkDeleteAccount().click();
        return new DeleteAccountPage();
    }

    clickContinueShopping() {
        this.#btnContinueShopping().click();
        return this;
    }

    clickViewCart() {
        this.#lnkViewCart().click();
        return new CartPage();
    }

    verifySuccessAddToCartMsg() {
        this.#txtSuccessAddCart()
            .should('have.text', 'Added!');
        return this;
    }

    addRandomProductToCart() {
        this.#productsList()
        .its("length")
        .then((numItems) => {
            let randomIndex = Math.floor(Math.random() * numItems);;
            this.#btnAddToCart().eq(randomIndex).click();
        })
    return this;
    }
    
}

export default HomePage;