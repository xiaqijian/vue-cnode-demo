<template>
  <div class="bg">
    <div class="borderreplies">
       下面是评论区{{mesg}}
    </div>
     <div>
        <div v-for="(item, index) in replies" class="repliescontent">
           <el-row :gutter="10">
                <el-col :span="1"><div class="grid-content bg-purple">
                    <img :src="item.author.avatar_url" class="repliesimg"/>
                </div></el-col>
                <el-col :span="20">
                    <div>{{item.author.loginname}}
                       
                      <span class="repliestime">{{ index+1 }}楼，{{changeTime(item.create_at)}}</span>
                       
                        <span v-if="item.author.loginname == authorid">
                            <el-tag>作者</el-tag>
                        </span>
                        
                    </div>
                    <div class="grid-content bg-purple" v-html="item.content">
                  
                    </div>
                </el-col>
               <el-col :span="2">
                <i class="el-icon-star-on"></i>
                {{item.ups.length}}
            </el-col>
            </el-row>
        </div>
     </div>
  </div>
</template>

<script>
export default {
   props: ["replies","authorid"],
   data () {
     return {
        mesg: "i am replies"
     }
   },
   mounted () {
       console.log(888888)
       console.log(this.replies)
   }
}
</script>

<style>
.borderreplies {
    border-top:2px solid #3333;
    padding:10px 0;
}
.repliescontent {
    padding-top:10px;
    border-bottom:1px solid #efefef;
}
.repliesimg {
    width:30px;
    height:30px;
}
.repliestime {
   font-size:12px;
   color:#2d8fdc;
}
</style>

