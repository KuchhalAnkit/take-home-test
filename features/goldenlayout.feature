Feature: Test Goldden Layout Page

  Scenario:
    Given Golden Layout page is opened
    Then Page should be opened successfully

  Scenario: As a user, I can load standard layout

    Given I am on the golden layout page
    When I select "standard" layout option from layout selector and load
    Then I should see standard layout loaded successfully

  Scenario: As a user, I should be able to change color of a tab by selecting it

    Given LexCorp tab is present on the page
    When I select Lexcorp tab
    Then color of Lexcorp text should change to blue

  Scenario: As a user, I should be able to close any components

    Given I have diferrent components available
    When I close the different components
    Then Components should be closed successfully

  Scenario: As a user, I can add an event component and send data

    Given I can see component selector and add component controls on page
    When I select event component and add component
    And I add data in the box and click on send event button
    Then The data should be sent to API and displayed in component

  Scenario: As a user, I should be able to save my layout successfully

    Given I see the Save Layout button present on my page
    When I click on Save Layout button
    Then My layout should be saved successfully

  Scenario: As a user, I should be able to Load component layout suceessfully

    Given I am on the golden layout page
    When Total component count is more than one
    And I select "component" layout option from layout selector and load
    Then There should not be any component on screen

  Scenario: As a user, I should be able to reload saved layout successfully

    Given A layout is already saved on the page
    When I click on reload layout button
    Then My saved layout should be reloaded successfully

  Scenario: As a user, when I send an event in my saved layout then event should be triggered successfully

    Given Event component is already present on layout loaded
    When I add data in the box and click on send event button
    Then The data should be sent to API and displayed in component

  Scenario: As a user, I should be able to drag and drop components

    Given Fnts 100 and Acme components are present on the page
    When I drag and drop Fnts 100 component next to Acme component
    Then It should be dropped successfully