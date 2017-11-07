import * as React from 'react';
import { MemberPage } from './pages';
import { MemberEntity, MemberErrors } from '../../model';
// react-router 接管项目 所有的接口由它
import { hashHistory } from 'react-router';
import * as toastr from 'toastr';
// import { memberAPI } from '../../api/member';
import { memberFormValidation } from './memberFormValidation';
import { FieldValidationResult } from 'lc-form-validation';
import { State } from '../../reducers';
import { connect } from 'react-redux';
import { fetchMemberByIdAction } from './actions/fetchMemberById';
// ? Input change State改变
// 下一站 
// interface State {
//     member: MemberEntity;
//     memberErrors: MemberErrors;  //FieldValidationResult
// }
const mapStateToProps = (state: State, ownProps: any) => ({
    memberId: Number(ownProps.params.id) || 0,
    member: state.member
});
const mapDispatchToProps = (dispatch) => ({
    fetchMemberById: (id: number) => {
        dispatch(fetchMemberByIdAction(id))
    }
});
export const MemberPageContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(MemberPage);

// interface Props {
//     params: {
//         id: string
//     };
// }
// // 表单 路由->组件  /member  /member/:id
// // react-router  :id  在props.id
// export class MemberPageContainer extends React.Component<Props, State> {
//     constructor () {
//         super();
//         this.state = {
//             member: {
//                 id: -1,
//                 login: '',
//                 avatar_url: ''
//             },
//             memberErrors: {
//                 // 状态会变
//                 login: new FieldValidationResult()
//             }
//         }
//     }
//     // 生命周期函数
//     public componentDidMount () {
//         const memberId = Number(this.props.params.id) || 0;
//         if (memberId) {
//             memberAPI.fetchMemberById(memberId)
//                 .then((member) => {
//                     // 更新state
//                     this.setState({
//                         ...this.state,
//                         member
//                     })
//                 })
//         }
//     }
//     render () {
//         return (
//             <MemberPage 
//             member={this.state.member}
//             onChange={this.onFieldValueChange.bind(this)}
//             onSave={this.onSave.bind(this)}
//             memberErrors={this.state.memberErrors} />
//         )
//     }
//     private onSave() {
//         // console.log(this.state.member);
//         // api saveMember
//         memberFormValidation.validateForm(this.state.member)
//             .then((formValidationResult) => {
//                 if (formValidationResult.succeeded) {
//                     memberAPI.saveMember(this.state.member).then(() => {
//                         toastr.success('Member saved');
//                         hashHistory.goBack();
//                     })
//                 } else {
//                     toastr.error(formValidationResult.fieldErrors[0].errorMessage)
//                 }
//             })
//     }
//     // state改变， form就会变
//     // 改变状态方法 传递下去 vue $emit
//     // 私有的
//     private onFieldValueChange(fieldName: string, value: string) {
//         // 构建新的状态 es6
//         // this.state fieldName value
//         // change 实时去validate
//         memberFormValidation.validateField(this.state.member, fieldName, value)
//             .then((fieldValidationResult) => {
//                 // console.log(fieldValidationResult.type);
//                 if (fieldValidationResult.type === 'REQUIRED') {
//                     fieldValidationResult.errorMessage = '请输入login';
//                 } else if (fieldValidationResult.type == 'MIN_LENGTH') {
//                     fieldValidationResult.errorMessage = 'login长度不够';
//                 }    
//                 const nextState = {
//                     ...this.state,
//                     member: {
//                         ...this.state.member,
//                         [fieldName]: value
//                     },
//                     // 在页面上看到错误
//                     memberErrors: {
//                         ...this.state.memberErrors,
//                         [fieldName]: fieldValidationResult
//                     }
//                 }
//                 this.setState(nextState)
//             })
        
//     }
// }