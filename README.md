# DefiReturn UI

In the project directory, you can run:

`yarn install`\
To install all required packages for the UI

`yarn start:local`\
Runs the UI connected to a local backend, for development and debugging\
Open [http://localhost:3000](http://localhost:3000)

`yarn start`\
Runs the UI connected to our hosted backend (currently on Heroku). This makes it easier to get started because you don't have to install the backend, but it's harder to debug.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Heroku deployment

You must have Heroku CLI installed to deploy with Git.
[Heroku CLI installation instructions.](https://devcenter.heroku.com/articles/heroku-cli#install-the-heroku-cli)

Open Git in the project directory.

Perform login with the heroku login command.

`heroku login`

Add a remote to your local repository with the heroku git:remote command.

`heroku git:remote -a defireturn-ui`

To deploy your commit to Heroku, use the git push command to push the code from your local repository’s main branch to your heroku remote.

`git push heroku main`
    
