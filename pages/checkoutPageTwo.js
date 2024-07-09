exports.CheckOutPageTwo = class CheckOutPageTwo{


    constructor(page){
        this.page = page;
        this.finishBtn = page.locator("#finish");
        this.itemTotal = page.locator();

        this.listOfAllitems = page.locator("div[class='cart_list'] > [class='cart_item'] >[class='cart_item_label'] [class='item_pricebar']");

    }

    async finishShoping(){
        this.finishBtn.click();
    }



    async gettotalPrice(){
        //Text of Item Total from Price Total column
        const itemTotal = await this.page.locator("#checkout_summary_container > div > div.summary_info > div.summary_subtotal_label").last().textContent();
        // Cutting text of item total-> leaving only digits
        var onlyDigitsItemTotal = itemTotal.replace("Item total: $", "")
        // Parse digits of item total into float(number with decimals)
        var itemTotalFloat= parseFloat(onlyDigitsItemTotal);
        console.log(itemTotalFloat);

    }

    

    

    async sumAllProductPrice(){

        const allItemPrice = this.listOfAllitems.allTextContents();
        var sum = 0;
        var arr = new Array();
        
            for (let i = 0; i < allItemPrice.length; i++) {
            var qw = allItemPrice[i];

            arr.push(parseFloat(qw.replace("$", "")));

            sum = sum + arr[i];
            }
            console.log("WTF IS SUM:" + sum);
        return sum;


        

       // await console.log(arr);
    //console.log(sum);

    }
    

}
