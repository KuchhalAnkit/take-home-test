import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class GoldenLayoutPage extends Page {
    /**
     * define selectors using getter methods
     */
    get sectionControls () { return $('#controls') }
    get selectPredefinedLayout () { return $('#layoutSelect') }
    get btnLoadLayout () { return $('#loadLayoutButton') }
    get tabFnts100 () { return $('.lm_tab=Fnts 100') }
    /**
    * Load prededfined layouts 
    */
    load (layoutName: string) {
        this.selectPredefinedLayout.waitForExist();
	this.selectPredefinedLayout.selectByVisibleText(layoutName);
        this.btnLoadLayout.click();
    }
    
    getWidget(tabName: string) {
        //let widgetTab = $('.lm_tab=' + tabName);
        return $("//span[text()='" + tabName + "']/ancestor::div[@class='lm_item lm_stack']");
    }

    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open();
    }
}

export default new GoldenLayoutPage();
