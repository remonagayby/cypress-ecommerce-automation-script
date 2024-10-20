import HomePage from "./homePage.cy";

class DeleteAccountPage {

      #pageURL() {
            return cy.url();
      }

      #txtAccountDeleted() {
            return cy.get('h2[data-qa="account-deleted"]');
      }

      #txtSuccessMsg() {
            return cy.get('div').children().contains('permanently deleted');
      }

      #btnContinue() {
            return cy.get('a[data-qa="continue-button"]');
      }

      verifyDeleteAccountPageUrl() {
            cy.fixture('url').then(url => {
                this.#pageURL().should('eq', url.deleteAccountPage);
            })
            return this
        }

      verifyAccountDeletedTxt() {
            this.#txtAccountDeleted().should('have.text', 'Account Deleted!');
            return this;
      }

      verifyAccountDeletedSuccessMsg() {
            this.#txtSuccessMsg().should('have.text', 'Your account has been permanently deleted!');
            cy.logger('application', 'Account deleted success msg appeared');
            return this;
      }

      clickContinueBtn() {
            this.#btnContinue().click();
            cy.logger('application', 'Continue button clicked');
            return new HomePage();
      }
      
}

export default DeleteAccountPage;