import { Given, When, Then } from '@cucumber/cucumber';

import homePage from '../pageobjects/goldenlayout.page';

Given(/^Golden Layout page is opened$/, async () => {
    await homePage.open();
});

Then(/^Page should be opened successfully$/, async () => {
    expect(homePage.btnLoadLayout).toBeDisplayed();
});

Given(/^I am on the golden layout page$/, async () => {
    expect(homePage.btnLoadLayout).toBeDisplayed();
});

When(/^I select "(.+?)" layout option from layout selector and load$/, async (layoutName) => {
    homePage.selectAndLoadLayout(layoutName);
});

Then(/^I should see standard layout loaded successfully$/, async () => {
    await (await homePage.getWidget('comp 3')).waitForExist();
    const comp3 = await homePage.getWidget('comp 3');
    expect(await comp3).toBeDisplayed();
});

Given(/^LexCorp tab is present on the page$/, async () => {
    expect(await homePage.getTab('LexCorp plc.')).toBeDisplayed();
});

When(/^I select Lexcorp tab$/, async () => {
    (await homePage.getTab('LexCorp plc.')).click();
});

//Verifying is tab is focused
Then(/^color of Lexcorp text should change to blue$/, async () => {
   const elementColor = (await homePage.getTab('LexCorp plc.'));
    expect (elementColor.getAttribute('class')).toHaveValue('lm_focused');
});


Given(/^I can see component selector and add component controls on page$/, async () => {
    expect(homePage.selectControl).toBeDisplayed();
    expect(homePage.btnAddComponent).toBeDisplayed();
});

When(/^I select event component and add component$/, async () => {
    homePage.selectAndAddComponent('event')
    await (await homePage.getWidget('event')).waitForExist();
});

When(/^I add data in the box and click on send event button$/, async () => {
    await (await homePage.txtEventData()).waitForExist();
    await (await homePage.txtEventData()).setValue('Test event 123');
    await (await homePage.btnSendEvent).click();
});

Then(/^The data should be sent to API and displayed in component$/, async () => {
    await (await homePage.lblEventData()).waitForExist();
    expect((await homePage.lblEventData()).getText()).toHaveValue('Received: foo,Test event 123');
});

Given(/^I have diferrent components available$/, async () => {
    const comp1 = await homePage.getWidget('comp 1');
    expect(await comp1).toBeDisplayed();
    const comp2 = await homePage.getWidget('comp 2');
    expect(await comp2).toBeDisplayed();
    const comp3 = await homePage.getWidget('comp 3');
    expect(await comp3).toBeDisplayed();
});

Then(/^Components should be closed successfully$/, async () => {
    const comp1 = await homePage.getWidget('comp 1');
    expect(await comp1).not.toBeDisplayed();  
    const comp2 = await homePage.getWidget('comp 2');
    expect(await comp2).not.toBeDisplayed();
    const comp3 = await homePage.getWidget('comp 3');
    expect(await comp3).not.toBeDisplayed();
});

When(/^I close the different components$/, async () => {
    const closeTab1 = await (await homePage.getTab('comp 1')).$('.lm_close_tab');
    closeTab1.click();
    await (await (await homePage.getTab('comp 1')).$('.lm_close_tab')).waitForExist();
    const closeTab12 = await (await homePage.getTab('comp 1')).$('.lm_close_tab');
    closeTab12.click();
    await (await (await homePage.getTab('comp 2')).$('.lm_close_tab')).waitForExist();
    const closeTab2 = await (await homePage.getTab('comp 2')).$('.lm_close_tab');
    closeTab2.click();
    await (await (await homePage.getTab('comp 3')).$('.lm_close_tab')).waitForExist();
    const closeTab3 = await (await homePage.getTab('comp 3')).$('.lm_close_tab');
    closeTab3.click();
});

Given(/^I see the Save Layout button present on my page$/, async () => {
    await (await homePage.btnSaveLayout).isDisplayed();
    await (await homePage.btnSaveLayout).isEnabled();
    expect (await homePage.btnReloadSavedLayout).toBeDisabled();
});

When(/^I click on Save Layout button$/, async () => {
    await (await homePage.btnSaveLayout).click();
});

Then(/^My layout should be saved successfully$/, async () => {
    expect (await homePage.btnReloadSavedLayout).toBeEnabled();
});

Then(/^There should not be any component on screen$/, async () => {
    //We will get 1 component back when we load component layout.
    await (await homePage.getWidget('Layout')).waitForExist();
    expect (await homePage.componentWindowLength()).toBe(1);
});
When(/^Total component count is more than one$/, async () => {
    expect (await homePage.componentWindowLength()).toBe(4);
});

Given(/^A layout is already saved on the page$/, async () => {
    expect (await homePage.btnReloadSavedLayout).toBeEnabled();
});


When(/^I click on reload layout button$/, async () => {
   await (await homePage.btnReloadSavedLayout).click()
});

Then(/^My saved layout should be reloaded successfully$/, async () => {
    await (await homePage.getWidget('event')).waitForExist();
    expect (await homePage.getWidget('event')).toBeDisplayed();
    expect (await homePage.getWidget('LexCorp plc.')).toBeDisplayed();
    expect (await homePage.componentWindowLength()).toBe(4);
});

Given(/^Event component is already present on layout loaded$/, async () => {
    expect (await homePage.getWidget('event')).toBeDisplayed();
});

// Comp 1 were already deleted in this layout hence moving Fnts 100 tab next to Acme
Given(/^Fnts 100 and Acme components are present on the page$/, async () => {
    expect (await homePage.getWidget('Fnts 100')).toBeDisplayed();
    expect (await homePage.getWidget('Acme, inc.')).toBeDisplayed();
});
When(/^I drag and drop Fnts 100 component next to Acme component$/, async () => {
    const sourceElement = await homePage.getTab('Fnts 100');
    const destElement = await homePage.getTab('LexCorp plc.');
    await sourceElement.dragAndDrop(destElement);
});
Then(/^It should be dropped successfully$/, async () => {
    expect (await homePage.getWidget('event')).toBeDisplayed();
});

