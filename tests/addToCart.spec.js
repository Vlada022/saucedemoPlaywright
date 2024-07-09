import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login'
import { HomePage } from '../pages/homepage';
import { CartPage } from '../pages/cartpage';

test('Verify succesfull adding product to cart (Task 3 in file)', async ({ page }) => {

  const Login = new LoginPage(page);

  await Login.gotoLoginPage();
  await Login.login('standard_user','secret_sauce');

  //Home
  const home = new HomePage(page)
  await home.addProductToCart("Sauce Labs Backpack");
  await home.goToCart();
  //Assert
  await expect(page.locator("[class= 'inventory_item_name']")).toBeVisible();


  
});

test('Verify removing item from cart( Task 4 in file)', async ({ page }) => {
    
    //Login
    const Login = new LoginPage(page);
    await Login.gotoLoginPage();
    await Login.login('standard_user','secret_sauce');
    //Home
    const home = new HomePage(page)
    await home.addProductToCart("Sauce Labs Backpack");
    await home.goToCart();
    

    //Cart Page
    const Cartpage = new CartPage(page)
    await Cartpage.removeFirstFromCart();
    //Assert
    await expect(page.locator("#cart_contents_container > div > div.cart_list > div.removed_cart_item")).toBeHidden();
});