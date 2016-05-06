# skuid-grunt-starter

Template project for getting started with [skuid-grunt](https://bitbucket.org/skuid/skuid-grunt)

Documentation: [skuid-grunt](https://bitbucket.org/skuid/skuid-grunt)

## Description
`skuid-grunt` is a GruntJS plugin for 'pushing' and 'pulling' Skuid Pages to and from a Salesforce org with Skuid installed. It is a great way to integrate Skuid development into the rest of your Salesforce development workflow. You can use `skuid-grunt` in any version control system as GruntJS is just as task runner and `skuid-grunt` provides a set of tasks that GruntJS can use.

## Prerequisites
### System
* [Git](https://git-scm.org)
* [NodeJS](https://nodejs.org) (includes NPM)
* [Grunt CLI](http://gruntjs.com) - `npm install grunt-cli`
### Salesforce
* [Skuid v7.31 or higher](https://www.skuid.com/skuidreleases)
* Salesforce Connected App Client Id & Client Secret
	* [Tutorial](https://help.salesforce.com/apex/HTViewHelpDoc?id=connected_app_create.htm)
	* [More instructions](https://bitbucket.org/skuid/skuid-grunt)


## Install
* Clone this project

```bash
$ git clone https://bitbucket.org/skuid/skuid-grunt-starter.git
```

* Navigate to `skuid-grunt-starter`

```bash
$ cd skuid-grunt-starter
```

* Remove link to this project's remote repository. This will allow you to add your own.

```bash
$ rm -rf .git # remove projects git history
$ git init # initialze as a new git repository
$ git add . # add all the new files to the project
$ git commit -m "Project scaffolding" # commit new files
```

* Install project dependencies

```bash
$ npm install
```

* Setup environment variables that the Gruntfile can use for it's credentials. Run the following commands in your current terminal session OR add them to a file like `~/.bash_profile` on OSX or `~/.bashrc` on Linux so that they are always available in your terminal sessions.

```bash
# This will vary based on your system (Windows, OSX, Linux)
$ export CON_APP_CLIENT_ID={ClientId} # replace {ClientId} with your Connected App client_id
$ export CON_APP_CLIENT_SECRET={ClientSecret} # replace {ClientSecret} with your Connected App client_secret
$ export SKUID_GRUNT_USERNAME={OrgUsername} # replace {OrgUsername} with the username of the org you wish to connect to
$ export SKUID_GRUNT_PASSWORD={OrgPassword + OrgSecurityToken} # replace {OrgPassword + OrgSecurityToken} with the password and security token for the above user
```


* Pull your first set of Skuid Pages	

```bash
$ grunt pull-pages
```

## Why use environment variables?
Using environemnt variables for credential configuration serves multiple purposes:

1. If you choose to store your Skuid Pages in a publicly accessible repository (GitHub, Bitbucket, etc), it is a secure way to ensure that you never commit any secure credtials to your repository.
2. Your Skuid Page repo will be portable, allowing multiple developers or automation tools to use the same repo to interact with different environments.



## Creating your own repository (optional)
*If you don't want to expose your Skuid Pages to the public, make sure your hosting service supports private repositories.*

If you want to store your Skuid Pages with a service like GitHub or Bitbucket, create a new repository in your desired service.

Once the repository has been created, copy the repository url and follow the steps below to add it as a Git remote.

```bash
$ git remote add origin {repo-remote-url}
$ git push -u origin master
```








