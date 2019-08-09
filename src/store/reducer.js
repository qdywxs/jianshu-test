const defaultState = {  /*4️⃣-④：既然 reducer 的一个重要功能是“放置数据”，
                        那么根据之前做 TodoList 的经验，
                        TodoList 里边需要两项“默认数据”：inputVlue 和 list；*/

  inputValue: "Hello, Oli.",  /*💡为了便于讲解，我们先给这两项数据分别都设置一个初始值。*/
  list: [1,2,3]
};

/*4️⃣-⑤：上边有了“默认数据”，这里记得让“参数”state 等于 defaultState；*/
export default (state = defaultState, action) => {  /*4️⃣-③：返回的“函数”接受两个固定参数：
                                     state 和 action。
                                     state 指：整个仓库里存储的数据（可以形象地理解为，“记录本”
                                     里记录的“图书馆”中所有的书籍信息）；
                                     
                                     action 指：❗️这个下篇文章讲解，这里先掌握 state。
                                     */
  
  return state;  /*🚀默认返回 state。*/
}
