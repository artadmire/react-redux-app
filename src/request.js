import axios from "axios"

axios.interceptors.request.use(function(){
    return config
})

axios.interceptors.response.use(function(){
    return config
})

const Check = {
    CheckStatus(res) {
        if(res && (res.status === 200 ||res.status === 304 || res.status === 400)) {
            return res.data
        }
        return {
            status: response.status,
            msg: '异常'
        }
    },
    CheckCode(err) {
        if(err && err.status === -404){
            alert(err.msg)
        }
    }
}

export default Axios = {
    get(url,params) {
       return axios.get(url,params).
        then(function(res){
            return Check.CheckStatus(res);
        }).catch(function(err){
            return Check.CheckCode(err);
        })
    },
    post(url,params) {
        return axios.post(url,params).
        then(function(res){
            return Check.CheckStatus(res);
        }).catch(function(error){
            return Check.CheckCode(err);
        })
    }
}