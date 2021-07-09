
const doFilter = (filter)=>{
    
    if(Array.isArray(filter) && filter.length){
        let result = '';
        filter.forEach((element,index) => {
            result += element.field + (element.operand=='equal' ? "=": (element.operand=='contain' ? " LIKE ":"")) + element.value + (index==filter.length-1 ? "":" AND ");
        });

        return result;
    }
    else
        return null;
}

module.exports = {doFilter}