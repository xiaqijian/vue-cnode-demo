<template>
  <div class="cnodelogin">
     <div>哈哈哈哈你好{{mesg}}</div>
     <el-alert
    title="不能为空"
    type="error"
    show-icon v-show="showB">
  </el-alert>
     <div style="width:400px;margin:20px;">
       <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="accessToken">
                <el-input v-model="form.name" @focus="keyfocus"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">立即登录</el-button>
                <el-button>取消</el-button>
            </el-form-item>
        </el-form>
     </div>
  </div>
  
</template>

<script>
export default {
   data () {
     return {
        mesg: "i am login",
        form: {
          name: ''
        },
        showB: false
     }
   },
   methods: {
      onSubmit() {
        let self = this;
        let key = this.form.name;
        console.log(this.form)
        if(key ==""){
            self.showB = true;
            return false;
        }
        console.log('submit!');
        self.axios.post('https://cnodejs.org/api/v1/accesstoken',{
            accesstoken:key
        })
        // 050b9ecb-8b41-4df9-8b6e-d9ab9ace033c
        .then(function (response) {
            localStorage.setItem('cnodeInfo',JSON.stringify(response.data));
            localStorage.setItem('cnodeKey',key);
            self.$store.commit('changelogin');
            // console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
      },
      keyfocus () {
          this.showB = false;
          // console.log(333)
      }
    }
}
</script>

<style>
.cnodelogin {
    background:#fff;
    padding:10px;
}
</style>
