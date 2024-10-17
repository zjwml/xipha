<template>
  <div>
    <t-space direction="vertical" size="large">
      <t-card v-for="(linkItem, index) in linkList" :key="index" :title="linkItem.name">
        <template #actions>
          <t-button theme="danger" variant="outline" @click="onClickClear(linkItem)"
            style="margin-right: 10px;">清空</t-button>
          <t-button theme="primary" @click="onClickShowShadow(linkItem)">晶片技能</t-button>
        </template>
        <t-form ref="form" :data="formData" label-width="120px" layout="inline" scroll-to-first-error="smooth">
          <template v-for="(pos, j) in [index * 4, index * 4 + 1, index * 4 + 2, index * 4 + 3]" :key="j">
            <t-form-item :name="linkItem.name + pos">
              <template #label>
                <t-select v-model="formData.holeList[pos].type"
                  :style="formData.holeList[pos].type ? 'color:' + circuitColor[formData.holeList[pos].type] : ''"
                  @change="onChangeHoleType(pos)">
                  <t-option v-for="item in circuitType" :key="item.key" :style="'color:' + item.color"
                    :label="item.name" :value="item.key">
                  </t-option>
                </t-select>
              </template>
              <div class="circuit" @click="onClickCircuit(pos, linkItem)">
                <div class="diamond-container">
                  <div :class="'diamond-' + formData.circuitList[pos].type"></div>
                  <div :class="'inner-diamond-' + formData.circuitList[pos].type"></div>
                </div>
                <div class="circuit-icon-text">{{ formData.circuitList[pos].name }}</div>
              </div>
            </t-form-item>
          </template>
        </t-form>
      </t-card>
    </t-space>
  </div>
</template>
<script setup>
import { computed, reactive, onBeforeMount } from 'vue';
import { linkList, circuitMap, circuitColor, circuitType } from "@/assets/data/circuit";

const props = defineProps({
  /**
   * 链子数组
   */
  linkLink: {
    type: Array,
    default: () => []
  }
})

const formData = reactive({
  /**
   * 装配回路列表
   */
  circuitList: [],
  /**
   * 结晶孔列表，与回路表对应，主要用来放限制类型
   */
  holeList: []
})

/**
 * 获得一个行的结晶孔/回路
 */
const getNewCircuit = () => {
  return {
    type: "none",
    name: "请选择",
    cost: [{
      type: "none",
      price: 0
    }]
  };
}

onBeforeMount(() => {
  for (let i = 0; i < 16; i++) {
    formData.holeList.push({
      type: "all",
      name: "通用孔",
    });
  }

  for (let i = 0; i < 16; i++) {
    formData.circuitList.push(getNewCircuit());
  }
});
</script>
<style scoped lang='scss'>
@import url("./style/XiphaOrbment.scss");
</style>
