# Olio Technical Task

This application will pull a list of articles from a live URL and display them on a map & in a list.

Clicking on a marker on the map or clicking on an item card will display a modal with more details on the item. Clicking on the modal or outside of the modal will close it.

Once an item has been viewed in the modal, it is greyed out on the list to indicate it has been viewed.

The application is responsive and will display well on mobile as well as desktop. Item cards are reduced in size on the mobile view. You will also notice the navigation bar images will become icons in mobile view.

## Installing nodeJS

You must first download nodeJS. This will allow you to run the app locally. Please navigate to this [link](https://nodejs.org/en/download/)

Once you have downloaded and installed nodeJS, you can confirm it is installed by typing the following into your terminal

```bash
node -v
```

You should see the nodeJS version display.

## Installing the app dependencies and running the app locally

Now that you have nodeJS installed, the next step is to download the application code.

1. Click on the green button labeled 'Code' at the top right of the application repository screen.
2. Click 'Download ZIP' (remember where this file was downloaded)
3. Unzip the downloaded file to your Desktop (for easy access). You will now have all of the code used in the application on your PC
4. You must now use the terminal to navigate to the unzipped application folder. Please open a new terminal window and paste the following:

```bash
cd Desktop/olio-task
```

5. You have now navigated into the project folder using your terminal!
6. Before you run the app, you must install the package dependencies. Type the following into the terminal and click enter:

```bash
npm i
```

7. Once this has completed (it may take a few minutes) you are ready to start run the application locally. Enter the following command into your terminal and click enter. Once the command has finished running, a new tab will automatically be opened in your browser with the application running:

```bash
npm start
```

8. Enjoy!

_Note: If you would like to clone the repository instead of downloading it as a ZIP, please follow the instructions [here](https://support.atlassian.com/bitbucket-cloud/docs/clone-a-git-repository/)_

## Extra information

Here is a list of some of the concepts/tools used in this application:

- **create-react-app** to provide an easy to use boilerplate and starting point
- **Atomic Principles** to provide a strong structure for the project and to promote the use of reusable components
- **Styled Components** to allow easy definition of scoped styles on a reusable component and to remove the need for many CSS files.
- React **Context** and **Reducer** hooks to manage application state
- **Theme Provider** to prevent hardcoding of colours in the styling of components. These variables can be changed from a single location
- **Data file** to house any links/images to prevent hardcoding of these within components

## License

[MIT](https://choosealicense.com/licenses/mit/)
