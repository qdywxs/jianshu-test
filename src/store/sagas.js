/*3️⃣-⑲：引入 put 方法；*/
import { takeEvery, put } from "redux-saga/effects";  /*3️⃣-⑪：首先，从 redux-saga 下边的
                                                 effects 里引入 takeEvery 方法；*/
                                                  
import { GET_INIT_LIST } from "./actionTypes";  /*3️⃣-⑫：我们本意就是想让“类型”为 
                                                GET_INIT_LIST 的 action 在本文件中
                                                被“捕捉”到。所以，传入进来以便使用；*/

import axios from "axios";  /*❗️引入 axios；*/

import { initListAction } from "./actionCreators";  /*3️⃣-⑰：引入 initListAction；*/

function* getInitList() {  /*3️⃣-⑭：这里就和 reducer 的感觉很像了，上一步判断了“类型”，
                           这一步就执行类型对应的“函数”。
                           ❗️所以，这里就是我们放置“异步”逻辑代码的地方！*/
  
  try {  /*3️⃣-⑮：用这种“try/catch 语法”可以很好地展示出“数据”获取成功和失败对应的逻辑；*/
    
    /*3️⃣-⑮：generator 函数里，作“异步”请求时，不要用 promise 语法，要直接采用下边这种形式（
    ❗️里边的 yield 表示——会等待 axios 获取数据完毕后，再把结果存在 res 里！）：
    （❗️这里用了 axios，那么请记得将 TodoList 里关于 axios 引入的代码移除至本文件中！）*/
    const res = yield axios.get("http://yapi.demo.qunar.com/mock/82169/api/todolist");
    
    /*3️⃣-⑯：既然“数据”获取到了，就可以那获取到的数据去改变 store 里的数据了。
    按照 Redux 工作流程，我们创建一个 action，并将 res.data 作为参数传入；
    ❗️注意，请一定记得将 initListAction 从 actionCreators 中引入进来！*/
    const action = initListAction(res.data);
    
    /*3️⃣-⑱：按流程，这里就应该调用 store 的 dispatch 方法，把 action 传递给 store 了。
    但，本文件中显然是没有 store 的。
    基于此，Redux-saga 底层为我们封装了一个 put 方法，其效果等同于 store.dispatch，
    但 put 可以追溯调用的信息，是更优的选择！
    ❗️要用 put，请一定记得在本文件中引入 put!*/
    yield put(action);  /*❗️这里的 yield 也是表示：让 put(action) 
                        这个 action 处理过程完成后，再进行下一步的操作！*/
    
  } catch(e) {  /*❗️这里就表示：若 Ajax 获取数据失败，应该怎么办！*/
    console.log("Yapi 接口获取数据失败，请错开 12：00——14：00 这个时间段~")  
  }

}


function* mySaga() {
  yield takeEvery(GET_INIT_LIST, getInitList);  /*❗️❗️❗️3️⃣-⑬：然后，按照官方文档提示，
                                                  用 yield 语法，调用 takeEvery 
                                                  方法，去“捕捉每一个”传递过来的 
                                                  action 的“类型”，一旦“类型”是
                                                  GET_INIT_LIST，就执行 getInitList。
                                                  */
}

export default mySaga;
