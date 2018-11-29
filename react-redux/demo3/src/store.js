function createStore (reducer) {
    let state = null;
    let listeners = [];

    const getState = () => state;
    const subscribe = (lister) => listeners.push(lister);
    const dispatch = (action) => {
        state = reducer(state, action);
        listeners.forEach(listener => listener());
    }
    // 初始化state
    dispatch({});
    return {
        dispatch,
        getState,
        subscribe
    }
}

export default createStore;