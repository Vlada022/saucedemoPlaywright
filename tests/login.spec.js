import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login'


test('TC_1 Verify succesfull login with valid data', async ({ page }) => {

  const Login = new LoginPage(page);

  await Login.gotoLoginPage();
  await Login.login('standard_user','secret_sauce');

  //Assert
  await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");

  await Login.logout();



  
});

test('TC_2 Check login with invalid username & password', async ({ page }) => {

    const Login = new LoginPage(page);
  
    await Login.gotoLoginPage();
    await Login.login('user123','1123');

    const popup_message = page.locator('#login_button_container > div > form > div.error-message-container.error > h3');

    //Assert
    await expect(popup_message).toContainText('Epic sadface: Username and password do not match any user in this service');
    
  });

  test('TC_3 Check login with empty username & password', async ({ page }) => {

    const Login = new LoginPage(page);
  
    await Login.gotoLoginPage();
    await Login.login('','');

    const popup_message = page.locator('#login_button_container > div > form > div.error-message-container.error > h3');
    //Assert
    await expect(popup_message).toContainText('Epic sadface: Username is required');

  });

  test('TC_4 Check login with entering only username', async ({ page }) => {

    const Login = new LoginPage(page);
  
    await Login.gotoLoginPage();
    await Login.login('123','');

    const popup_message = page.locator('#login_button_container > div > form > div.error-message-container.error > h3');
    //Assert
    await expect(popup_message).toContainText('Epic sadface: Password is required');
    
  });

  test('TC_5 Check login with entering only password', async ({ page }) => {

    const Login = new LoginPage(page);
  
    await Login.gotoLoginPage();
    await Login.login('','123');
    const popup_message = page.locator('#login_button_container > div > form > div.error-message-container.error > h3');

    //Assert
    await expect(popup_message).toContainText('Epic sadface: Username is required');
    
  });