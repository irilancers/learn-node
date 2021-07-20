
const login = ({user,password})=>{
    if(user=="ebrahim" && password=="123"){
        return true;
    }
    else
        return false;
}

module.exports = {login}
