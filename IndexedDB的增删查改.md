# IndexedDB的增删查改

## 日常操作流程如下

## 1. 打开数据库

使用indexedDB.open()方法

```javascript
var request=indexedDB.open(databaseName,version)
```

这个方法接受两个参数，**第一个参数是字符串**，表示数据库的**名字**。如果指定的数据库不存在，就会新建数据库。**第二个参数是整数**，表示数据库的**版本**。如果省略，打开已有数据库时，默认为当前版本；新建数据库时，默认为1。

indexedDB.open()方法**返回一个 IDBRequest 对象**。这个对象**通过三种事件error、success、upgradeneeded处理打开数据库的操作结果**。

### 事件error、success、upgradeneeded

### （1）error 事件

error事件表示打开数据库失败

```js
request.onerror = function(event){
    console.log('打开数据库失败')
}
```

### （2）success 事件

success事件表示成功打开数据库。

```js
var db

request.onsuccess = function(event){
    db = request.result;
    //通过request的result属性 拿到数据库对象
    console.log('数据库打开成功')
}
```

### （3）upgradeneeded 事件

如果指定的版本号，大于数据库的版本号，就会发生数据库升级事件upgradeneeded。

```js
var db;

request.onupgradeneeded = function(event) {
    db = event.target.result;
}
```

通过request的result属性 拿到数据库实例

## 2.新建数据库

新建数据库和打开数据库是同一个操作。如果指定的数据库不存在，就会新建。不同之处在于，后续的操作主要在upgradeneeded事件的监听函数里面完成，因为这时版本从无到有，所以会触发事件。

# API

## IndexedDB.open()

打开或者创建数据库，有则打开，无则创建。

## createObjectStore(name, options)

创建表name 其中options是可选的对象参数 其中包括以下的属性

Attribute | Second Description |
:----------- | :-----------: |
keyPath         | key path 被用在新的 object store 上。如果为空或未指定，object store 创建时将没有 key path，而是使用 out-of-line keys 。你也能传一个数组作为 keyPath 。        |
autoIncrement         | 默认为 false，如果为 true,  object store 有一个 key generator.         |
