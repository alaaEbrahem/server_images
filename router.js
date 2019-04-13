
const fs = require('fs');
module.exports = (path, next) => {

    fs.readFile(`./assets/${path}.jpg`, (err, data) => {
        if (err)
            return next(500, 'text/plain', 'page not found');
        next(200, 'image/jpg', data);
    })

}