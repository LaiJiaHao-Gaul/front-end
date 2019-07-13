# IndexedDB的增删查改

## 前置概念

- 数据库：  IDBDatabase对象
- 对象仓库  IDBObjectStore对象
- 索引：    IDBIndex对象
- 事务：    IBDTransaction对象
- 操作请求  IDBRequest对象
- 指针：    IDBCursor对象
- 主键集合：IDBKeyRange对象


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

## 2. 新建数据库

新建数据库和打开数据库是同一个操作。如果指定的数据库不存在，就会新建。不同之处在于，后续的操作主要在upgradeneeded事件的监听函数里面完成，因为这时版本从无到有，所以会触发upgradeneeded事件。

接下来要做的事情就是新建表（对象仓库）

```js
request.onupgradeneeded = function(event){
    db = event.target.result;
    var objectStore = db.createObjectStore( 'person' , { keyPath : 'id' } )
}
```

**值得注意的是，新建表操作是数据库实例对象result里面的方法。**
日常实践中其实还是得先加个if判断person表是否存在，不存在再新建。如下：

```js
request.onupgradeneeded = function( event ){
    db = event.target.result;
    var objectStore;
    if( db.objectStoreName.contains( 'person' )){
        //数据库实例对象有objectStoreName.contains判断表是否存在，返回布尔值。
        objectStore = db.createObjectStore( 'person' , { keyPath : 'id' } )
    }
}
```

**数据库实例对象有objectStoreName.contains判断表是否存在，返回布尔值。**

概念-主键：主键（key）是默认建立索引的属性。比如：数据记录是{'id':1,name:'张三'}，那么id属性可以作为主键。主键也可以指定为“下一层对象的**属性**”，比如{foo:{bar:'baz'}}的foo.bar也可以指定为主键。

如果数据记录里面没有合适作为主键的属性，那么可以让 IndexedDb 自动生成主键。

```js
var objectStore = db.createObjectStore(
    'person',
    { autoIncrement: true} //主键将会是一个key generator，即一个自增主键（整数）。
);
```

新建对象仓库以后，下一步就是**新建索引**。

```js
request.onupgradeneeded = function(event){
    db = event.target.result;
    var objectStore = db.createObjectStore( 'person', { keyPath : 'id' });
    objectStore.createIndex( 'name', 'name', { unique: false});
    objectStore.createIndex( 'email', 'email', { unique: true})
}
```

上面代码中，可见新建索引的API为 **createIndex()**
createIndex的三个参数分别为 索引名称、索引所在的属性、配置对象（说明该属性是否包含重复的值）

顺带一提：新建表和新建索引的操作 都是在新建（或打开）数据库的onupgradeneeded事件中进行的，这些api是存在于result中，而result存在于IDBRequest的对象属性中。也就是open操作返回IDBRequest，IDBRequest.result取得数据库实例，之后的新建表和新建索引都是数据库实例对象的API。

## 3. 新增数据

新增数据指的是向对象仓库写入数据记录。这需要通过**事务**完成。

```js
function add(){
    var request = db.transaction(['person'], 'readwrite')
    .objectStore('person')
    .add({ id: 1, name: '张三', age: 24, email: 'xxx@qq.com' });

    request.onsuccess = function (event) {
        console.log('数据写入成功');
    };

    request.onerror = function (event) {
        console.log('数据写入失败');
    };
}

add()
```

上面代码中，写入操作需要新建一个事务transaction。新建时必须指定表格名称和操作模式（“只读”或“读写”）。新建事务以后，通过IDBTransaction.objectStore('person')方法，拿到 IDBRequest对象，再通过**表格对象**的add()方法，向表格写入一条记录。

写入操作是一个异步操作，通过监听连接对象的 success事件 和 error事件，了解是否写入成功。

ps：新增操作的步骤可以分为：

