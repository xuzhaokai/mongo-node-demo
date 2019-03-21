exports.new = function (func, res) {
    let resData = {
        success: false,
        errorCode: null,
        errorMessage: null,
        totalCount: 0,
        data: null
    };
    func.then(data => {
        resData.success = true;
        resData.data = data;
        resData.totalCount = data.length;
        res.json(resData);
    }).catch(error => {
        resData.success = false;
        resData.errorMessage = error.errorMessage;
        resData.errorCode = error.errorCode;
        res.json(resData);
    })
};

exports.loginResp = function (func, res) {
    let resData = {
        success: false,
        errorCode: null,
        errorMessage: null,
        data: null
        // token: null
    };
    func.then(data => {
        resData.success = true;
        resData.data = data;
        // resData.token = data.token;
        res.json(resData);
    }).catch(error => {
        resData.success = false;
        resData.errorMessage = error.errorMessage;
        resData.errorCode = error.errorCode;
        resData.data = error ;
        res.json(resData);
    })
};