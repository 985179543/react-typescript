// Store 负责Store 实例 => react-redux connect
// createStore 生成一个store 参数
// compose 中间件合成 thunk中间件 app.use() 合并一个
// applyMiddleware 加中间件

import { Store, createStore, compose, applyMiddleware } from 'redux';
// reduxThunk dispatch方法前Promise 异步化提交action
import reduxThunk from 'redux-thunk';
import { state, State } from './reducers';

export const store: Store<State> = createStore(
    state,
    // redux 中间件  跟koa一样  
    // applyMiddleware 和 app.use()一样
    compose(
        applyMiddleware(reduxThunk)
    )
)