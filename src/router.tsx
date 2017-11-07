// 路由接管spa 
import * as React from 'react';
// react-router   vue里new VueRouter()
// Router 路由总对象 Route 路由规则 path => component
// IndexRoute 根路由 /  /about 子路由 根子路由 hashHistory
// hashMap /#/
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
// 应用由路由接管 App根组件， 跟路由混
import { App } from './app';
import { About, MembersPageContainer, MemberPageContainer } from './components';
// 将store交给路由组件
import { store } from './store';
// react-redux 是联结器
import { Provider } from 'react-redux';
// store进入组件由provider包装Router开始
export const AppRouter: React.StatelessComponent<{}> = () => {
    return (
        <Provider store={store}>
            <Router history={hashHistory}>
                <Route path="/" component={App}>
                    <IndexRoute component={About}/>
                    <Route path="/about" component={About}/>
                    <Route path="/members" component={MembersPageContainer}/>
                    <Route path="/member" component={MemberPageContainer}/>
                    <Route path="/member/:id" component={MemberPageContainer} />
                </Route>
            </Router>
        </Provider>
    );
};