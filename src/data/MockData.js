const Mock = require('mockjs')

export const musicData = Mock.mock('/musicData',{
  'song':[
    {
      'mid': 1,
      'songs': '诱',
      'singer': '林宥嘉',
      'album': '大小说家'
    },
    {
      'mid': 2,
      'songs': '4号病房',
      'singer': '林宥嘉',
      'album': '大小说家'
    },
    {
      'mid': 3,
      'songs': '勉强幸福',
      'singer': '林宥嘉',
      'album': '大小说家'
    },
    {
      'mid': 4,
      'songs': '飞',
      'singer': '林宥嘉',
      'album': '今日营业中'
    },
    {
      'mid': 5,
      'songs': '我不能忘记你',
      'singer': '林忆莲',
      'album': '我不能忘记你'
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
