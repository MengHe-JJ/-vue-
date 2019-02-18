
const Request=function(Vue){
    Vue.$http.get("../../static/books.json").then((res)=>{
      res.data.books.forEach((item)=>{
        Vue.$set(item,'isActive',false)
      })
      res.data.boyBook.forEach((item)=>{
        Vue.$set(item,'isActive',false)
      })
      res.data.girlbooks.forEach((item)=>{
        Vue.$set(item,'isActive',false)
      })
      res.data.books[0].isActive=true;
      res.data.boyBook[0].isActive=true;
      res.data.girlbooks[0].isActive=true;
      Vue.$store.commit('setbook',res.data.books)
      Vue.$store.commit('setboy',res.data.boyBook)
      Vue.$store.commit('setgirl',res.data.girlbooks)
      Vue.$store.commit("setLook",res.data.looks)

    },(res)=>{
        console.log(res,"响应错误")
    })
}
const sortKey=function(array){
  let i=array.length;
  while(i){
    i--;
    let j=Math.floor(Math.random()*i);
    [array[j],array[i]]=[array[i],array[j]];
  }
  return array;
}
const showHide=function(arr,index){
  arr.forEach((item)=>{
      item.isActive=false
  })
  arr[index].isActive=true
}
export {showHide,sortKey,Request}
