import React from 'react'
import { render } from 'react-dom'
import App from './todoList';

render(
    <App/>
    ,document.getElementById('root')
)

/*
* * 需要使用redux的场景
* /
1.组件的状态需要共享
2.某个状态在任何地方可以拿到
3.一个组件需要改变全局状态
4.一个组件改变另一个组件的状态


/*
* * redux的设计思想
* /
1.web应用是一个状态机，视图与状态一一对应、
2.所有的状态都保存在一个对象里


/*
* * 基本概念
* /
一、store
 1. store是保存数据的地方，一个应用只能有一个store
 2. 使用redux提供的createStore函数来生成store
    import { createStore } from 'redux';
    const store= createStore(fn);

二、state
 1. store对象包含所有数据，想得到某个时点的数据，就要对store生成快照。这种时点的数据集合，叫state
 2. 此刻的state，可以通过store.getState()拿到
        const store= createStore(fn);
        const state=store.getState();

三、action
1. action是view发出的通知，表示state要发生变化了
2. action是一个对象，type属性是必须的，表示action名称,描述当前发生的事情
   const action={
     type:'ADD_TODO',
     id:1
   }
3. store.dispatch()
   是view发出action的唯一方法,接受一个action对象作为参数，将它发送出去
   store.dispatch({
        type:'ADD_TODO',
        id:1
   )

四、reducer
 1. store收到action之后，必须给出一个新的state，view才会发生变化，这种state的计算过程叫reducer
 2. reducer是一个函数，接受action和当前state作为参数，返回一个新的state
    const reducer= function (state,action) {
        return new_state;
    }
3.  createStore接受reducer作为参数，生成一个新的store。每当store.dispatch发送过来一个新的action，就会自动调用reducer，得到新的state。

4. reducer是一个纯函数，即：不得改写参数；不能调用系统I/O的api；不能调用date或者math等不纯的方法

5.combineReducer
(1) 子组件与子reducer完全可以对应，redux提供combineReducer方法，组合子reducer
(2) state的属性名必须与子reducer同名
(3) 该函数就是产生一个整体的reducer，根据state的key去执行相应的子reducer，将返回结果合并成大的state对象

   import { combineReducers } from 'redux';

   const reducer=combineReducers({
        chatLog,
        username
   })


五、store.subscribe()
 1. store允许使用store.subscribe方法设置监听函数，一旦state发生了变化，就自动执行这个函数

六、工作流程
1、用户发出action
2. store自动调用reducer，传入当前state和接收到的action两个参数，reducer返回新的state
3. state一旦变化，store就会调用监听函数
    function listener(){
        let newState=store.getState();     //得到当前状态
        component.setState(newState);
    }
   store.subscribe(listener)








