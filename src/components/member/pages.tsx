import * as React from 'react';
import { MemberForm } from './memberForm';
import { MemberEntity, MemberErrors } from '../../model';
interface Props {
    memberId: number;
    member: MemberEntity;
    fetchMemberById: (id: number) => void;
    // member: MemberEntity; //属性
    // memberErrors: MemberErrors;
    // onChange: (fieldName: string, value: string) => void; //方法
    // onSave: () => void;
}
export class MemberPage extends React.Component<Props, {}> {
    constructor () {
        super();
    }
    componentDidMount () {
        this.props.fetchMemberById(this.props.memberId);
    }
    public render () {
        return (
            <div className="row">
                <h2>Member Page</h2>
                <MemberForm
                    member={this.props.member}
                 />
            </div>
        )
    }
}