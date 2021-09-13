import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */

    get sectionControls() { return $('#controls') }
    get selectPredefinedLayout() { return $('#layoutSelect') }
    get btnLoadLayout() { return $('#loadLayoutButton') }

    get selectControl() { return $('#registeredComponentTypesForAddSelect') }
    get btnAddComponent() { return $('#addComponentButton') }
    get btnSendEvent() { return $("//button[text()='SEND EVENT']") }
    get btnSaveLayout() { return $("#saveLayoutButton")}
    get btnReloadSavedLayout() {return $("#reloadSavedLayoutButton") }


    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */



    async selectAndLoadLayout(layoutName: string) {
        await (await this.selectPredefinedLayout).waitForExist();
        await browser.pause(200);
        await (await this.selectPredefinedLayout).selectByVisibleText(layoutName);
        await (await this.btnLoadLayout).click();
    }

    async getWidget(tabName: string) {
        return $("//span[text()='" + tabName + "']/ancestor::div[@class='lm_item lm_stack']");
    }

    //async getTab(tabName: string) {
    //    return $("//span[text()='" + tabName + "']");
    //}

    async txtEventData() {
        return await (await this.btnSendEvent).previousElement();
    }
    async lblEventData() {
        return await (await this.btnSendEvent).nextElement();
    }

    async selectAndAddComponent(componentName: string) {
        await (await this.selectControl).waitForExist();
        await (await this.selectControl).selectByVisibleText(componentName);
        await (await this.btnAddComponent).click();
    }

    async getTab(tabName: string) {
        return $("//div[contains(@class,'lm_tab')][@title='" + tabName + "']");
    }

    async componentWindowLength () {
        return (await $$("//div[contains(@class,'lm_item lm_stack')]")).length;
    }

    /**
     * overwrite specifc options to adapt it to page object
     */
    open() {
        return super.open();
    }
}

export default new LoginPage();
