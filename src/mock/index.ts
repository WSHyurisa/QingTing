import Mock,{Random} from 'mockjs'

Mock.mock(RegExp('/api/articleData' + '.*'),{
    "data|4" : [{
        id: "@id",
        image: "@image",
        title: "@ctitle",
        userName: "@cname",
        signNumber: "@natural(50,999)",
        avatar: Random.image('400x400', Random.color(), Random.color(), Random.first())
    }]

})