import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

class FileUpload extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);

    }

    render() {
        return (
            <div>模板上传</div>
        )
    }

}
export default FileUpload;