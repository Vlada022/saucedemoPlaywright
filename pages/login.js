exports.LoginPage = class LoginPage{

    constructor(page){
        this.page = page;
        this.username_textbox = page.locator('[id="user-name"]');
        this.password_textbox = page.locator('[id="password"]');
        this.login_button = page.locator('#login-button');
        this.popup_message = page.locator('#login_button_container > div > form > div.error-message-container.error > h3');

    }

    async gotoLoginPage(){
        await this.page.goto('https://www.saucedemo.com/');
    }


   async login(username, password){
    
    await this.username_textbox.fill(username);
    await this.password_textbox.fill(password);
    await this.login_button.click();

   }

   async logout(){
    await this.page.locator('[id="react-burger-menu-btn"]').click();
    await this.page.locator('[id="logout_sidebar_link"]').click();
    
   }
   async check_popup_login_message(){
    await expect(this.popup_message).toContainText(popup_text);


   }

}