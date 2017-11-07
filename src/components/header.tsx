import * as React from 'react';
// 头部导航 react-router Link 
// vue-router
import { Link } from 'react-router';
// import VueRouter from 'vue-router'
// Vue.use(VueRouter)

// 泛型 js 像c# c++
// className? jsx js html语法 class是js的关键字
// label for -> htmlFor
export const Header: React.StatelessComponent<{}> = () => {
    return (
        <div className="row">
            <nav className="navbar navbar-default">
                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul className="nav navbar-nav">
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/members">Members</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}