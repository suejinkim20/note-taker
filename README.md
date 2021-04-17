# note-taker

used uuid npm package https://www.npmjs.com/package/uuid#uuidv1options-buffer-offset

## Description
This application is a command line application that generates a ReadMe document in markdown. The application runs using Node.js and the Inquirer npm. The user responds to a series of prompts/questions and those answers are inserted into a readme template which dynamically generates uppon completion of the prompts. 

Check out this sample [generatedReadMe.md](generatedReadMe.md)

### Functional Elements:

* The user is prompted to answer a series of questions. Upon completion, a readme.md file is generated containing the following information:
    * Title of the project
    * Description
    * Installation
    * Usage
    * Contributing
    * Testing
    * License
        * Corresponding badge is generated near the top of the readMe
        * A link to the license is placed in this license section
        * The text for the license is displayed in this license section
    * Questions
        * Email address opens in default email application using "mailto:"
        * GitHub profile is linked to user's github profile page
* Table of Contents is linked to headings
* The installation, license choice, and year for license purpose have default values.


## Usage
In order to use this application, you must have Node.js installed, as well as the Inquirer package (see links below in Credits).

The following video shows how a user would invoke the application from the command line, how a user would enter responses to all of the prompts in the application, and it displays the generated README that matches the user input and has a functioning table of contents.

Walkthrough Video:

![Screenshot 1](https://media.giphy.com/media/lps3QZni7kvTU7vBDc/giphy.gif)
![Screenshot 2](https://media.giphy.com/media/uSKMOZrFWUaVNmES6a/giphy.gif)
![Screenshot 3](https://media.giphy.com/media/a2zBvfiywp2qtXMVZ1/giphy.gif)

## Credits

* Node.js: https://nodejs.org/en/
* 


## License

MIT License

Copyright (c) [2021] [Sue Jin Kim]

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.