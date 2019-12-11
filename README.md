# _Biohack BaseLine_

#### _Test your Brain! {12/6/2019}_

#### By _**Devin Cooley**_

## Description

_The purpose of this application is to allow a user to define a baseline brain function level, then test their brain performance under different variable conditions. Users will be able to browse and compare all of their different tests or test groups._

## Specifications


* #### Authentication
| Spec                      |Input          | Output |
|:---------------------------|:-------------|:------|
|Users will be prompted to register or Login|`navigates to page`|Register or Login|
|User can register|`Register`|Please enter a new user name, email, and password|
|User can log in|`Log In`|Please enter a new user name and password|
|Logged in users will be allowed to view their content|`Log in Successful`| _Navigates to user dashboard.|

* #### Brain Performance testing
| Spec                      |Input          | Output |
|:---------------------------|:-------------|:------|
|User can initiate a new test|`New Test`|_Begins New Test script._|
|Modal should appear explaining the scientific process|_New test begins._|_Explanation modal appears._|
|User can input all data about control and test variables into a form|`Enters info`|_Test Scenario Saved_|
|Modal should appear explaining how the reaction time test will work|`Enters info`|_Modal appears._|
|User can click a start button to begin reaction time test|`Start`|_Reaction test begins._|
|Application displays instruction about which button to click and a series of buttons to choose from|_Reaction test begins_|_Instruction and buttons appear on screen_|
|Reaction time test should repeat 10 times|_Completes previous test._|_Next test begins._|
|Modal about memory testing should appear|_Finishes final reaction time test._|_Modal about memory testing appears._|
|User can click a start button to begin memory testing|
|Memory test should repeat 10 times.|_Completes previous test._|_Next test begins._|
|Upon completing final memory test, testing results are displayed|`Finish testing`|_Test data displayed for all 20 rounds of testing._|
|User can opt to save that test or discard it|`Save` or `Discard`|_Test is either saved or discarded._|

* #### Test Data
| Spec                      |Input          | Output |
|:---------------------------|:-------------|:------|
|Data page should show the user a list of all their previously taken tests|`Navigates to Data page.`|_List of all previously taken tests generates._|
|User can sort through test by their variable condition.|`Sort by variable`|_Displays all tests related to that variable._|
|User can set a certain test as their baseline 'Control' condition.|`Set this test as baseline.`|_Selected test in now the baseline test._|

* #### Statistics
| Spec                      |Input          | Output |
|:---------------------------|:-------------|:------|
|User can select a test or group of tests to compare to their baseline test.|`Selects test or group of tests.`|_Statistical comparison data is calculated and displayed._|



## Setup/Installation Requirements

## Known Bugs

_There are no known bugs at this time._

## Support and contact details

_Send any questions or comments to Devin Cooley at devincooley.dev@gmail.com._

## Technologies Used

_This application was written using JavaScript, HTML, and CSS. Packages manager with Node Package Manager. The front end of this application was written with React. Authorization and databasing was accomplished using FireBase._

### License

*This software is licensed under the MIT license.*

Copyright (c) 2019 **_Devin Cooley**
