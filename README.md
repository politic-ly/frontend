![Logo](/src/assets/user-guide-images/logo.png)

# Welcome to Politic.ly!
This project aims to bring an average American community closer and help create impact within their local environment. While national politics and policies are important, they get plenty of platforms to communicate with citizens. However, local politics rarely get the same level of attention. Through this app, we want to make local politics accessible, especially to young adults who are the most motivated to bring about change. We want to allow local citizens to create initiatives, gather support, and take action to make their communities better.

## Getting Started
If you'd like to simply traverse our application, you can visit our live site at [](politicly.app). You'll need to use your Google account to login. Once you've logged into, you'll be brought to the Home page. 

![Home Page](/src/assets/user-guide-images/homePage.PNG)

From the Home Page, you can explore initiatives happening in your area or see upcoming events to volunteer with using the tab icons to toggle content. Initiative Cards are a preview that includes the title, short description, location, and volunteer count. You can favorite initiatives you're interested by toggling the heart icon. If you look at the Navigation bar at the top, you can click on any of the icons and they'll take you to new pages. The Heart icon will take you to the favorites page where users can see initiatives they've favorited or saved for later. The Compass icon will take users to the Explore page. Initiatives specific to the user's interests will populate here. The Bell Icon will open the Announcements popover. Any updates or announcements from favorited initiatives will appear here. The Newspaper icon will take users to the News page. Here, users can read articles published by local papers to stay updated on their community. The Account page will open a dropdown prompting users to either go to their Account page or logout. And finally, our logo in the top lefthand corner will return users to the Home page.

![Navigation Bar](/src/assets/user-guide-images/navigation.PNG)

Users can make their own initiatives and add announcements or events for those initiatives. To make an initiative, users can navigate to their account page. There, you can view your user information including your email, name, and location. You can toggle between viewing your initiatives and an account settings form to change their name and location using the tabs at the bottom of the page. 

![Account Page](/src/assets/user-guide-images/accountPage.PNG)

To add a new initiative, users can find a button on the "My Initiatives" page at the header. A form will prompt users to add information about their initiative including a title, location, short description, long description, tags, and media. Once a user is done stepping through the create initiative workflow, they'll see their initiative populate under "My Initiatives". To create an event or announcement is similar. Instead, however, users will find the buttons within their initiative. When opening an initiative as an admin, they'll see special features only visible to those with admin permissions. Clicking on "Create New" will open a form similar to the create initiative form and will populate under the respective headers when complete.

![Initiative Page](/src/assets/user-guide-images/initiative.PNG)

## Developers Guide
In order to work on the development of our application, you'll need to 
Clone both the frontend and backend repo [campaignService](https://github.com/politic-ly/campaignService). Our team prefers to use VS Code, but you can use whatever code editor your find best.

To start, let's get the backend environment running. Open the campaignService repository in VS Code. Duplicate the `.env.example` file and rename it `.env` - these are your credentials for our MongoDB database. You'll need to get the database information from an admin. Run command `npm i` to install dependencies for the project, and `npm start` to spin up your backend local environment. 

Next, open frontend repo. Before running any commands, copy the `.env.local.example` file and rename is to `.env.local`. This is your environment file that will verify creditials for Google SSO. You'll need to get the React App Google Client ID from an admin. Run command `npm i` to install dependencies for the project, and `npm start` to spin up your frontend local environment.

Once you have both local environments running, you can start making changes. Politic.ly uses React.js framework for the frontend, Google Material UI as a component library, and express.js for our backend. Commit your changes in a branch and make PR when you're ready. Someone from our team will review and approve it once the Netlify tests pass.

## FAQ
**I don't have a Google account, can I still use the app?**
Unfortunately not, for security and account management purposes, we utilize Google SSO. In the future, we may offer more authentication options.

**My dev environment isn't working. What should I do?**
Most often your dev environment won't spin up because you didn't start your backend environment, you have a syntax issue in your code, OR you need to reinstall dependencies by running `npm i`. Trying one of these solutions will hopefully fix your issue. If not, I would reach out to someone on the team for help.

**I found an inappropriate initiative. How do i report it?**
Our team is adament on keeping inappropriate initiatives off our platform. If you find an initiative that might be suspicious or inappropriate, please report it by contacting someone on our team and we'll have it reviewed and removed within 24 hours. 

**What can I work on to help Politic.ly?**
You can check what work we've got in the backlog by looking at our issue tickets. Any user is welcome to pick up a ticket and PR!

**Where's the best place to get started?**
I would start by looking at any issue tagged with "good first issue" and reseraching our tech stack. There's a ton of resources around React and Google mui and express.js! Be it YouTube videos or tutorials or the doc sites, learning how to contribute to our application is doable for anyone. If you need any help, anyone from our team is happy to help.

If you have any questions or need help, reach out to someone on our team:
<table>
  <tr>
    <td align="center"><a href="https://github.com/lizisawizard"><img src="https://avatars.githubusercontent.com/u/48833213?v=4" width="100px;" alt=""/><br /><sub><b>Liz Tremblay</b></sub></a><br /><a href="https://github.com/ceas-ambassadors/ceas-ambassadors-website/commits?author=lizisawizard" title="Code">💻🎨📓📆</a></td>
    <td align="center"><a href="https://github.com/Jashgada"><img src="https://avatars.githubusercontent.com/u/30024526?v=4" width="100px;" alt=""/><br /><sub><b>Jash Gada</b></sub></a><br /><a href="https://github.com/ceas-ambassadors/ceas-ambassadors-website/commits?author=Jashgada" title="Code">💻🚧💵🔣⚠️</a></td>
    <td align="center"><a href="https://github.com/alexjmills"><img src="https://avatars.githubusercontent.com/u/43217465?v=4" width="100px;" alt=""/><br /><sub><b>Alex Mills</b></sub></a><br /><a href="https://github.com/ceas-ambassadors/ceas-ambassadors-website/commits?author=alexjmills" title="Code">💻📓🚧🔣</a></td>
</table>
