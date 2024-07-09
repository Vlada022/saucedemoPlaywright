exports.HomePage = class HomePage{


    constructor(page){
        this.page = page;
        this.productList = "[class$='inventory_item_name ']"
        this.addToCartbtn = page.locator("#add-to-cart")
        this.cartContainer = page.locator('#shopping_cart_container');
        this.listOfImages = page.locator("(//div[@class='inventory_item_img'])");

        this.secondProduct = page.locator("(//button[@class='btn btn_primary btn_small btn_inventory '])[2]");
        this.firstProduct = page.locator("(//button[@class='btn btn_primary btn_small btn_inventory '])[1]");
        

        //#add-to-cart

       // this.username_textbox = page.locator('[id="user-name"]');
       // this.password_textbox = page.locator('[id="password"]');
    }

    async addProductToCart(productName){

        const productList = await this.page.$$(this.productList);
        for (const product of productList){
            if (productName === await product.textContent()){
                await product.click()
                break;
            }
            
        }
        await this.addToCartbtn.click();
    }

    async goToCart(){
        await this.cartContainer.click();
    }

    async addTwoProductsToCart(){
        await this.firstProduct.click();
        await this.secondProduct.click();
    }


}