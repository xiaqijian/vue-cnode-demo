<template>
  <div>
     <div>哈哈哈哈你好{{mesg}}</div>
     <div class="rightauthor">
        <div>作者：</div>
        <div>
           ddddddddddddd
        </div>
     </div>
     <div class="topictit bg">
        <h3>{{items.title}}</h3>
        <div>
           <el-row :gutter="2">
            <el-col :span="4"><div class="grid-content bg-purple">作者：{{items.author.loginname}}</div></el-col>
            <el-col :span="4"><div class="grid-content bg-purple">发布于{{changeTime(items.create_at)}}</div></el-col>
            <el-col :span="3"><div class="grid-content bg-purple">{{items.visit_count}}次浏览，</div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple">最近的一次编辑{{changeTime(items.last_reply_at)}}</div></el-col>
            </el-row>
        </div>
     </div>
     <div v-html="content" class="content bg">
     </div>
     <replies :replies="repliesbox" :authorid="authorid1"></replies>
  </div>
  
</template>

<script>
import replies from './replies'

export default {
   data () {
     return {
        mesg: "i am topic",
        content:"",
        repliesbox:"",
        items:{
            "author": {
                "loginname":""
            }
        },
        authorid1:""
     }
   },
   filters: {
      getTimes (time) {
         console.log(this)
         let str = this.$moment("20111031", "YYYYMMDD").fromNow();
         return str;
      }
   },
   components: {
      replies
   },
   mounted () {
       console.log(this.$route.params.id);
       let id = this.$route.params.id;
       let self = this;
       let url = "https://cnodejs.org/api/v1/topic/"+id;
       console.log(url)
       console.log(this.changeTime('19931110'))
        this.axios.get(url)
        .then(function (response) {
            console.log(response.data.data);
            self.items = response.data.data;
            self.content = response.data.data.content;
            self.repliesbox = response.data.data.replies;
            self.authorid1 = response.data.data.author.loginname;
            console.log(9999)
            console.log(self.repliesbox)
            console.log(self.items)
        })
        .catch(function (error) {
            console.log(error);
        });
   }
}
</script>

<style>
.rightauthor {
    float:right;
    background:#fff;
    padding:10px;
}
.content {

   
}
.content img {
    width:60%;
}
.topictit {
    padding:10px;
    border-bottom:1px solid #efefef;
}
</style>

