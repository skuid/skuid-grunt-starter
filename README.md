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
$ git clone {this-repo-url}
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

* In Gruntfile.js, edit the the following areas
	* `{ClientId}` = Connected App Client Id
	* `{ClientSecret}` = Connected App Client Secret
	* `{OrgUsername}` = The username of the Salesforce org you want to connect to
	* `{OrgPassword + OrgSecurityToken}` = The password + security token of the Salesforce org you want to connect to

*A more advanced way to do this would be to define each item as an environment variable, and reference that in Gruntfile.js*

* Pull your first set of Skuid Pages

```bash
$ grunt pull-pages
```


## Creating your own repository (optional)
*If you don't want to expose your Skuid Pages to the public, make sure your hosting service supports private repositories.*

If you want to store your Skuid Pages with a service like GitHub or Bitbucket, create a new repository in your desired service.

Once the repository has been created, copy the repository url and follow the steps below to add it as a Git remote.

```bash
$ git remote add origin {repo-remote-url}
$ git push -u origin master
```





