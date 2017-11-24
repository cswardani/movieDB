const fs = require("fs");

module.exports = {
    ReadApiKey: function(){
        var data = fs.readFileSync("../api/api.txt");
        return data.toString();
    },
    CreateToken : function(token){
        var writerStream = fs.createWriteStream('token.txt');
        writerStream.write(token,'UTF8');
        writerStream.end();
        writerStream.on('finish', function() {
            console.log("Write completed.");
        });
        
        writerStream.on('error', function(err){
           console.log(err.stack);
        });
    },
    ReadToken : function(){
        var data = fs.readFileSync("token.txt");
        return data.toString();
    }
}