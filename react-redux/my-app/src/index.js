// 页面渲染函数，接收两个值：新状态和旧状态，并且按不同部分分发给不同函数
function renderApp(newAppState, oldAppState = {}) {
    console.log('render app');
    renderTitle(newAppState.title, oldAppState.title);
    renderContent(newAppState.content, oldAppState.content);
}

// title渲染函数，接收title设置并进行比对，如果重新设置了title，则渲染
function renderTitle(newTitle, oldTitle = {}) {
    if (newTitle === oldTitle) return;
    console.log('render title');
    const titleDOM = document.getElementById('title');
    titleDOM.innerHTML = newTitle.text;
    titleDOM.style.color = newTitle.color;
}

// content渲染函数，接收content设置并进行比对，如果重新设置了content，则渲染
function renderContent(newContent, oldContent = {}) {
    if (newContent === oldContent) return;
    console.log('render content');
    const contentDOM = document.getElementById('content');
    contentDOM.innerHTML = newContent.text;
    contentDOM.style.color = newContent.color;
}

// 修改state的函数，如果state没有被设置过，则表示初始化state
function stateChange(state, action) {
    if (!state) {
        return {
            title: {
                text: '标题文本',
                color: 'purple'
            },
            content: {
                text: '内容文本',
                color: 'orange'
            }
        };
    }
    switch (action.type) {
        case 'UPDATE_TITLE_TEXT':
            return {
                ...state,
                title: {
                    ...state.title,
                    text: action.text
                }
            }
        case 'UPDATE_TITLE_COLOR':
            return {
                ...state,
                title: {
                    ...state.title,
                    color: action.color
                }
            }
        case 'UPDATE_CONTENT_COLOR':
            return {
                ...state,
                content: {
                    ...state.content,
                    color: action.color
                }
            }
        default:
            break;
    }
}

// 状态管理仓库，传入需要管理的状态，以及修改规则，调用方法来管理
function createStore(reducer) {
    // 初始化state为null
    let state = null;
    // 用观察者模式来实时刷新数据
    const listeners = [];
    // 通过subscribe方法添加监听函数
    const subscribe = (listener) => listeners.push(listener);
    // 获取当前的state
    const getState = () => state;
    // 通过调用dispatch方法，更新state状态
    const dispatch = (action) => {
        // 先通过reducer函数，更新state
        state = reducer(state, action);
        // 然后调用监听函数，自动更新state
        listeners.forEach((listener) => listener());
    }
    // 初始化state
    dispatch({});
    return {
        getState,
        dispatch,
        subscribe
    };
}

// 创建新的状态管理仓库store
const store = createStore(stateChange);
// 声明旧状态，每次重新渲染后会被更新
let oldState = store.getState();
// 添加到队列，每次调用dispatch时都会执行此函数
store.subscribe(() => {
    const newState = store.getState();
    renderApp(newState, oldState);
    oldState = newState;
});
// 首次渲染
renderApp(store.getState());
store.dispatch({ type: 'UPDATE_TITLE_TEXT', text: '修改了文本' });
store.dispatch({ type: 'UPDATE_TITLE_COLOR', color: 'yellow' });
store.dispatch({ type: 'UPDATE_CONTENT_COLOR', color: 'blue' });