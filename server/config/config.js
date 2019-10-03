//This file holds any configuration variables we may need
//'config.js' is ignored by git to protect sensitive information, such as your database's username and password
//copy this file's contents to another file 'config.js' and store your MongoLab uri there

module.exports = {
  db: {
    //place the URI of your mongo database here.
    uri: 'mongodb+srv://guest:cen3031access@cen3031-g9k2x.mongodb.net/test?retryWrites=true&w=majority'
  },
  openCage: {
    //place your openCage public key here - Sign-up for a free key https://opencagedata.com/
    key: '31b4780e54ca4cdf92d4929afaede958'
  },
  port: 8080
};
