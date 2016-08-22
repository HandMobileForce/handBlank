# ionic-blank-template

[![Dependency Status](https://david-dm.org/snipking/angular1-onsen/status.svg)](https://david-dm.org/snipking/angular1-onsen#info=dependencies) [![devDependency Status](https://david-dm.org/snipking/angular1-onsen/dev-status.svg)](https://david-dm.org/snipking/angular1-onsen#info=devDependencies)

A seed template for angular1 & ionic project


learning course.

>Warning: Make sure you're using the latest version of Node.js and NPM

### Quick start

> Clone/Download the repo

```bash
# clone repo
$ git clone https://github.com/HandMobileForce/handBlank.git

# change directory to app root
$ cd handBlank

# install the dependencies with npm
$ npm install

# install the dependencies with bower
$ bower install

# run with clean mode
$ gulp clean

# run with dev mode
$ gulp run-dev


```
##Every time after modify the code

* developing build:
```bash
gulp build-dev
```
* production build:
```bash
gulp build-prod:
```

If everything goes right, chrome browser will open with url [http://localhost:8384/index.html](http://localhost:8384/index.html)
otherwise you should open it manually.

# Table of Contents

* [Getting Started](#getting-started)
    * [Dependencies](#dependencies)
    * [Installing](#installing)
    * [Running the app](#running-the-app)
    * [Developing](#developing)
    * [Testing](#testing)
* [License](#license)

# Getting Started

## Dependencies

What you need to run this app:
* `node` and `npm`

## Installing

* `npm install` to install build environment dependencies
* `bower install` to install javascript library dependencies

## Running the app

Using NetBeans build-in server to run / debug

## Developing

### Build files

* clean distribution (www) folder
```bash
gulp clean:
```

* developing build:
```bash
gulp build-dev
```
* production build:
```bash
gulp build-prod:
```

* watch changes
```bash
gulp watch
```


* 切换到开发环境:
```bash
$ gulp clean
$ gulp run-dev
$ gulp build-dev
```

* 切换到正式环境:
```bash
$ gulp clean
$ gulp run-prod
$ gulp build-prod
```

###关于app下面的文件夹
1、app目录下有config 和configProd，configxml和configxmlProd文件，
   resources目录下有dev和prod文件分别对应开发环境和正式环境。
   需要自已配置对应的文件，resources没有开发和正式环境的区分可直接把cev和prod文件下的图片设置成一样的

2、app目录下的scripts里面的comment存放着公共的方法，有service.js和publicFunction.js两个文件
   引用service.js里面的方法记得注入publicMethod
   
### IDE
WebStorm

## Testing

#### 1. Unit Tests

_TODO_

# License

[APACHE](/LICENSE)
# Demo
# Demo
# Demo
