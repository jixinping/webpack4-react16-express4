function process1() {
    $.post("processOne",{name:"processOne"},function(result){
        if(result.code==200){
           alert(result.list[0].value);
        } else {
            alert(result.msg);
        }
    });
}

function process1Agree() {
    $.post("processOne",{type:"agree",name:"processOne"},function(result){
        if(result.code==200){
            alert(result.list[0].value);
        } else {
            alert(result.msg);
        }
    });
}

function process1Refuse() {
    $.post("processOne",{type:"refuse",name:"processOne"},function(result){
        if(result.code==200){
            alert(result.list[0].value);
        } else {
            alert(result.msg);
        }
    });
}

function process2() {
    $.post("processTwo",{name:"processTwo"},function(result){
        if(result.code==200){
            alert(result.list[0].value);
        } else {
            alert(result.msg);
        }
    });
}

function process2Agree() {
    $.post("processTwo",{type:"agree",name:"processTwo"},function(result){
        if(result.code==200){
            alert(result.list[0].value);
        } else {
            alert(result.msg);
        }
    });
}

function process2Refuse() {
    $.post("processTwo",{type:"refuse",name:"processTwo"},function(result){
        if(result.code==200){
            alert(result.list[0].value);
        } else {
            alert(result.msg);
        }
    });
}