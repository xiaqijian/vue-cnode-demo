<template>
  <div class="bg">
     <div class="breadnav">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item>
            <span v-on:click="getTopic('all')" :class="{clickspan, active: tab === 'all'}">全部</span>
          </el-breadcrumb-item>
          <el-breadcrumb-item>
            <span v-on:click="getTopic('good')" :class="{clickspan,active: tab === 'good'}">精华</span>
          </el-breadcrumb-item>
          <el-breadcrumb-item>
             <span v-on:click="getTopic('share')" :class="{clickspan,active: tab === 'share'}">分享</span>
          </el-breadcrumb-item>
          <el-breadcrumb-item>
             <span v-on:click="getTopic('ask')" :class="{clickspan,active: tab === 'ask'}">问答</span>
          </el-breadcrumb-item>
          <el-breadcrumb-item>
              <span v-on:click="getTopic('job')" :class="{clickspan,active: tab === 'job'}">招聘</span>
          </el-breadcrumb-item>
          <el-breadcrumb-item>
              <span v-on:click="getTopic('dev')" :class="{clickspan,active: tab === 'dev'}">客户端测试</span>
          </el-breadcrumb-item>
          
        </el-breadcrumb>
     </div>
    <div class="cn-left">
      <div v-for="(item, index) in items" class="index-item">
        
        <el-row>
          <el-col :span="1">
            <div class="grid-content bg-purple">
             <img class="index-img" :src="item.author.avatar_url"/>
            </div>
          </el-col>
          <el-col :span="2">
            <div class="grid-content bg-purple">
              <span class="index-span">{{item.reply_count}}</span>
              <span class="index-span">/{{ item.visit_count }}</span>
            </div>
          </el-col>
          <el-col :span="2">
            <div class="grid-content bg-purple">
               <el-tag v-if="item.top">置顶</el-tag>
               <el-tag v-else-if="item.good">精华</el-tag>
               <el-tag v-else-if="item.tab == 'share'" type="info">分享</el-tag>
               <el-tag v-else-if="item.tab == 'ask'" type="info">问答</el-tag>
               <span v-else></span>
              
            </div>
          </el-col>
          <el-col :span="13">
          <div class="grid-content bg-purple-light">
          <router-link :to="{name: 'topic',params:{id:item.id}}">{{ item.title }}</router-link>
          </div></el-col>
          <el-col :span="2">
            <div class="grid-content bg-purple">
                {{ changeTime(item.create_at) }}
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="index-page">
      <el-pagination
  @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
  background
  layout="prev, pager, next"
  :total="1000">
</el-pagination>
    </div>
  </div>
  
</template>

<script>
export default {
   data () {
     return {
        mesg: "i am index",
        items:[],
        number:"",
        tab:"all",
        limit:"",
        clickspan:"clickspan"
     }
   },
   mounted () {
     let self = this;
     this.axios.get('https://cnodejs.org/api/v1/topics')
      .then(function (response) {
        console.log(response.data.data);
         self.items = response.data.data;
        console.log(self.items)
      })
      .catch(function (error) {
        console.log(error);
      });
   },
   methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(val)
        this.getTopic(this.tab,val)
        console.log(`当前页: ${val}`);
      },
      getTopic (tab="",number = "",limit="") {
          console.log(333)
          this.tab = tab;
          this.number = number;
          this.limit = limit;
          let self = this;
          this.axios.get('https://cnodejs.org/api/v1/topics?page='+self.number+"&tab="+self.tab+"&limit="+self.limit)
            .then(function (response) {
              console.log(response.data.data);
              self.items = response.data.data;
              console.log(self.items)
            })
            .catch(function (error) {
              console.log(error);
            });
      },
      doThis (val) {
        console.log(val)
        console.log("点击了")
      }
    }

}
</script>

<style>
.breadnav {
  padding:10px 0;
}
.breadnav .clickspan{
  cursor:pointer;
}
.cn-left {
  
}
.index-img {
  width:30px;
  height:30px;
}
.index-span {
  font-size:12px;
}
.index-item {
  padding:6px 2px;
  border-bottom:1px solid #efefef;
}
.index-page {
  margin-top:10px;
}
.active {
  color:#009688;
  font-weight:bold;
}
</style>
