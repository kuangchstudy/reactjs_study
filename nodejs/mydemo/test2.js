var fs = require('fs');
fs.readFile('input.txt', function (err,data) {
    if(err){
        console.log(err.stack);
        return;
    }
    console.log(data.toString());
});
var i = 0;
while (i++ < 20)
{
    setTimeout(function(){
        console.log('progress execute completed');
    },1);
}