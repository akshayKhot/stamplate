# Getting Started

* Make sure `node` is installed. If not, install it [here](https://nodejs.org/en/)
* Make sure `jspm` is installed. If not, run `npm install jspm -g`
* Download the repository and rename it to `my-app`
* Insert database details in `my-app/routes/app.js`
```javascript
    const cn = {
        host: '',
        port: 5432,
        database: '',
        user: '',
        password: ''
    };
```
* To install the dependencies
    * `cd my-app`
    * `npm install` 
    * `cd public`
    * `npm install`
    * `jspm install -y`
* To run the application
    * `node app.js` from `my-app`
    * `gulp watch` from `my-app/public`