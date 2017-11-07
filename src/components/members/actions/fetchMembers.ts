// actions 放至在组件文件夹内
// 有利于分组开发，大型项目开发
// 文件夹优势是分组协作
import { MemberEntity } from '../../../model';
import { actionTypes } from '../../../common/constants/actionTypes';
import { memberAPI } from '../../../api/member';
// const fetchMembersCompleted = (members: MemberEntity[]) => {
//     type: actionTypes.FETCH_MEMBERS_COMPLETED,
//     payload: members
// }
// action dispatch
// redux action dispatch提交一次修改的请求,不能修改state的
// 只有dispatch 没有mutation React里是reducer 不可修改的纯函数
// action 数据处理 ajax=>reducer
export const fetchMembersAction = () => (dispatch) => {
    memberAPI.fetchMembers()
        .then(members => {
            // console.log(members);
            dispatch(fetchMembersCompleted(members));
        })
}
const fetchMembersCompleted = (members: MemberEntity[]) => ({
    type: actionTypes.FETCH_MEMBERS_COMPLETED,
    payload: members
})