/**
 * 主函数，各页面通过该函数路由到自己的js
 */
let appProxyHandle = {
    //拦截对象属性的读取，比如proxy.foo和proxy['foo']。
    get(target, propKey, receiver) {

        let prop = Reflect.get(target, propKey, receiver);
        if (typeof prop === "function") {
            console.log("调用function");
        }
        return prop;
    },
    //拦截对象属性的设置，比如proxy.foo = v或proxy['foo'] = v，返回一个布尔值。
    set(target, propKey, value, receiver) {
        // 设置值，刷新页面对应的值
        return Reflect.set(target, propKey, value, receiver);
    },
    //拦截propKey in proxy的操作，返回一个布尔值。
    has(target, propKey) {
        return Reflect.has(target, propKey);
    },
    //拦截delete proxy[propKey]的操作，返回一个布尔值。
    deleteProperty(target, propKey) {
        return Reflect.deleteProperty(target, propKey);
    },
    //拦截Object.getOwnPropertyNames(proxy)、Object.getOwnPropertySymbols(proxy)、Object.keys(proxy)、for...in循环，
    //返回一个数组。该方法返回目标对象所有自身的属性的属性名，而Object.keys()的返回结果仅包括目标对象自身的可遍历属性
    ownKeys(target) {
        return Reflect.ownKeys(target);
    },
    //拦截Object.getOwnPropertyDescriptor(proxy, propKey)，返回属性的描述对象。
    getOwnPropertyDescriptor(target, propKey) {
        return Reflect.getOwnPropertyDescriptor(target, propKey);
    },
    //拦截Object.defineProperty(proxy, propKey, propDesc）、Object.defineProperties(proxy, propDescs)，返回一个布尔值。
    defineProperty(target, propKey, propDesc) {
        return Reflect.defineProperty(target, propKey, propDesc);
    },
    //拦截Object.preventExtensions(proxy)，返回一个布尔值。
    preventExtensions(target) {
        return Reflect.preventExtensions(target);
    },
    //拦截Object.getPrototypeOf(proxy)，返回一个对象。
    getPrototypeOf(target) {
        return Reflect.getPrototypeOf(target);
    },
    //拦截Object.isExtensible(proxy)，返回一个布尔值。
    isExtensible(target) {
        return Reflect.isExtensible(target);
    },
    //拦截Object.setPrototypeOf(proxy, proto)，返回一个布尔值。如果目标对象是函数，那么还有两种额外操作可以拦截。
    setPrototypeOf(target, proto) {
        return Reflect.setPrototypeOf(target, proto);
    },
    //拦截 Proxy 实例作为函数调用的操作，比如proxy(...args)、proxy.call(object, ...args)、proxy.apply(...)。
    apply(target, object, args) {
        console.log("daili");
        return Reflect.apply(target, object, args);
    },
    //拦截 Proxy 实例作为构造函数调用的操作，比如new proxy(...args)。
    construct(target, args) {
        return Reflect.construct(target, args);
    }
}
/**
 * app的公共父类
 */
class appSupperObject {
    init(){

        this._node||(this._node = $("[exj-app="+this.name+"]"))
        // 子app
        this.childApps||(this.childApps=new Map());

        // 命令map
        this.commandMap||(this.commandMap = new Map());

    }


}

var context = {
    appList: new Map(),
    createApp: function (_appName, _app) {
        // 实例继承
        Object.setPrototypeOf(_app.prototype, appSupperObject.prototype);

        // 静态属性继承
        Object.setPrototypeOf(_app, appSupperObject);
        let proxyApp = new Proxy(_app, appProxyHandle);
        this.appList.set(proxyApp.name, proxyApp);
    },
    getApp: function (_appName) {
        return this.appList.get(_appName);
    },
    // 遍历node
    traversalUsingTreeWalker(_node, _callback) {
        var treeWalker = document.createTreeWalker(_node, NodeFilter.SHOW_ELEMENT, null, false);
        if (_node && _node.nodeType === 1) {
            _callback(_node);
        }
        let nextNode = treeWalker.nextNode();
        while (nextNode != null) {
            _callback(nextNode);
            nextNode = treeWalker.nextNode();
        }
    }
}

$(document).ready(function () {

    context.traversalUsingTreeWalker(document.getRootNode(), console.log)
    let appName = $("[exj-app]").attr("app");
    // 所有页面的启动方法 —-页面生命周期的调用
    let app = context.getApp(appName);
    app.init(1);
})

let exjBind = {
    name: "exj-bind",
    execute() {

    }
}
