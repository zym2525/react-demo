/**
 * Created by Administrator on 2017/9/7.
 */
import {post} from './post';
export async function postData(url,data,successfn, isLoadingShow){
    if (isLoadingShow == undefined || isLoadingShow == true) {
        //alertLoading();
    }
    try{
        var result=await post(url,data);
        console.log(result)
    }catch(error){
        if (error.length > 0) {
            alert(error);
        }
        else {
            alert('出错了！请刷新页面试试~');
        }
    }
}