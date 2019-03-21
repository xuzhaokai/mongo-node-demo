let user_repo = require("../db/repos/userRepo");
const errorCode = require("../common/errorCode");


module.exports = {

  createUser: (obj)=> {
    return new Promise((resolve,reject)=>{
      user_repo.create(obj).then(user => {
        console.log('user' + user);
        resolve(user);
      }).catch(function (error) {
        console.log(error);
        reject({
          errorMessage: error,
          errorCode: errorCode.ERR_SYS.errorCode
        });
      });
    });
  },

  getUserById: (userId)=> {
    return new Promise((resolve,reject)=>{
      user_repo.findUserById(userId).then(searchObj => {
        console.log('searchObj: ' + searchObj);
        resolve(searchObj);
      }).catch(function (error) {
        console.log(error);
        reject({
          errorMessage: error,
          errorCode: errorCode.ERR_SYS.errorCode
        });
      });
    });
  },
};
