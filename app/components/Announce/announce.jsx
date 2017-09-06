import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import News from '../../containers/News'

import './announce.less'
class Announce extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);

    }

    render() {
        return (
           <div className="announce">
               <form className="form-horizontal" action="/IMSssh/uploadAction/uploadFile.do" method="post" enctype="multipart/form-data">
                   <fieldset>
                       <div id="legend">
                           <legend className="">发布公告</legend>
                       </div>
                       <div className="control-group">
                           <label className="control-label">公告标题:</label>
                           <div className="controls">
                               <input type="text" placeholder="必填*" name="title" className="input-xlarge" required="required"/>
                           </div>
                       </div>
                       <div className="control-group">
                           <label className="control-label">公告内容:</label>
                           <div className="controls">
                               <div className="textarea">
                                   <textarea type="text" name="content"></textarea>
                               </div>
                           </div>
                       </div>
                       <div className="control-group">
                           <label className="control-label">上传文件:</label>
                           <div className="controls">
                               <input className="input-file" id="fileInput" type="file" name="image"/>
                           </div>
                       </div>
                       <div className="control-group">
                           <div className="controls">
                               <button type="submit" className="btn-success">发布</button>
                           </div>
                       </div>
                   </fieldset>
               </form>
           </div>
        )
    }

}
export default Announce;