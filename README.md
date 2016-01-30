# TVML Catalog: Using atvjs framework
This is a port of the original [TVML Catalog Sample Code](https://developer.apple.com/library/tvos/samplecode/TVMLCatalog/Introduction/Intro.html) re-written using [atvjs](https://github.com/emadalam/atvjs) framework. Refer to the framework documentation for its usage details.

### Getting Started

Assuming that you have [nodejs](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed on your machine, do the following to get started:

```shell
$ npm install -g gulp karma-cli         # Install Gulp and Karma globally
$ npm install                           # Install dependencies
```

### Development
Builds the application and starts a webserver. By default the webserver starts at port 9001.

```shell
$ gulp
```

By default, it builds in debug mode.

* If you need to build in release mode, add `--type production` flag.
* You can define a port with `--port 8080` flag. (If you start the server on a different port, make sure to update the same in the native application)
* If you need to run tests while building/starting the application, add `--tests` flag.
* To run just the test suite, `gulp test` or `karma start`

### Structure
The project is split into two parts:

- native: this directory contains the Xcode project and related files. The AppDelegate.swift file handles the setup of the TVMLKit framework and launching the JavaScript context to manage the application.
- web: this directory contains the JavaScript and TVML template files needed to render the application. The contents of this directory must be hosted on a server accessible from the device.

### License
[MIT License](http://opensource.org/licenses/MIT).
