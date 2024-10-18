<template>
  <div>
    <CurcuitSelectDialog :visible="formData.backpackVisible" :circuitList="props.circuitList"
      :holeSelect="formData.holeSelect" @close-dialog="closeSelectDialog" />
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
                <t-select v-model="localHoleList[pos].type" @change="onChangeHoleType(pos)">
                  <t-option v-for="item in circuitType" :key="item.key" :style="'color:' + item.color"
                    :label="item.name" :value="item.key">
                  </t-option>
                </t-select>
              </template>
              <div class="circuit" @click="onClickCircuit(pos, linkItem)">
                <div class="diamond-container">
                  <div :class="'diamond-' + props.circuitList[pos].type"></div>
                  <div :class="'inner-diamond-' + props.circuitList[pos].type"></div>
                </div>
                <div :class="'circuit-icon-text-' + props.holeList[pos].type">{{ props.circuitList[pos].name }}
                </div>
              </div>
            </t-form-item>
          </template>
        </t-form>
      </t-card>
    </t-space>
  </div>
</template>
<script setup>
import { reactive, defineEmits, onMounted, watch } from 'vue';
import axios from 'axios';

import { linkList, circuitMap, circuitType } from "@/assets/data/circuit";
import CurcuitSelectDialog from './CurcuitSelectDialog.vue';

const emit = defineEmits(["change-hole", "show-shadow", "clear-link", "change-circuit"]);

const allCircuit = reactive([]);

const props = defineProps({
  /**
   * 装配回路列表
   */
  circuitList: {
    type: Array,
    default: () => []
  },
  /**
   * 结晶孔列表，与回路表对应，主要用来放限制类型
   */
  holeList: {
    type: Array,
    default: () => []
  },
})

const localHoleList = reactive([...props.holeList]);

watch(() => props.holeList, (newVal) => {
  localHoleList.splice(0, localHoleList.length, ...newVal);
}, { deep: true });

const formData = reactive({
  selectType: "",
  /**
   * 回路选择是否显示
   */
  backpackVisible: false,
  /**
   * 选择的结晶孔
   */
  holeSelect: {
    type: "all",
    name: "无限定",
    index: -1,
    linkId: 0
  },
})

const onChangeHoleType = (pos) => {
  emit("change-hole", pos)
}

const onClickCircuit = (circuitIndex, linkItem) => {
  formData.backpackVisible = true;
  formData.holeSelect = {
    name: circuitMap[props.holeList[circuitIndex].type],
    type: props.holeList[circuitIndex].type,
    index: circuitIndex,
    linkId: linkItem.id
  };
};

const onClickShowShadow = (linkItem) => {
  emit("show-shadow", linkItem);
};

const closeSelectDialog = (ctx) => {
  if (typeof ctx === "string") {
    //选择的结晶孔
    const hole = formData.holeSelect;
    //这个是新的回路
    const circuit = allCircuit[parseInt(ctx) - 1];

    emit("change-circuit", circuit, hole.index);
  }

  formData.backpackVisible = false;
}

const onClickClear = (linkItem) => {
  let position = linkItem.id;

  emit("clear-link", position);
};

onMounted(() => {
  axios.get(`data/kai_circuit.json`).then(res => {
    const data = res.data;
    for (let i = 0; i < data.length; i++) {
      allCircuit.push(data[i]);
    }
  })
})

</script>
<style scoped lang='scss'>
@import url("./style/XiphaOrbment.scss");
</style>
