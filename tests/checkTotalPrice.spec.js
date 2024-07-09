import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login'
import { HomePage } from '../pages/homepage';
import { CartPage } from '../pages/cartpage';
import { CheckOutPageOne } from '../pages/checkoutPageOne';
import { CheckOutPageTwo } from '../pages/checkoutPageTwo';

test.only('Verify correct sum for all products in cart (TASK 5)', async ({ page }) => {

  //Login
  const Login = new LoginPage(page);
  await Login.gotoLoginPage();
  await Login.login('standard_user','secret_sauce');
  //Home
  const home = new HomePage(page)
  await home.addTwoProductsToCart();
  await home.goToCart();
  //CartPage
  const cartpage = new CartPage(page)
  await cartpage.goToCheckout();


  //First page on checkout
  const checkoutpageone = new CheckOutPageOne(page)
  await checkoutpageone.addInfoInCheckout("Vladimir","Perisic","22000");

  //Second page on checkout
  const checkoutpagetwo = new CheckOutPageTwo(page)
  
  //Text of Item Total from Price Total column
 const itemTotal = await page.locator("#checkout_summary_container > div > div.summary_info > div.summary_subtotal_label").last().textContent();
 // Cutting text of item total-> leaving only digits
 var onlyDigitsItemTotal = itemTotal.replace("Item total: $", "")
 // Parse digits of item total into float(number with decimals)
 var itemTotalFloat= parseFloat(onlyDigitsItemTotal);

  // Array of all prices in cart
  const arrayAllPrices = await page.locator("div[class='cart_list'] > [class='cart_item'] >[class='cart_item_label'] [class='item_pricebar']").allTextContents();

  //Initialize array to push newly created float prices in for loop
var arr = new Array();
//Starting value of summarize 
var sumAllProducts = 0;
for (let i = 0; i < arrayAllPrices.length; i++) {
    //Iterate trough all prices with indexing
  var allPricesIterator = arrayAllPrices[i];
    //Remove $ from Prices and parse it to Float number (with decimals)
  arr.push(parseFloat(allPricesIterator.replace("$", "")));
// Summarize all product prices
  sumAllProducts = sumAllProducts + arr[i];
}
// Assertation Checking if summarize is matching Total Item Cost
await expect(itemTotalFloat).toBe(sumAllProducts);
  
});
