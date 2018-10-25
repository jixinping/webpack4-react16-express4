import React from 'react'
import $ from 'jquery';
import style from '../css/Home.css'

class Main extends React.Component {
    render () {
        return <div className={style.whole}>
            <div className={style.navbar}>
                <div className={style.imgBorder}><img className={style.img} src='../client/images/6165847895E8568AE73E6164F3668271B78151E6C.jpg' /></div>
                <h1 className={style.title}>Hello admin</h1>
            </div>
            <div className={style.nav}>
                <ul role="nav">
                    <li className={style.proccess_tatil}>流程5 </li>
                    <li className={style.lead}><input type="button" value="同意" onClick={agree}/></li>
                    <li className={style.lead}><input type="button" value="不同意" onClick={refuse}/></li>
                    <li className={style.lead}><input type="button" value="详情" onClick={detail}/></li>
                </ul>
            </div>
        </div>
    }
}
export default Main;

function agree() {
    $.post("/process",{type:"agree",id:"processOne"},function(result){
        if(result.code==200){
            alert(result.retData.value);
        } else {
            alert(result.msg);
        }
    });
}

function detail() {
    $.post("/process",{type:"detail",id:"processOne"},function(result){
        if(result.code==200){
            alert(result.retData.name);
        } else {
            alert(result.msg);
        }
    });
}

function refuse() {
    $.post("/process",{type:"refuse",id:"processOne"},function(result){
        if(result.code==200){
            alert(result.retData.value);
        } else {
            alert(result.msg);
        }
    });
}