// 注册
Vue.component('my-component', {
    template: '<div>A custom component!</div>'
});
Vue.component('blog-head', {
    template: `<section class="header-section" style="margin-bottom:30px">
    <div class="container">
        <div class="row">
            <div class="col-md-12 text-center">
                <h1><strong>小风的博客 </strong></h1>
                <h4>java开发工程师</h4>
            </div>
        </div>
    </div>
</section>`
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