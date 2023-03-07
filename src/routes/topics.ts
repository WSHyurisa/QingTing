
const Topic = {
    path: '/topic',
    name: 'topic',
    component: () => import ('@/view/HomeView/Topic/Topic.vue'),
    meta: {
        title: '专题',
        requireAuth: false
    },
    children: [
        {
            path:'academic',
            name:'academic',
            component: () => import('@/view/HomeView/Topic/TopicRoutes/Test.vue'),
            meta: {
                title: '学业压力'
            }
        },
        {
            path:'friend',
            name:'friend',
            component: () => import('@/view/HomeView/Topic/TopicRoutes/Test.vue'),
            meta: {
                title: '人际关系'
            }
        },
        {
            path:'nature',
            name:'nature',
            component: () => import('@/view/HomeView/Topic/TopicRoutes/Test.vue'),
            meta: {
                title: '性格养成'
            }
        },
        {
            path:'career',
            name:'career',
            component: () => import('@/view/HomeView/Topic/TopicRoutes/Test.vue'),
            meta: {
                title: '职业发展'
            }
        },
        {
            path:'love',
            name:'love',
            component: () => import('@/view/HomeView/Topic/TopicRoutes/Test.vue'),
            meta: {
                title: '恋爱懵懂'
            }
        },
        {
            path:'marriage',
            name:'marriage',
            component: () => import('@/view/HomeView/Topic/TopicRoutes/Test.vue'),
            meta: {
                title: '婚姻生活'
            }
        },
        {
            path:'breakup',
            name:'breakup',
            component: () => import('@/view/HomeView/Topic/TopicRoutes/Test.vue'),
            meta: {
                title: '分手'
            }
        },
        {
            path:'unmarried',
            name:'unmarried',
            component: () => import('@/view/HomeView/Topic/TopicRoutes/Test.vue'),
            meta: {
                title: '单身'
            }
        },
        {
            path:'parenting',
            name:'parenting',
            component: () => import('@/view/HomeView/Topic/TopicRoutes/Test.vue'),
            meta: {
                title: '亲子关系'
            }
        },
        {
            path:'education',
            name:'education',
            component: () => import('@/view/HomeView/Topic/TopicRoutes/Test.vue'),
            meta: {
                title: '家庭教育'
            }
        },
        {
            path:'dispute',
            name:'dispute',
            component: () => import('@/view/HomeView/Topic/TopicRoutes/Test.vue'),
            meta: {
                title: '家庭纠纷'
            }
        },
        {
            path:'pressure',
            name:'pressure',
            component: () => import('@/view/HomeView/Topic/TopicRoutes/Test.vue'),
            meta: {
                title: '压力'
            }
        },
        {
            path:'anxious',
            name:'anxious',
            component: () => import('@/view/HomeView/Topic/TopicRoutes/Test.vue'),
            meta: {
                title: '焦虑'
            }
        },
        {
            path:'depressed',
            name:'depressed',
            component: () => import('@/view/HomeView/Topic/TopicRoutes/Test.vue'),
            meta: {
                title: '抑郁'
            }
        },
        {
            path:'promotion',
            name:'promotion',
            component: () => import('@/view/HomeView/Topic/TopicRoutes/Test.vue'),
            meta: {
                title: '自我提升'
            }
        },
        {
            path:'traveling',
            name:'traveling',
            component: () => import('@/view/HomeView/Topic/TopicRoutes/Test.vue'),
            meta: {
                title: '旅行'
            }
        },
        {
            path:'learning',
            name:'learning',
            component: () => import('@/view/HomeView/Topic/TopicRoutes/Test.vue'),
            meta: {
                title: '学习'
            }
        },
        {
            path:'working',
            name:'working',
            component: () => import('@/view/HomeView/Topic/TopicRoutes/Test.vue'),
            meta: {
                title: '工作'
            }
        },
        {
            path:'socialContact',
            name:'socialContact',
            component: () => import('@/view/HomeView/Topic/TopicRoutes/Test.vue'),
            meta: {
                title: '社交'
            }
        },
        {
            path:'film',
            name:'film',
            component: () => import('@/view/HomeView/Topic/TopicRoutes/Test.vue'),
            meta: {
                title: '电影'
            }
        },
        {
            path:'music',
            name:'music',
            component: () => import('@/view/HomeView/Topic/TopicRoutes/Test.vue'),
            meta: {
                title: '音乐'
            }
        },
        {
            path:'drawing',
            name:'drawing',
            component: () => import('@/view/HomeView/Topic/TopicRoutes/Test.vue'),
            meta: {
                title: '绘画'
            }
        },
        {
            path:'literature',
            name:'literature',
            component: () => import('@/view/HomeView/Topic/TopicRoutes/Test.vue'),
            meta: {
                title: '文学'
            }
        },
        {
            path:'soulSoother',
            name:'soulSoother',
            component: () => import('@/view/HomeView/Topic/TopicRoutes/Test.vue'),
            meta: {
                title: '心灵鸡汤'
            }
        },
        {
            path:'inspiringStory',
            name:'inspiringStory',
            component: () => import('@/view/HomeView/Topic/TopicRoutes/Test.vue'),
            meta: {
                title: '励志故事'
            }
        },
        {
            path:'socialEvent',
            name:'socialEvent',
            component: () => import('@/view/HomeView/Topic/TopicRoutes/Test.vue'),
            meta: {
                title: '社会事件'
            }
        },
        {
            path:'eventComment',
            name:'eventComment',
            component: () => import('@/view/HomeView/Topic/TopicRoutes/Test.vue'),
            meta: {
                title: '时事评论'
            }
        }
    ]
}

export default Topic