import CheckOutPage from "./checkoutPage.cy";

class CartPage {

    #pageURL() {
        return cy.url();
  }

    #productsTableList() {
        return cy.get('td[class="cart_product"]');
    }

    #btnCheckout() {
        return cy.get('a[class="btn btn-default check_out"]');
    }

    #txtCheckoutAlert() {
        return cy.get('.modal-content').children('.modal-body');
    }

    verifyCartPageUrl() {
        cy.fixture('url').then(url => {
            this.#pageURL().should('eq', url.cartPage);
        })
        return this
    }

    verifyItemsInCart() {
        this.#productsTableList()
            .its('length')
            .then((totalItems) => {
                cy.wrap(totalItems).should('eq', 2);
            });
        return this;    
    }

    clickCheckoutBtn() {
        this.#btnCheckout().click();
        return new CheckOutPage();
    }

    verifyUserShouldLoginMsg() {
        this.#txtCheckoutAlert().should('contain', 'Register / Login account to proceed on checkout.');
        return this;
    }
}

export default CartPage;
