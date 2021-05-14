# JavaScript 的 LHS查询 和 RHS查询

来源： 《你不知道的JavaScript(上卷)》 第一章。

分析一个操作是LHS查询还是RHS查询可以从目的分析：  
如果查找的目的是 对变量进行复制，那么就会使用LHS查询；  
如果目的是 获取变量的量，就会使用RHS查询。

LHS查询失败不报错，会隐式创建全局变量，而不成功的RHS引用会抛出ReferenceError异常。

ReferenceError 与 作用域判别失败 相关，而 TypeError则代表作用域判别成功，而对结果的操作是非法或不合理的。

严格模式禁止自动或隐式地创建全局变量。
