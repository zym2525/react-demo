import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {getCookie} from  '../../util/cookie';
import { hashHistory } from 'react-router';
import { Form, Input, Tooltip, Upload,Button,Icon } from 'antd';
import './form.less';
const { TextArea } = Input;
const FormItem = Form.Item;
const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 6 }
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 14 }
    }
};
const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 14,
            offset: 6,
        },
    },
};



class UseForm extends React.Component {
    constructor(props, context) {
        super(props, context)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className="form">
                <div className="common-title">宁波大红鹰学院非学历教育培训申请表</div>
                <Form onSubmit={this.handleSubmit.bind(this)}>
                    <FormItem
                        {...formItemLayout}
                        label={(
                            <span>
                              培训项目名称
                            </span>
                        )}
                        hasFeedback
                    >
                        {getFieldDecorator('pname', {
                            rules: [{ required: true, message: '请输入培训项目名称!', whitespace: true }]
                        })(
                            <Input placeholder="必填*" name="pname"/>
                        )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label={(
                            <span>
                              办班单位
                            </span>
                        )}
                        hasFeedback
                    >
                        {getFieldDecorator('office', {
                            rules: [{ required: true, message: '请输入办班单位!', whitespace: true }]
                        })(
                            <Input placeholder="必填*" name="office"/>
                        )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label={(
                            <span>
                              联系人
                            </span>
                        )}
                        hasFeedback
                    >
                        {getFieldDecorator('linkman', {
                            rules: [{ required: true, message: '请输入联系人!', whitespace: true }]
                        })(
                            <Input placeholder="必填*" name="linkman"/>
                        )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label={(
                            <span>
                              联系人电话
                            </span>
                        )}
                        hasFeedback
                    >
                        {getFieldDecorator('linknum', {
                            rules: [{ required: true, message: '请输入联系人电话!', whitespace: true,pattern:'/\d+/' }]
                        })(
                            <Input placeholder="必填*" name="linknum"/>
                        )}
                    </FormItem>
                </Form>
            </div>
        )
    }
    componentWillMount(){
        if(getCookie('accountType')!=0){
            hashHistory.push('/');
        }
    }
    handleSubmit(e){
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }
    normFile(e) {
        console.log('Upload event:', e);
        if (Array.isArray(e)) {
            return e;
        }
        return e && e.fileList;
    }
}
UseForm = Form.create({})(UseForm);
export default UseForm;
