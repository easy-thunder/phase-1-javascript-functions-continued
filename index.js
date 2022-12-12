// code your solution here
const saturdayFun = function(fun="roller-skate") {
    return `This Saturday, I want to ${fun}!`
};


const mondayWork = function(work='go to the office'){
    return `This Monday, I will ${work}.`
};



const wrapAdjective = function(adjective){
    return function (message){
        return `You are ${adjective}${message}${adjective}!`;
    };

}





// console.log(wrapAdjective('%')("a dedicated programmer") );
// "you are %a dedicated programmer%!"






