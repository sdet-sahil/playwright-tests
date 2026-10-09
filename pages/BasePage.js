export class BasePage {
    constructor(page, logger){
      this.page = page;
      this.logger = logger;
    }

    async getTitle(){
        const title = await this.page.getTitle();
        return title;
    }

    async goto(url){
        this.logger.info(`Navigating to ${url} page...` )
        await this.page.goto(url);
        await this.page.waitForLoadState('networkidle'); 
    }
}