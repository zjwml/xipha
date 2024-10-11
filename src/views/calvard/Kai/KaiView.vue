<!--
 * @Autor: zhenjun
 * @Date: 2024-09-30 14:08:31
 * @LastEditors: zhenjun
 * @LastEditTime: 2024-09-30 15:59:11
 * @Description: 
-->
<template>
  <t-space direction="vertical" size="large">
    <t-card :title="linkNames.weapon">
      <t-form ref="form" :data="formData" label-width="120px" :layout="formData.layout" scroll-to-first-error="smooth"
        @reset="onReset" @submit="onSubmit">
        <t-form-item name="name">
          <template #label>
            <t-select>
              <t-option style="color:red" v-for="item in orbmentTypeOptions" :key="item.key" :label="item.name"
                value="item.key">
              </t-option>
            </t-select>
          </template>
          <!-- 单选，使用 valueDisplay 插槽定义选中的某一项的内容，也可使用同名渲染函数 props.valueDisplay -->
          <t-select-input :value="formData.name" placeholder="请选择" clearable auto-width allow-input>
            <template #panel>
              <ul class="tdesign-demo__select-input-ul-autocomplete">
                <li v-for="item in options" :key="item">
                  {{ item }}
                </li>
              </ul>
            </template>
          </t-select-input>
        </t-form-item>

        <t-form-item label="全属性" name="name">
          <t-input v-model="formData.name"></t-input>
        </t-form-item>

        <t-form-item label="全属性" name="name">
          <t-input v-model="formData.name"></t-input>
        </t-form-item>

        <t-form-item label="全属性" name="password">
          <t-input v-model="formData.password" type="password"></t-input>
        </t-form-item>
      </t-form>
    </t-card>
  </t-space>
</template>
<script setup>
import { reactive } from "vue";

const orbmentTypeOptions = [{
  "key": "earth",
  "name": "地限定",
}, {
  "key": "water",
  "name": "水限定",
}, {
  "key": "fire",
  "name": "火限定",
}, {
  "key": "wind",
  "name": "风限定",
}, {
  "key": "time",
  "name": "时限定",
}, {
  "key": "gold",
  "name": "空限定",
}, {
  "key": "silver",
  "name": "幻限定",
}]

const linkNames = {
  weapon: "武器链",
  shield: "防御链",
  magic: "魔法链",
  ex: "ex链",
};

// const OPTIONS = [
//   "Student A",
//   "Student B",
//   "Student C",
//   "Student D",
//   "Student E",
//   "Student F",
// ];

const formData = reactive({
  layout: "inline",
  name: "",
  password: "",
});
</script>
<style scoped lang="scss"></style>
