/**
 * Created by Administrator on 2017/9/7.
 */
import {post} from './post';
export function postData(url,data,successfn, isLoadingShow){
    if (isLoadingShow == undefined || isLoadingShow == true) {
        //alertLoading();
    }
    let result= post(url,data);
    result.then(res=>{
       return res.text();
    }).then(text=>{
        let reData=JSON.parse(JSON.parse(text));
        if(reData.retCode==0){
            successfn&&successfn(reData);
        }else{
            alert(reData.retMsg);
        }
    }).catch(err=>{
        alert('出错了！请刷新页面试试~')
    })
}

