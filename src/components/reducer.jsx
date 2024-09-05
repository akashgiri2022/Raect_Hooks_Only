const reducer=(state,action)=>{
    console.log(state,action);
    
    if(action.type==="inc"){
        state=state+1
        return (state);
    }
    else if(action.type==="incbyfive"){
        state=state+action.payload;
        return (state);
    }
    else if(action.type==="dec"){
        if(state===0){
            return state;
        }
        state=state-1
        return (state);
    }
}

export default reducer