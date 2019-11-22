<template>
  <div class="dingding-form">
    <h1>钉钉表单</h1>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="名称">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="电话">
        <el-input v-model="form.mobile"></el-input>
      </el-form-item>
      <el-form-item label="电话">
        <el-input v-model="form.content"></el-input>
      </el-form-item>
      <el-button type="primary" @click="onSubmit">发送数据</el-button>
    </el-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        // 自定义数据传入content,可以任意取名
        name: '',
        mobile: '',
        content: ''
      },
      user: {
        ip: '',
        adress: ''
      }
    }
  },
  created () {
    // 页面加载完成获取用户IP
    this.getIp()
  },
  methods: {
    async onSubmit () {
      // 提交参数
      const data = {
        // 消息类型，参考钉钉机器人文档
        msgtype: 'text',
        text: {
          // 显示在钉钉消息框的内容
          content: `
阿里云提交信息
用户名：${this.form.name}
用户手机号：${this.form.mobile}
用户内容：${this.form.content}
用户IP：${this.user.ip}
用户地址：${this.user.adress}
          `
        }
      }
      const res = await this.$http.post(this.HOST + '/send', data)
      if (res.data.errcode !== 0) {
        // 报错信息
        return this.$message.error(res.data.errmsg)
      }
      // 成功返回信息
      this.$message.success('数据提交成功')
    },
    getIp () {
      // returnCitySN在静态index.html里引入
      // http://pv.sohu.com/cityjson?ie=utf-8
      var cip = window.returnCitySN['cip']
      var cname = window.returnCitySN['cname']
      this.user.ip = cip
      this.user.adress = cname
    }
  }
}
</script>

<style scoped>
.dingding-form {
  background:  #fff;
  position: absolute;
  padding: 2rem 2rem 4rem 2rem;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  box-shadow: 0px 0px 10px rgba(36, 157, 175, 0.6);
}
.el-form {
  min-width: 250px;
}
h1{
  text-align: center
}
.el-button {
  position: absolute;
  left: 50%;
  transform: translate(-50%)
}
</style>
