import * as React from 'react';
import { MemberEntity } from '../../model'
// import { memberAPI } from '../../api/member';
import { MemberHeader } from './memberHeader';
import { MemberRow } from './memberRow';
import { Link } from 'react-router';
// state react constructor this.state = 初始化
// typescript总管类型
// 加入redux后，原有组件的state变store state props 
// state props 一样的， 没有自己了，由store传进来
interface Props {
    members: MemberEntity[];
    fetchMembers(): void;
}

// Props
// MembersPage Component 有状态
// class extends React.Component
// 两个参数
export class MembersPage extends React.Component<Props> {
    // ts class
    constructor () {
        super();
        // this.state = {
        //     members: []
        // }
    }
    public componentDidMount() {
        this.props.fetchMembers()
        // memberAPI.fetchMembers()
        //     .then(members => {
        //         this.setState({
        //             members
        //         })
        //     })
    }
    public render () {
        return (
            <div className="row">
                <h2>Members Page</h2>
                <Link to="/member">New Member</Link>
                <table className="table">
                    <thead>
                        <MemberHeader/>
                    </thead>
                    <tbody>
                        { this.props.members.map(
                            (member) => 
                            <MemberRow
                            key={member.id}
                            member={member}
                            />
                        ) }
                    </tbody>
                </table>
            </div>
        )
    }
}
