// react container
// redux state action 
// connect 将组件包装一层
// 声明要借什么 state action 
// connect  props => page.tsx
import { connect } from 'react-redux';
import { State } from '../../reducers';
// state, action 来到component 流程
// map state
import { fetchMembersAction } from './actions/fetchMembers';
import { MembersPage } from './page';
const mapStateToProps = (state: State) => ({
    members: state.members
});

const mapDispatchToProps = (dispatch) => ({
    fetchMembers: () => dispatch(fetchMembersAction())
})

// 将被拿走了状态的组件从redux里map状态和action过来，作为props
// connect 连接 组件与redux里的需要的状态和方法
export const MembersPageContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(MembersPage);