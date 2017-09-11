import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {api} from '../../util/common';
import { postData } from '../../fetch/postData';


import './themeInfo.less'
class ThemeInfo extends React.Component {
    constructor(props, context) {
        super(props, context)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
        this.state={
            themeInfo:{}
        }
    }

    render() {
        let {themeInfo}=this.state;
        return (
            <div className="themeInfo">
                <div className="themeInfo-title common-title">{themeInfo.title}</div>
                <div className="themeInfo-content-wrapper">
                    <div className="themeInfo-content">{themeInfo.content}</div>
                    <div className="themeInfo-link">
                        <span>附件下载:</span>
                        <span className="theme-name">{themeInfo.fileName}</span>
                        <a onClick={this.downLoad.bind(this,themeInfo.type,themeInfo.id)}>点击下载</a>
                    </div>
                </div>
            </div>
        )
    }
    componentDidMount(){
        const themeCode=this.props.params.id;
        let data={
            themeCode:themeCode
        };
        postData(api+'/dhy/theme/getThemeInfo',data,(result)=>{
            this.setState({
                themeInfo:result.themes[0]
            });
            console.log(result)
        });
    }
    downLoad(type,id){
        let data={
            fileId:id,
            fileType:type
        };
        postData(api+'/dhy/background/fileOperate/download',data,(result)=>{
            console.log(result)

        });
    }
}
export default ThemeInfo
