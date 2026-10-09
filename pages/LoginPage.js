import { BasePage } from "./BasePage";
import { HomePage } from "./HomePage";

export class LoginPage extends BasePage {
    constructor(page, logger) {
        super(page, logger);
        this.emailInput = page.getByLabel('Email');
        this.passwordInput = page.getByLabel('Password');
        this.loginButton = page.getByRole('button', {name : 'Log in'});
    }


    async login(email, password){
        this.logger.info('Login action started...');
        try{
        await this.emailInput.pressSequentially(email, {delay: 100});
        await this.passwordInput.pressSequentially(password, {delay: 100});
        await this.loginButton.click();
        this.logger.info('Login form submitted...');
        return new HomePage(this.page, this.logger);
        } catch(error){
           this.logger.error({url : this.page.url(), err : error}, 'Login action failed'); 
           throw new Error(`Login action failed ${this.page.url()}`, {cause: error});
        }
    }

}