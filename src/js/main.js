import React from 'react'
import { Link } from 'react-router-dom'
import { Route} from 'react-router';
import style from '../css/Main.css'

import Lists from './Lists.js';

class Main extends React.Component {
    render () {
        return <div className={style.whole}>
            <div className={style.navbar}>
                <div className={style.imgBorder}><img className={style.img} src='../../../src/images/6165847895E8568AE73E6164F3668271B78151E6C.jpg' /></div>
                <h1 className={style.title}>Hello admin</h1>
            </div>
            <div className={style.nav}>
                <ul role="nav" >
                    <li className={style.lead}><Link to="/agree">同意</Link></li>
                    <li className={style.lead}><Link to="/refuse">不同意</Link></li>
                    <li className={style.lead}><Link to="/detial">详情</Link></li>
                </ul>
                <Route path="/detial" component={Lists}/>
            </div>
        </div>
    }
}
export default Main;