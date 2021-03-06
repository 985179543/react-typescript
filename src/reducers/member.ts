// state
import { actionTypes } from '../common/constants/actionTypes';
import { MemberEntity } from '../model';
const createEmptyMember = (): MemberEntity => ({
    id: -1,
    login: '',
    avatar_url: ''
});
// reducer 纯函数 状态的改变
export const memberReducer = (state = createEmptyMember(), action) => {
    switch (action.type) {
        case actionTypes.FETCH_MEMBER_BY_ID_COMPLETED:
            return handleFetchMemberByIdCompleted(state, action.payload);
    }
    return state;
}
const handleFetchMemberByIdCompleted = 
(state: MemberEntity, payload: MemberEntity): MemberEntity => {
    return payload;
}