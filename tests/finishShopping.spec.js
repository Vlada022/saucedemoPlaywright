import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login'
import { HomePage } from '../pages/homepage';
import { CartPage } from '../pages/cartpage';
import { CheckOutPageOne } from '../pages/checkoutPageOne';
import { CheckOutPageTwo } from '../pages/checkoutPageTwo';

test('Verify successfully finished ordering (TASK 2)', async ({ page }) => {

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
  //Checkout Page One
  const checkoutpageone = new CheckOutPageOne(page)
  await checkoutpageone.addInfoInCheckout("Vladimir","Perisic","22000");
  //Checkout Page Two
  const checkoutpagetwo = new CheckOutPageTwo(page)
  checkoutpagetwo.finishShoping();
  //Assertation for succesfully ordered
  await expect(page.getByText('Thank you for your order!')).toBeVisible();
  //Back to homepage
  await page.locator("#back-to-products").click();
  
});
