exports.CheckOutPageOne = class CheckOutPageOne{


    constructor(page){
        this.page = page;
        this.firstName = page.getByPlaceholder('First Name');
        this.lastName = page.getByPlaceholder('Last Name');
        this.zipCode = page.getByPlaceholder('Zip/Postal Code');
        this.continueBtn = page.locator("#continue");

    }


    async addInfoInCheckout(firstName,lastName,zipCode){
        await this.firstName.fill(firstName);
        await this.lastName.fill(lastName);
        await this.zipCode.fill(zipCode);
        await this.continueBtn.click()
    }

}
