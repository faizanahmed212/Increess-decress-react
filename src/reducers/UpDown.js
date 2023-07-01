const insiData=0;
const chgNumber=(state=insiData,action)=>{
    switch(action.type){
        case "INCREMENT" : return state + action.payload;
        case "DECREMENT" : return state - action.payload;
        default : return state;
        }
}

export default chgNumber;