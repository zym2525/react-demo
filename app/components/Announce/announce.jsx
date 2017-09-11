import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import News from '../../containers/News'
import { Form, Input, Tooltip, Upload,Button,Icon,Modal } from 'antd';
import {getCookie} from  '../../util/cookie';
import { hashHistory } from 'react-router';
import {api} from '../../util/common';
import { postData } from '../../fetch/postData';

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
const username=getCookie('username');


import './announce.less'
class Announce extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);

    }
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
           <div className="announce">
               <div className="announce-title">发布公告</div>
               <Form onSubmit={this.handleSubmit.bind(this)}>
                   <FormItem
                       {...formItemLayout}
                       label={(
                            <span>
                              公告标题
                            </span>
                        )}
                       hasFeedback
                   >
                       {getFieldDecorator('annonceTitle', {
                           rules: [{ required: true, message: '请输入公告标题!', whitespace: true }]
                       })(
                           <Input placeholder="必填*" name="title"/>
                       )}
                   </FormItem>
                   <FormItem
                       {...formItemLayout}
                       label={(
                            <span>
                              公告内容
                            </span>
                        )}
                       hasFeedback
                   >
                       {getFieldDecorator('annonceContent',{})(
                           <TextArea autosize={{ minRows: 6 }} name="content"/>
                       )}
                   </FormItem>
                   <FormItem
                       {...formItemLayout}
                       label="上传文件"
                   >
                       {getFieldDecorator('upload', {
                           valuePropName: 'fileList',
                           getValueFromEvent: this.normFile,
                       })(
                           <Upload name={username} action={api+"/dhy/background/fileOperate/upload"} listType="text" data={this.getData.bind(this)}>
                               <Button>
                                   <Icon type="upload" />选择文件
                               </Button>
                           </Upload>
                       )}
                   </FormItem>
                   <FormItem {...tailFormItemLayout}>
                       <Button type="primary" htmlType="submit">发布</Button>
                   </FormItem>
               </Form>
           </div>
        )
    }
    componentWillMount(){
        if(getCookie('accountType')!=1){
            hashHistory.push('/');
        }
    }
    handleSubmit(e){
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
               // console.log('Received values of form: ', values);
                let data={
                    title:values.annonceTitle,
                    content:values.annonceContent||'',
                    fileName:values['upload'][0]['name'],
                    type:0,
                    isTop:1,
                    loginName:username
                };
                postData(api+'/dhy/theme/saveTheme',data,(result)=>{
                    let modal = Modal.success({
                        title: 'This is a notification message',
                        content: 'This modal will be destroyed after 1 second',
                    });
                    setTimeout(() => modal.destroy(), 500);
                });
            }
        });
    }
    normFile(e) {
        console.log('Upload event:', e);

        //if (Array.isArray(e)) {
        //    return e;
        //}
        //return e && e.fileList;
        if(e.file.status=='done'){
            let data={
                fileType:0,
                loginName:username,
                uploadName:username
            };
            postData(api+'/dhy/background/fileOperate/upload',data,(result)=>{
                return;
            });
        }
    }
    getData(){
        return {
            fileType:0,
            loginName:username,
            uploadName:username
        }
    }
}
Announce = Form.create({})(Announce);
export default Announce;