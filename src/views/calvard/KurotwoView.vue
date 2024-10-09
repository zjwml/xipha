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
      <t-form ref="form" :data="formData" label-width="120px" layout="inline" scroll-to-first-error="smooth">
        <template v-for="index in [0, 1, 2, 3]" :key="index">
          <t-form-item :name="'weapon' + index">
            <template #label>
              <t-select v-model="formData.holeList[index].type"
                :style="formData.holeList[index].type ? 'color:' + orbmentColor[formData.holeList[index].type] : ''">
                <t-option :style="'color:' + item.color" v-for="item in orbmentType" :key="item.key" :label="item.name"
                  :value="item.key">
                </t-option>
              </t-select>
            </template>
            <t-button variant="outline">请选择</t-button>
          </t-form-item>
        </template>
      </t-form>
    </t-card>

    <t-card :title="linkNames.shield">
      <t-form ref="form2" :data="formData" label-width="120px" layout="inline" scroll-to-first-error="smooth">
        <template v-for="index in [4, 5, 6, 7]" :key="index">
          <t-form-item :name="'shield' + index">
            <template #label>
              <t-select v-model="formData.holeList[index].type"
                :style="formData.holeList[index].type ? 'color:' + orbmentColor[formData.holeList[index].type] : ''">
                <t-option :style="'color:' + item.color" v-for="item in orbmentType" :key="item.key" :label="item.name"
                  :value="item.key">
                </t-option>
              </t-select>
            </template>
            <t-button variant="outline">请选择</t-button>
          </t-form-item>
        </template>
      </t-form>
    </t-card>

    <t-card :title="linkNames.magic">
      <t-form ref="form2" :data="formData" label-width="120px" layout="inline" scroll-to-first-error="smooth">
        <template v-for="index in [4, 5, 6, 7]" :key="index">
          <t-form-item :name="'magic' + index">
            <template #label>
              <t-select v-model="formData.holeList[index].type"
                :style="formData.holeList[index].type ? 'color:' + orbmentColor[formData.holeList[index].type] : ''">
                <t-option :style="'color:' + item.color" v-for="item in orbmentType" :key="item.key" :label="item.name"
                  :value="item.key">
                </t-option>
              </t-select>
            </template>
            <t-button variant="outline">请选择</t-button>
          </t-form-item>
        </template>
      </t-form>
    </t-card>

    <t-card :title="linkNames.ex">
      <t-form ref="form2" :data="formData" label-width="120px" layout="inline" scroll-to-first-error="smooth">
        <template v-for="index in [4, 5, 6, 7]" :key="index">
          <t-form-item :name="'ex' + index">
            <template #label>
              <t-select v-model="formData.holeList[index].type"
                :style="formData.holeList[index].type ? 'color:' + orbmentColor[formData.holeList[index].type] : ''">
                <t-option :style="'color:' + item.color" v-for="item in orbmentType" :key="item.key" :label="item.name"
                  :value="item.key">
                </t-option>
              </t-select>
            </template>
            <t-button variant="outline">请选择</t-button>
          </t-form-item>
        </template>
      </t-form>
    </t-card>
  </t-space>
</template>
<script setup>
import { reactive, onBeforeMount } from "vue";
import { orbmentColor, orbmentType } from "@/assets/data/orbment";

const linkNames = {
  weapon: "武器链",
  shield: "防御链",
  magic: "魔法链",
  ex: "ex链",
};

const formData = reactive({
  layout: "inline",
  holeList: [],
  name: "",
  password: "",
});

onBeforeMount(() => {
  for (let i = 0; i < 16; i++) {
    formData.holeList.push({
      type: 'all',
      name: '',
    })
  }
})

</script>
<style scoped lang="scss">
@import url("@/assets/orbment.scss");
</style>
