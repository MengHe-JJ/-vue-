<template>
</template>
<script>
    export default{
        mounted:function(){
            this.$http.get("../../static/books.json").then((res)=>{
                this.$store.commit('setbook',res.data.books)
                this.$store.commit('setboy',res.data.boyBook)
                this.$store.commit('setgirl',res.data.girlbooks)

            },(res)=>{
                console.log(res,"响应错误")
            })
        }
    }
</script>