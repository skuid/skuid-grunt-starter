# skuid-grunt-starter

Template project for getting started with [skuid-grunt](https://bitbucket.org/skuid/skuid-grunt)

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
$ git clone {repo-url}
```

* Navigate to `skuid-grunt-starter`

```bash
$ cd skuid-grunt-starter
```

* Remove link to this project's remote repository. This will allow you to add your own.

```bash
$ rm -rf .git # remove projects git history
$ git init # initialze as a new git repository
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



