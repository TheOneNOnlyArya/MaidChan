var admin = require("./utilities.json").admin;

exports.isAdmin = function(id){
        for(var i = 0; i < admin.length; i++) {
            if (id === admin[i]) {
                return true;
            }
        }
        return false;
};