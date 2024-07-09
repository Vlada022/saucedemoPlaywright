import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login'
import { HomePage } from '../pages/homepage';

test('Verify on homepage that image is visible (TASK 6)', async ({ page }) => {

  const Login = new LoginPage(page);

  await Login.gotoLoginPage();
  await Login.login('standard_user','secret_sauce');

  const Home = new HomePage(page);
  await expect(Home.listOfImages.first()).toBeVisible();

});