import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login'
import { HomePage } from '../pages/homepage';
import { CartPage } from '../pages/cartpage';
import { CheckOutPageOne } from '../pages/checkoutPageOne';
import { CheckOutPageTwo } from '../pages/checkoutPageTwo';

test('Exampleta', async ({ page }) => {

  const Login = new LoginPage(page);

  await Login.gotoLoginPage();
  await Login.login('standard_user','secret_sauce');



  //Home
  const home = new HomePage(page)

  await home.addTwoProductsToCart();
  await home.goToCart();
  //await home.addProductToCart("Sauce Labs Backpack");

 // await page.locator("#back-to-products").click();
 // await home.addProductToCart("Sauce Labs Bike Light");
  
  //await home.goToCart();


  //CartPage
  const cartpage = new CartPage(page)
  await cartpage.goToCheckout();


  
  const checkoutpageone = new CheckOutPageOne(page)
  await checkoutpageone.addInfoInCheckout("Vladimir","Perisic","22000");
  //await cartpage.login('standard_user','secret_sauce');
  const checkoutpagetwo = new CheckOutPageTwo(page)

  console.log("proba123123");
  console.log(checkoutpagetwo.sumAllProductPrice());
  console.log("proba123123");
  
  
 //console.log(await page.locator("#checkout_summary_container > div > div.summary_info > div.summary_subtotal_label").last().textContent());
 // console.log(await page.textContent("#checkout_summary_container > div > div.summary_info > div.summary_subtotal_label"));

 const iii = await page.locator("#checkout_summary_container > div > div.summary_info > div.summary_subtotal_label").last().textContent();
 // console.log(await page.locator("div[class='cart_list'] > [class='cart_item'] >[class='cart_item_label'] [class='item_pricebar']").allTextContents());
 var iii2 = iii!.replace("Item total: $", "")
 console.log(iii2);

 var wq2 = parseFloat(iii2);
 console.log(wq2);

  // Izvlacenje liste price-va
  const re1 = await page.locator("div[class='cart_list'] > [class='cart_item'] >[class='cart_item_label'] [class='item_pricebar']").allTextContents();
  const re2 = re1[1];
  //console.log(re2);
  // Sklanjanje $  simbola
  var str = re2;
  var res = str.replace("$", ""); // Output: "ello World!"
  //console.log(res);
  // Pretvaranje u float
 // var ir = parseFloat(res);
 // console.log(ir);

//---------------------------------------
var arr = new Array();
var sum = 0;
for (let i = 0; i < re1.length; i++) {
  var qw = re1[i];

  arr.push(parseFloat(qw.replace("$", "")));

  sum = sum + arr[i];
}

checkoutpagetwo.gettotalPrice();
console.log("WWAAWAWWAWW");
const www = checkoutpagetwo.gettotalPrice();
console.log(www);
console.log("SDDSDSDSD");

await console.log(arr);
console.log(sum);


// re1.forEach((el1) => 
//   var qw1 = parseFloat(el1.replace("$",""));
//   //console.log(parseFloat(el1.replace("$","")))

//   arr.push(parseFloat(el1.replace("$","")))
// // or var arr = [];



// let i = 0;

// while (i < re1.length) {
//     var rew2 = re1[i].replace("$", "");
//     console.log(re1[i]);
//     i++;
// }

await expect(wq2).toBe(45.98);

console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");



// all prices -> div[class='cart_list'] > [class='cart_item'] >[class='cart_item_label'] [class='item_pricebar']
  page.pause();
  
});
