import HomePage from "./homePage.cy";

class AccountCreatedPage {

      #pageURL() {
            return cy.url();
      }

      #txtAccountCreated() {
            return cy.get('h2[data-qa="account-created"]');
      }

      #btnContinue() {
            return cy.get('a[data-qa="continue-button"]');
      }

      #txtSuccessMsg() {
            return cy.get('div').children().contains('successfully created');
      }

      verifyAccountCreatedPageUrl() {
            cy.fixture('url').then(url => {
                this.#pageURL().should('eq', url.accountCreatedPage);
            })
            return this
        }

      verifyAccountCreatedTxt() {
            this.#txtAccountCreated().should('have.text', 'Account Created!');
            return this;
      }

      verifyAccountCreatedSuccessMsg() {
            this.#txtSuccessMsg().should('have.text', 'Congratulations! Your new account has been successfully created!');
            cy.logger('application', 'Account deleted success msg appeared');
            return this;
      }

      clickContinueBtn() {
            this.#btnContinue()
                  .click();
            cy.logger('application', 'Continue button clicked');
            return new HomePage();
      }

}

export default AccountCreatedPage;