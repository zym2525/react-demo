import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import News from '../../containers/News'
import { postData } from '../../fetch/postData';
import {api} from '../../util/common';

class Theme extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state={
            themes:[],
            currentPage:0,
            pageSize:10
        };
    }
    render() {
        return (
            <News list={this.state.themes} papeChange={this.papeChange.bind(this)} current={this.state.currentPage+1}/>
        );
    }
    componentDidMount(){
        this.getList();
    }
    papeChange(page){
        this.setState({
            currentPage:page-1
        },()=>{
            this.getList();
        });
    }
    getList(){
        let {
            currentPage,
            pageSize
            }=this.state;
        let data={
            type:0,
            currentPage:currentPage,
            pageSize:pageSize
        };
        postData(api+'/dhy/theme/list',data,(result)=>{
            let themes=result.themes;
            this.setState({
                themes:themes
            });
            console.log(result)
        });
    }
}
export default Theme;