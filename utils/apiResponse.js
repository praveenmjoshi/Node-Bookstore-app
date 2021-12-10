
exports.successResponse = function(res, msg){
    var resObj = {
        message: msg
    };
    return res.status(200).json(resObj);
};

exports.successResponseWithData = function(res, msg, data){
    var resObj = {
        message: msg,
        data: data
    };
    return res.status(200).json(resObj);
};

exports.errorResponse = function(res, msg){
    var resObj = {
        message: msg
    };
    return res.status(500).json(resObj);
};

exports.notFoundResponse = function(res, msg){
    var resObj = {
        message: msg
    };
    return res.status(404).json(resObj);
};

exports.validationErrorWithData = function (res, msg, data) {
	var resData = {
		message: msg,
		data: data
	};
	return res.status(400).json(resData);
};

exports.unauthorizedResponse = function (res, msg) {
	var data = {
		message: msg,
	};
	return res.status(401).json(data);
};