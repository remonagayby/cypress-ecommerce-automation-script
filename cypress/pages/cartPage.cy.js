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
                cy.wrap(totalItems).should('be.visible');
            });
    }

    clickCheckoutBtn() {
        this.#btnCheckout().click();
        return new CheckOutPage();
    }
}

export default CartPage;
