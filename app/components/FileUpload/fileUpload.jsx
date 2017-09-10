import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import './fileUpload.less'
import {getCookie} from  '../../util/cookie';
import { hashHistory } from 'react-router';

class FileUpload extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);

    }
    render() {
        return (
            <div className="fileUpload">
                <div className="fileUpload-title">发布模板文件</div>
                <form id="uploads">
                    <input type="file" name="upload" value="" id="uploads_upload1"/>
                    <input type="file" name="upload" value="" id="uploads_upload2"/>
                    <input type="file" name="upload" value="" id="uploads_upload3"/>
                    <input type="submit" id="uploads_0" value="提交上传"/>
                </form>
            </div>
        )
    }
    componentWillMount(){
        if(getCookie('accountType')!=1){
            hashHistory.push('/');
        }
    }
}
export default FileUpload;