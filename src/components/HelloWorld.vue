<template>
  <avue-crud
      :data="data"
      :option="option"
  >
    <template #name="scope">
      <el-tag>{{ scope }}</el-tag>
    </template>
    <template #nameSearch="scope">
      <el-tag>{{ scope }}</el-tag>
    </template>
    <template #nameHeader="scope">
      <el-tag>{{ scope }}</el-tag>
    </template>
    <template #nameForm="scope">
      <el-tag>{{ scope }}</el-tag>
    </template>
    <template #nameLabel="scope">
      <span>姓名&nbsp;&nbsp;</span>
      <el-tooltip
          class="item"
          effect="dark"
          content="文字提示"
          placement="top-start"
      >
        <i class="el-icon-warning" />
      </el-tooltip>
    </template>
    <template #nameError="{error}">
      <p style="color:green">
        自定义提示
      </p>
    </template>
  </avue-crud>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'Brand',
  setup() {
    const data = ref([
      {
        name: '张三',
        sex: '男',
      }, {
        name: '李四',
        sex: '女',
      },
    ])
    const option = ref({
      page: false,
      align: 'center',
      menuAlign: 'center',
      column: [
        {
          label: '姓名',
          prop: 'name',
          search: true,
          rules: [{
            required: true,
            message: '请输入姓名',
            trigger: 'blur',
          }],
        },
        {
          label: '性别',
          prop: 'sex',
        },
      ],
    })

    return {
      data,
      option,
    }
  },
})
</script>
