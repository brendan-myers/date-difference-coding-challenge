# Date Difference
Coding challenge to calculate the days between two dates without using standard date libraries.


## Requirements
 - [Node.js 6+](https://nodejs.org/en/)


## Installation
```
git clone https://github.com/brendan-myers/date-difference-coding-challenge.git
cd date-difference-coding-challenge
npm install
```

*Note*
`npm install` is only required to be run if you plan on running the test suite.


## Usage
Accepts two dates (between Jan 01, 1900 and Dec 31, 2010) in the format;
```
DD MM YYYY, DD MM YYYY
```

and outputs the difference in days as;
```
DD MM YYYY, DD MM YYYY, difference
```

Where the first date is the earlier of the two.


### File Input
Place one date pair per line in a text file. To run;
```
npm run file path/to/file
```


### Console Input
To enter dates (in the input format) at the console, run;
```
npm run console
```

To exit, press CTRL + C


## Tests
```
npm run test
```