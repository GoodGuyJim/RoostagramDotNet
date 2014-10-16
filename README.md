# Roostagram.Net!

This is a .Net implementation of the application built at the Roost 2014 Javascript Conference by the fine folks at Bocoup. 

The original repository [can be found here](https://github.com/bocoup-education/roost-chicago-2014-app), please check it out!

For this project I am using IIS Express, I have therefore removed any references to the "connect" local web server used by the original Roostagram.

## Installation

In order to get this working you will need several things installed on your system.

--From the original Roostagram readme--
1. Install [nodejs](http://nodejs.org/). Make sure you install something on the
   v.0.10 release branch. Version 0.11 is a development branch and breaks some
   of the libraries in our application.
2. Install [Grunt](http://gruntjs.com/) globally by typing `npm install -g
   grunt-cli` into your terminal/command line.
3. Install [Bower](http://bower.io/) globally by typing `npm install -g bower`.

I am also using[LiveReload](http://livereload.com/) because the original version did, however the Windows version is in alpha and apparently not as stable, but does work. 
It could be removed or disabled if it's causing too many problems for you

This project uses the new Visual Studio extension "Task Runner Explorer", [here's a handy guide on how to set it up](http://www.hanselman.com/blog/introducinggulpgruntbowerandnpmsupportforvisualstudio.aspx),
be aware that you will need the above technologies for it to work.

If you are having problems getting NPM or Bower to install any packages through Visual Studio, try installing them globally first. 