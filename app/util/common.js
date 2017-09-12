/**
 * Created by Administrator on 2017/9/7.
 */
//https://rsuitejs.com/getting-started
import React from 'react';
import Layer from 'react-layer';
let imgUrl = require('../image/loading1.gif');
//https://github.com/BruceCham/react-cli/tree/master/src
export const api='http://120.25.247.79';

//转化时间
export  function getLocalTime(dataTime){
    let oDate=new Date(dataTime);
    let iY=oDate.getFullYear();
    let iMonth=oDate.getMonth()+1;
    let iD=oDate.getDate();
    return `${iY}-${toDou(iMonth)}-${toDou(iD)}`;
}

//加0
export function toDou(num){
    return num<10? '0'+num:''+num;
}

//loading
export function alertLoading() {
    let layer = new Layer(document.body, function renderModal(){
        return (
            <div className="loadingMask"><img src={imgUrl}/></div>
        )
    });
    layer.render();
    return layer;
}

//提示
export function hint(message='确定要删除吗？', callback) {
    let layer = new Layer(document.body, function renderModal(){
        return (
            <div className="hint">
                <div className="alertIcon"></div>
                <div className="alertText">{message}</div>
                <div className="alertBtn clearfix">
                    <div className="confirm fl" onClick={confirm}>确定</div>
                    <div className="cancel fr" onClick={cancel}>取消</div>
                    <i className="closeIcon"></i>
                </div>
            </div>
        )
    });
    // actually renders our Modal off of the document.body
    layer.render();
    function confirm(){
        callback&&callback(layer);
        layer.destroy();
    }
    function cancel(){
        layer.destroy();// unmount and remove the React Component tree
    }
}