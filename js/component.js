// 注册
Vue.component('my-component', {
    template: '<div>A custom component!</div>'
});
Vue.component('blog-head', {
    template: `    <div style="background-color: rgb(111, 15, 189);margin-bottom: 20px">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <nav class="navbar navbar-default " role="navigation" style="margin-top: 30px">
                    <div class="container-fluid">
                        <div class="navbar-header">
                            <a class="navbar-brand" href="#">小风博客</a>
                        </div>

                        <div class="navbar-form navbar-left" style="width: 500px">
                            <div class=" input-group ">
                                <input type="text" v-model="searchKey" class="form-control">
                                <span class="input-group-btn">
                                            <button class="btn btn-default" @click="search" type="button">Go!</button>
                                        </span></div>
                        </div>
                        <div class="collapse navbar-collapse" id="example-navbar-collapse">
                            <ul class="nav navbar-nav navbar-right">
                                <li class="active"><a href="index.html">首页</a></li>
                                <li><a href="index.html">博客目录</a></li>
                                <li>

                                </li>

                            </ul>

                            <!-- /input-group -->
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    </div>
    </div>`,
    data() {
        return {
            searchKey: ""
        }
    },
    methods: {
        search() {
            console.log(this.searchKey);
        }
    }
});
let categories = [{
    name: "Technology",
    blogNum: 104
}, {
    name: "Blogging",
    blogNum: 21
}, {
    name: "Information",
    blogNum: 12
}, {
    name: "Security",
    blogNum: 3
}];
Vue.component('blog-category', {
    template: `<div class="col-md-3">

    <ul class="list-group">
        <li class="list-group-item">
            <strong>Main Categories</strong>
        </li>
        <li class="list-group-item" v-for="cat in categories">
            <span class="badge">{{cat.blogNum}}</span> {{cat.name}}
        </li>
    </ul>
    <br />
    
    <br />
    <div>
        <div class="panel panel-default">
            <div class="panel-heading">
                <h3 class="panel-title">Subscribe For Updates</h3>
            </div>
            <div class="panel-body">
                <input type="text" class="form-control" placeholder="Your Email" />
                <hr />
                <a href="#" class="btn btn-info btn-sm btn-block">subscribe</a>
            </div>
        </div>
    </div>
    </div>`,
    data() {
        return { categories: categories }
    },
    methods: {
        query(e) {
            console.log(e);
        }
    }
})