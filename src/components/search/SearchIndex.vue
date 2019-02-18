  <template>
    <div id="search-index">
        <index-header></index-header>
        <div class="conLayout clear">
            <div class="conLeft fl">
                <div class="layout" v-if="searchState">
                    <h1>
                        <span v-if="filterBlogs.length>1">找到{{filterBlogs.length}}条符合</span>
                        <span v-if="filterBlogs.length==0">没有找到符合</span>
                        <span class="bookName">{{searchState}}</span>条件的作品
                    </h1>
                </div>
                <ul class="sResult">
                    <li v-for="blog in filterBlogs">
                        <router-link :to="{path:'/page',query:{intends:blog}}" class="cover fl">
                            <img :src="blog.img" alt="" />
                        </router-link>
                        <div class="bookMess fr">
                            <router-link :to="{path:'/page',query:{intends:blog}}">{{blog.name}}</router-link>
                            <p class="author"> 作者：{{blog.author}}
                            <span class="buyBtn" @click="buyTap(blog)">购买</span>
                            </p>
                            <p class="brief">{{blog.con}}</p>
                        </div>
                    </li>
                </ul>
                <div class="page" style="display:none;">
                    347条记录1/58页
                    <a href="#">下一页</a>
                    <a href="#" class="current">1</a>
                    <a href="#">2</a>
                    <a href="#">3</a>
                    <a href="#">最后一页</a>
                </div>
            </div>
            <div class="conRight fr">
                <div class="layout">
                    <h1>搜索排行</h1>
                </div>
                <ul>
                    <li v-for="list in rankList">
                        <router-link to="/" class="liber">
                            <img :src="list.img" alt="" />
                        </router-link>
                        <div class="bookMess fr">
                            <router-link to="/page">{{list.name}}</router-link>
                            <p class="author">作者：{{list.author}}</p>
                            <p>字数：{{list.wordNum}}字</p>
                            <span class="buyBtn" @click="buyTap(list)">购买</span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <toast :showDis="showTrue" :buyPrice="buyPrix" :bbb="buyBu" @buyhide="buyClose"></toast>
    </div>
</template>
<script>
import IndexHeader from '../IndexHeader'
import Toast from '../common/Toast'
import {Request} from '../../util/common.js'

export default{
    name:"search-index",
    data:function(){
        return{
            blogs:[],
            showTrue:'none',
            buyPrix:"",
            buyBu:''
        }
    },
    components:{
        IndexHeader,
        Toast
    },
    computed:{
        searchState:function(){
            return this.$store.state.searchVal
        },
        rankList:function(){
            return this.$store.state.lookarr
        },
        filterBlogs:function(){
            return this.blogs.filter((blog)=>{
                if(this.searchState==''||this.searchState==null||this.searchState==" "){
                    return ;
                }else{
                    return blog.name.match(this.searchState)
                }

            })
        }
    },
    methods:{
        buyTap:function(el){
            console.log(el,"blogs");
            this.buyPrix=el.price;
            this.buyBu=el.img;
            this.showTrue="block";
        },
        buyClose:function(){
            this.showTrue="none"
        }
    },
    mounted:function(){
        this.$http.get('../../../static/books.json').then((res)=>{
            var bbk=res.data.boyBook;
            var gbk=res.data.girlbooks;
            var lbk=res.data.looks;
            this.blogs=res.data.books.concat(bbk,gbk,lbk);
        })
    },
    created:function(){
        Request(this)
    }
}

</script>
<style>
body{
    background-color:#fff;
}
.conLayout{
    padding-top:22px;
    width:1000px;
    margin:0 auto;
    font-family:"Microsoft yahei";
}
.conLeft{
    width:700px;
    margin-right:15px;
    display:inline-block;
}
.conRight{
    width:250px;
    display:inline-block;
}
.layout{
    border-bottom:2px solid #ee7700;
    margin-bottom:15px;
}
.layout h1{
    color:#383b43;
    font-size:18px;
    height:30px;
    line-height:30px;
    font-weight:normal;
}
.layout h1 .bookName{
    color:#d88049;
    margin:0 5px;
}
.conRight ul{
    padding:20px 0 30px;
}
.conRight li{
    position:relative;
    margin-bottom:28px;
}
.conRight li .liber{
    display:inline-block;
    width:100px;
}
.conRight li .liber img{
    border:1px solid #d1d1d1;
    width:89px;
    height:108px;
    margin:0 11px 0 7px;
    box-shadow:0 2px 8px #ccc;
}
.conRight li .bookMess{
    width:112px;
    padding-top:5px;
}
.bookMess a{
    line-height:18px;
    font-weight:normal;
    color:#333;
}
.conRight li .bookMess a{
    margin-bottom:7px;
    display:block;
    font-size:14px;
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
}
.bookMess p{
   color:#999;
    font-size:12px;
}
.conRight li .bookMess p{
    margin:0;
    overflow:hidden;
}
.bookMess .author{
    line-height:26px;
}
.bookMess .buyBtn{
    cursor:pointer;
    font-size:12px;
    display:inline-block;
    width:60px;
    height:20px;
    color:white;
    text-align:center;
    line-height:20px;
    border-radius:10px;
    background-color:#8e655c;
    margin-top:10px;
}
.sResult li{
    border-bottom:1px  dotted #ccc;
    padding:28px 6px 16px;
}
.sResult li::after{
    content:"";
    height:0;
    display:block;
    visibility:hidden;
    clear:both;
}
.sResult li .cover{
    padding:6px 10px 15px 11px;
    display:inline-block;
    width:104px;
}
.cover img{
    width:104px;
    height:138px;
    box-shadow:0 2px 8px #ccc;
}
.sResult .bookMess{
    width:537px;
    margin-left:0;
}
.sResult .bookMess>a{
    font-size:18px;
    margin-top:10px;
    margin-bottom:10px;
}
.sResult .bookMess p.author{
   margin-bottom:8px;
}
.sResult .bookMess .buyBtn{
    margin-left:100px;
}
.sResult .bookMess .brief{
    color:#666;
    line-height:20px;
    margin-top:20px;
    height:60px;
    overflow:hidden;
    text-overflow:ellipsis;
    display:-wekbit-box;
    -webkit-line-clamp:3;
    -webkit-box-orient:vertical;
}
.page{
    text-align:center;
    margin:22px 0 15px;
    height:30px;
    line-height:30px;
    font-size:14px;
}
.page a{
    display:inline-block;
    color:#999;
    padding:0 6px;
    height:30px;
    line-height:30px;
}
.page a.current{
    color:#d88049;
}
</style>
                if(this.searchState==''||this.searchState===)