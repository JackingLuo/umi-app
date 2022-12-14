//初始值
const initStore = {
    userInfo:{}
};

//reducer方法
const reducer = (state, action) => {
    switch (action.type){
        case 'userInfo.change':
            return { ...state, userInfo:action.payload };
    }
};

export default {
    reducer,
    initStore
};