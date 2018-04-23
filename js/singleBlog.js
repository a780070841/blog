let blogDetail = {
    blogHead: {
        blogId: "blogId",
        headImg: "assets/img/1.jpg",
        createTime: new Date(),
        classify: "Technology",
        author: "小风",
        praise: 10,
        letdown: 31,
        abstract: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec tellus non diam feugiat commodo. Sed auctor mauris a tristique imperdiet. Nullam egestas sapien non lectus suscipit, quis tristique odio imperdiet. Nullam elit lacus, tincidunt eget faucibus eget,vestibulum venenatis metus.Praesent efficitur quam aliquam mauris sagittis,vel lacinia risus luctus.Ut vitae bibendum ipsum.'
    },
    blogBody: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec tellus non diam feugiat commodo. Sed auctor mauris a tristique imperdiet. Nullam egestas sapien non lectus suscipit, tincidunt eget faucibus eget, vestibulum venenatis metus. Praesent efficitur quam aliquam mauris sagittis, vel laciniaquis tristique odio imperdiet. Nullam elit lacus, tinciduntdolor sit amet, consectetur adipiscing elit. Fusce nec tellus non diam eget faucibus eget, vestibulum venenatis metus. Praesent efficitur quam aliquam mauris sagittis, vel lacinia risus luctus. Ut vitae bibendum ipsum.
    Lorem ipsumdolor sit amet, consectetur adipiscing elit. Fusce nec tellus non diam feugiat commodo. Sed auctor mauris a tristique imperdiet. Nullam egestas sapien non lectus suscipit, quis tristique odio imperdiet. Nullam elit lacus, tincidunt eget faucibus eget, vestibulum venenatis metus. Praesent efficitur quam aliquam mauris sagittis, vel lacinia risus luctus. Ut vitae bibendum ipsum.
    Lorem ipsum<strong>dolor sit amet, consectetur adipiscing elit. 
    Fusce nec tellus non diam</strong> feugiat commodo. Sed auctor mauris a tristique imperdiet. Nullam egestas sapien non lectus suscipit, quis tristique odio imperdiet. Nullam elit lacus,<i> tincidunt eget faucibus eget, vestibulum venenatis metus.
    Praesent efficitur quam aliquam mauris sagittis, vel lacinia</i> risus luctus. Ut vitae bibendum ipsum.`,

}
$(document).ready(() => {
    var singleBlog = new Vue({
        el: '#singleBlog',
        data: {
            blog: blogDetail
        },
        methods: {
            query(e) {
                console.log(e);
            }
        }
    });
})