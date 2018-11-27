const Mock = require('mockjs')

export const musicData = Mock.mock('/musicData',{
  'song':[
    {
      'mid': 1,
      'songs': '父亲写的散文诗',
      'singer': '许飞',
      'album': '父亲写的散文诗',
      'msrc': 'xufei.mp3'
    },
    {
      'mid': 2,
      'songs': '我喜欢上你时的内心活动',
      'singer': '陈绮贞',
      'album': '我喜欢上你时的内心活动',
      'msrc': 'woxihuanni.mp3'
    },
    {
      'mid': 3,
      'songs': '可乐',
      'singer': '赵紫骅',
      'album': '赵浴辰原创demo精选',
      'msrc': 'kele.mp3'
    },
    {
      'mid': 4,
      'songs': '恋恋风尘',
      'singer': '程璧',
      'album': '恋恋风尘',
      'msrc': 'lianlianfengcheng.mp3'
    },
    {
      'mid': 5,
      'songs': '别送我',
      'singer': '陈鸿宇',
      'album': '别送我',
      'msrc': 'biesongwo.mp3'
    }
  ]

})

export const albumData = Mock.mock('/albumData',{
  'song|5':[
    {
      'mid|+1': 1,
      'songs': '@cword(2,4)',
      'singer': '@cname',
      'album': '@cword(4,6)'
    }
  ]

})









// Mock.setup({
//   timeout: 3000
// })

// MockData.js