1. 取得数据库对象实例
2. 新建一个事务transaction（数据库对象实例的API），新建时必须指定表格名称和操作模式（read 或 readwrite）也就是只读或读写
3. 新建事务后，通过IDBTransaction.objectStore(name)方法,拿到 IDBObjectStore 表格对象。
4. 通过表格对象的add（）方法，向表格写入一条记录。

ps：最后一步写入是一个异步操作 需要监听连接对象的success事件和errors事件，了解是否写入成功

## 4. 读取数据

读取数据也是通过事务transaction完成。

```js
function read() {
    var transaction = db.transaction(['person']);
    var objectStore = transaction.objectStore('person');
    var request = objectStore.get(1);

    request.onerror = function(event) {
        console.log('事务失败')
    };

    request.onsuccess = function(event){
        if(request.result) {
            console.log('Name:' + request.result.name);
            console.log('Age:' + request.result.age);
            console.log('Email:' + request.result.email);
        }else{
            console.log('未获得数据记录')
        }
    }
}

read();

```

上面代码中，objectStore.get()方法用于读取数据，参数是主键的值。

## 5. 遍历数据

遍历数据表格的所有记录，要使用指针对象 IDBCursor

```js
function readAll(){
    var objectStore = db.transaction('person').objectStore('person');

    objectStore.openCursor().onsuccess = function(event){
        var cursor = event.target.result;

        if(cursor){
            console.log('Id:' + cursor.key);
            console.log('Name: ' + cursor.value.name);
            console.log('Age: ' + cursor.value.age);
            console.log('Email: ' + cursor.value.email);
            corsor.continue()
        }else{
            console.log('没有更多数据了')
        }
    }
}
readAll()
```

**openCursor操作是异步操作，需要监听onsuccess事件。**

## 6. 更新数据

更新数据用的是put方法

```js
function update(){
    var request = db.transaction(['person'],'readwrite')
    .objectStore('person')
    .put({id:1,name:'李四',age:35,email:'xxx@163.com'});

    request.onsuccess = function(event) {
        console.log('数据更新成功');
    }

    request.onerror = function(event) {
        console.log('数据更新失败')
    }
}
```

上面代码更新了主键为1的数据

## 7. 删除数据

IDBObjectStore.delete()方法用于删除记录

```js
function event(){
    var request = db.transaction(['person'],'readwrite')
    .objectStore
    .delete('1')

    request.onsuccess = function(event) {
        console.log('数据删除成功')
    }

    request.onerror = function(event) {
        console.log('数据删除失败')
    }
}
```

## 8. 使用索引

索引的意义在于：可以让你搜索任何字段，也就是说从任意字段拿到数据记录。如果不简历索引，默认只能搜索主键（即从主键取值）。

假设新建表格的时候，对name字段建立了索引。

```js
objectStore.createIndex('name','name', { unique : false });
```

现在就可以从name找到对应的数据记录了。

```js
var transaction = db.transaction(['person'],'readonly');
var store = transaction.objectStore('person');
var index = store.index('name');
var request = index.get('李四');

request.onsucess = function(event){
    var result=event.target.result;
    if(result){
        // ...
    }else{
        // ...
    }
}
```

# API

## IndexedDB.open()

打开或者创建数据库，有则打开，无则创建。

## createObjectStore(name, options)

创建表name 其中options是可选的对象参数 其中包括以下的属性

| Attribute     |                                                                   Second Description                                                                   |
| :------------ | :----------------------------------------------------------------------------------------------------------------------------------------------------: |
| keyPath       | key path 被用在新的 object store 上。如果为空或未指定，object store 创建时将没有 key path，而是使用 out-of-line keys 。你也能传一个数组作为 keyPath 。 |
| autoIncrement |                                             默认为 false，如果为 true,  object store 有一个 key generator.                                             |

**文档大篇幅引用 阮一峰的博客**

原文地址：http://www.ruanyifeng.com/blog/2018/07/indexeddb.html
