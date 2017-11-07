// 表单的报错 input下面有error message
// 状态合在一起
// memberEntity input .login .avatar_url
// error 出错时显示页面
// state
import { Validators, ValidationConstraints, createFormValidation }
from 'lc-form-validation';

const validationConstaints: ValidationConstraints = {
    fields: {
        login: [
            { validator: Validators.required },
            { validator: Validators.minLength, 
               customParams: { length: 3 } }
        ]
    }
}
//  表单， 集体提供验证对象
export const memberFormValidation = 
createFormValidation (validationConstaints);
// 一个表单，创建一个验证对象 createFormValidation
// 规则constraints  validationConstaints
// fields 
//     login  ->  input form 
//         Validators.required  errorMsg
//     avatar_url