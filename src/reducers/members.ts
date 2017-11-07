import { MemberEntity } from '../model';
import { actionTypes } from '../common/constants/actionTypes';
// reducer [].reduce  一项项消灭，最后一个总结果
// 修改state 可能有很多的操作，
// 一个个操作像koa中间件一样处理，最后返回一个新的state
// reducer 纯函数的概念 参数有约定 两个:newState,action
// 结果返回一个新的state
// 将action传来的action-type payload 与Store state 交流
// members只有一个 整个程序Store state
// state Store 传过来的  return 新的state
export const membersReducer = (state: MemberEntity[] = [], action) => {
    switch (action.type) {
        case actionTypes.FETCH_MEMBERS_COMPLETED: 
            return handleFetchMembersCompleted(state, action.payload)
    }
    return state;
}
const handleFetchMembersCompleted = (state: MemberEntity[], payload: MemberEntity[]) => {
    return payload;
}