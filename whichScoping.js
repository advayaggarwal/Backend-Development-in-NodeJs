var teacher = 'sanket'; //teacher -> global -> sanket
function ask(question){ //ask -> global, question -> ask
    console.log(teacher, question);
}

function fun(){ //fun -> global
    var teacher = 'pulkit'; //teacher -> fun -> pulkit
    ask("why?"); //sanket why
}

fun();

//JS does lexical scoping