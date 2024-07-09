exports.CartPage = class CartPage{


    constructor(page){
        this.page = page;
        this.CartListProducts = page.locator("(//button[@class='btn btn_secondary btn_small cart_button'])");
        this.continueShoppingBtn = page.locator("#continue-shopping");
        this.checkoutBtn = page.locator("#checkout");


        this.productList = "[class$='inventory_item_name ']"
        this.addToCartbtn = page.locator("#add-to-cart")
        this.cartContainer = page.locator('#shopping_cart_container');

    }

    async removeFirstFromCart(){
        const removeFirstProduct = this.CartListProducts.first();
        removeFirstProduct.click();

    }

    async goToCheckout(){
        await this.checkoutBtn.click();
    }

}