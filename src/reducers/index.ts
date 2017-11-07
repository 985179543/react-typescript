// reducer 门户
// 相当于vuex modules 合并起来
// reducer members list fetchMembers
// member.ts form fetchMemberById
// updateMember saveMember
// memberError.ts
// ts 多的 props state
// redux state
import { combineReducers } from 'redux';
import { MemberEntity } from '../model';
import { membersReducer } from './members';
import { memberReducer } from './member';
export interface State {
    members: MemberEntity[];
    member: MemberEntity;
}
// Store 需要state 唯一状态树 reducers
// members.ts reducer state members
// vuex module
// reducers里包含多个reducer 每个reducer纯函数对单一的state进行处理
// combineReducers合并成单一状态树
export const state = combineReducers<State>({
    members: membersReducer,
    member: memberReducer
})