var mod1=require('./Module1');
var mod2=require('./Module2');


exports.balance = function(){
var mods= mod1(100,1000000);
return(mod2(mods));
}
exports.Module3 = function(){
  return'Account Balance: \n';
}
