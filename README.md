# Angular Material with Routing - a Demo 

This project contains a sample AngularJS application and is preconfigured to install the  Angular Material framework 
and a bunch of dependenciesfor instant web development gratification. The seed code for the project was provided by 
the Angular Material starter project
[https://github.com/angular/material-start](https://github.com/angular/material-start). That includes this very 
README.md file

This sample application is intended to be a shell to demonstrate a starter Angular Material project and how it can be 
used with ngRoute to create a modular project with html fragments which can be brought together using ngRoute but 
without exposing *ugly* URL links, but instead expose a side navigation bar (side nav). The contents of the side nav 
link to the different html fragments which are *"loaded"* into the main content area. I must emphasize *shell* because 
in particular, I leave out any code for authentication or form submission. The methods called when you click some of the
 buttons is nothing but a stub.

It also demonstrates the use angular-material's ```md-tabs```, ```md-input```, ```md-select``` and ```md-button```

## Getting Started

#### Prerequisites

You will need **git** to clone this repository. You can get git from
[http://git-scm.com/](http://git-scm.com/).

We also use a number of **node.js** tools to initialize and test this project. You must have node.js and
its package manager **npm** installed.  You can get them from [http://nodejs.org/](http://nodejs.org/).

After you get node.js and npm, be sure to install **bower**. You can install bower as such

 ```
 npm install bower
 ```

#### Install the dependencies

Go to the root of this project and execute ```bower install bower.json``` which will install a number of files in 
`app/bower_components`

*Note that the `bower_components` folder would normally be installed in the root folder but
 the `.bowerrc` file alters the directory to be `app/bower_components`.  Putting it in the app folder makes
it easier to serve the files by a webserver.*

## Directory Layout


    app/                    --> all of the source files for the application
      assets/app.css        --> default stylesheet
      src/           --> all app specific modules
         users/              --> package for user features
      index.html            --> app layout file (the main html template file of the app)
    karma.conf.js         --> config file for running unit tests with Karma
    e2e-tests/            --> end-to-end tests
      protractor-conf.js    --> Protractor config file
      scenarios.js          --> end-to-end scenarios to be run by Protractor


## Updating Angular

You can update the tool dependencies by running:

```
npm update
```

This will find the latest versions that match the version ranges specified in the `package.json` file.

You can update the Angular dependencies by running:

```
bower update
```

This will find the latest versions that match the version ranges specified in the `bower.json` file.


## Serving the Application Files

While angular is client-side-only technology and it's possible to create angular webapps that
don't require a backend server at all, we recommend serving the project files using a local
webserver during development to avoid issues with security restrictions (sandbox) in browsers. The
sandbox implementation varies between browsers, but quite often prevents things like cookies, xhr,
etc to function properly when an html page is opened via `file://` scheme instead of `http://`.

### Running the App during Development

The angular-seed project comes preconfigured with a local development webserver.  It is a node.js
tool called [http-server][http-server].  You can install http-server globally:

```
sudo npm install -g http-server
```

Then you can start your own development web server to serve static files from a folder by running:

```
cd app
http-server -a localhost -p 8000
```

Alternatively, you can choose to configure your own webserver, such as apache or nginx. Just
configure your server to serve the files under the `app/` directory.


## Contact

For more information on AngularJS please check out http://angularjs.org/
For more information on Angular Material, check out https://material.angularjs.org/

[git]: http://git-scm.com/
[bower]: http://bower.io
[npm]: https://www.npmjs.org/
[node]: http://nodejs.org
[http-server]: https://github.com/nodeapps/http-server
