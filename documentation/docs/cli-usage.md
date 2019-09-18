---
id: cli-usage
title: Usage
sidebar_label: Usage
---


After starting, an interactive menu will let you configure the component to be created. Firstly, you'll be asked for the type of the component whether it's a page, functional component or class component. Then you'll be prompted with the other options relevant to your selection of the component type.

For example, let's go through the steps of the creation of a new page component.

>Enter page name

- Enter the desired filename for the page. *Spaces are not allowed!*
- The tool will check for the existing filenames in the project and reject if finds any.
- The interface files are going to be created under Interfaces/Pages directory.

>Do you want to add custom route or use default route name?,

- You can define custom route for page which is specified in app/routes.js
- It will set filename as a route if you don't want to add custom route.

>Do you want to have a connection to store?

If you choose yes, the following store connection methods and imports will be generated:

- mapStateToProps & mapDispatchToProps methods and appropriate imports in page component file,
- An action file in the Actions folder,
- An action constants in Definitions/ActionConsts.ts,
- An action file into Actions/index.ts,
- A Store interface file.

>Do you want to create a new reducer or use your own?

- If you choose yes, a new reducer file for page will be created in src/Redux/Reducers directory and combineReducers will be added to index.ts

>Do you want to add a style file?

- If you choose yes, a style.scss file will be created right next to page file.

Eventually, you'll end up with a page or component with style and test files in no time.
