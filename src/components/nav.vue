<template>
<div class="cn-nav">
  <div class="cn-navleft">
      <img src="https://o4j806krb.qnssl.com/public/images/cnodejs_light.svg" style=""/>
      <el-input
  placeholder="请输入内容"
  v-model="input10"
  clearable>
</el-input>
  </div>
  <div class="cn-navright">
    <el-menu
      :default-active="$route.path"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      :router="true">
      <el-menu-item index="/">首页</el-menu-item>
      <el-menu-item index="/demo">新手入门</el-menu-item>
      <el-menu-item index="3">API</el-menu-item>
      <el-menu-item index="4">关于</el-menu-item>
      
         <el-menu-item index="/login">{{loginkey}}</el-menu-item>
     
      
    </el-menu>
  </div>
</div>
</template>
<script>
export default {
  data () {
    return {
      activeIndex: '1',
      activeIndex2: '1',
      input10: ''
    }
  },
  mounted () {
    // 状态管理还是很重要的
    // this.loginkey = localStorage.getItem('cnodeKey') == ( "" || null) ? "登录": "你好";
    // console.log(9999);
    // console.log(localStorage.getItem('cnodeKey'))
    // console.log(this.loginkey)
  },
  computed: {
    loginkey () {
      return this.$store.state.loginkey;
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    },
    addCount () {
      this.$store.commit("increment");
    }
  }
}
</script>

<style>
.cn-navleft {
  float:left;
  margin-left:30px;
  margin-top:10px;
  display:flex;
}
.cn-navleft img {
   width:120px;height:34px;
   margin-right:30px;
}
.cn-nav {
  background-color:#545c64;
  overflow: hidden;
}
.cn-navright {
  float:right;
}

</style>

