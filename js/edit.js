$(document).ready(() => {
    let blogHeads = [{
        title: "The security is main concern while developing applications",
        blogId: "blogId",
        headImg: "assets/img/1.jpg",
        createTime: new Date(),
        classify: "Technology",
        author: "小风",
        praise: 10,
        letdown: 31,
        abstract: marked('# Marked in the browser\n\nRendered by **marked**.')
    }]
    var app = new Vue({
        el: '#edit',
        data: {},
        methods: {
            query(e) {
                console.log(e);
            },
            import (e) {

            }
        }
    });

    var editor = new EpicEditor({ basePath: 'lib/epiceditor' }).load();
})