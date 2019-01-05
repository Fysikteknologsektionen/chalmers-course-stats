# Chalmers Course Statistics
This is a simple web app for viewing grade statistics of courses at [Chalmers University of Technology](https://chalmers.se).

The data is provided by Chalmers via a public [Excel document](http://document.chalmers.se/doc/00000000-0000-0000-0000-00001C968DC6) which lists **all** the results of **all** courses...

## Installation
This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
You can find a guide on how to setup and use React [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

### Requirements
- Node.js
- MongoDB

### Setup
```bash
cd /srv/websites/statistics
git clone https://github.com/Fysikteknologsektionen/chalmers-course-stats/
npm install
npm run build
```
Service instructions coming later.


## Update instructions for new version
```bash
cd /srv/websites/statistics
git pull
npm run build
systemctl restart node-course-statistics
```
A [webhook script](https://gist.github.com/gka/4627519) has been setup so deployment should happen upon a GitHub push event.

## Updating database manually
```bash
cd /srv/websites/statistics/statistics/
mongo --eval "db.dropDatabase();"
node addFields.js
```

## Contributions, bug reports and suggestions
If you would like to contribute or send feedback, please create an issue first.

## Credits
This app was created by [Jan Liu](https://github.com/fsharpasharp/) who was inspired by Johan Bowald's [exam statistics page](http://tenta.bowald.se). With the help of [Johan Winther](https://github.com/JohanWinther) the app was ported over to Fysikteknologsektionen's website ([ftek.se/stats](https://ftek.se/stats)).
