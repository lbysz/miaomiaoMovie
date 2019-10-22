<template>
  <div class="div-big">
    <div class="center-box b">
      <!-- ref是一个api 结合$refs来使用的 也可以理解为获取了整个form表单里面的信息 -->
      <!-- :model 是属性绑定 现在绑定的是el-input框里面的值 -->
      <el-form :model="loginForm" label-width="80px" class="el-form" ref="loginFormRef">
        <!-- 每一项 -->
        <el-form-item label="用户" prop="username">
          <!-- v-model 是双向数据绑定 可以针对 input textarea... -->
          <el-input v-model="loginForm.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="loginForm.password"></el-input>
        </el-form-item>
        <!-- 按钮 -->
        <el-form-item class="el-form-item-btn">
          <el-button type="primary" @click="submitForm()">登录</el-button>
          <el-button @click="resetForm()">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginForm: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    // 登录按钮
    submitForm() {
      this.$router.push("/home");
    },
    // 重置
    resetForm() {
      this.$refs.loginFormRef.resetFields();
    }
  }
};
</script>

<style lang="less" scoped>
.div-big {
  width: 100%;
  height: 100%;
  overflow: hidden;

  .center-box {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    width: 394px;
    height: 206px;
    padding-top: 30px;
    padding-right: 25px;
  }
}
// 第三方
.center-box /deep/ .el-form {
  margin-left: -20px;
}
.center-box /deep/ .el-form-item-btn {
  float: right;
}
</style>