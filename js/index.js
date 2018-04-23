// context.createApp({
//     name:"index",
//     init:function(_i){
//         console.log("start"+_i);
//     }
// });

$(document).ready(() => {

    let blogHeads = [{
        blogId: "blogId",
        headImg: "assets/img/1.jpg",
        createTime: new Date(),
        classify: "Technology",
        author: "小风",
        praise: 10,
        letdown: 31,
        abstract: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec tellus non diam feugiat commodo. Sed auctor mauris a tristique imperdiet. Nullam egestas sapien non lectus suscipit, quis tristique odio imperdiet. Nullam elit lacus, tincidunt eget faucibus eget,vestibulum venenatis metus.Praesent efficitur quam aliquam mauris sagittis,vel lacinia risus luctus.Ut vitae bibendum ipsum.'

    }]

    let pages = [{
        num: 1,
        isActive: false
    }, {
        num: 2,
        isActive: false
    }, {
        num: 3,
        isActive: true
    }]


    var app = new Vue({
        el: '#app',
        data: {
            blogHeads: blogHeads,
            pages: pages
        },
        methods: {
            query(e) {
                console.log(e);
            }
        }
    });

})