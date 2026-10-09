import { BasePage } from "./BasePage";
export class HomePage extends BasePage {
    constructor(page, logger) {
        super(page, logger);
    }

    getTab(tabName) {
      return this.page.getByRole('link', { name: tabName });
    }

    async navigateTo(tabName){
        this.logger.info(`Navigating from home page to ${tabName} page.`);
         await this.getTab(tabName).click();
    }


}