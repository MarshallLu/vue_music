const axios = require('axios');

// export function getMusicData(){
//      axios.get('/musicData').then((response)=>{
//       console.log(response)
//     },(err)=>{
//       console.log(err)
//     })
// }

export const getMusicData = () => {
      axios.get('/musicData').then((response)=>{
        console.log(response)
      },(err)=>{
        console.log(err)
      })
}

export const getAlbumData = () => {
     axios.get('/albumData').then((response)=>{
      console.log(response)
    },(err)=>{
      console.log(err)
    })
}



// requestData.js
