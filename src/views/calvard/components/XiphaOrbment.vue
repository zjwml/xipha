<template>
  <div>
    <CurcuitSelectDialog :visible="formData.backpackVisible" :circuitList="props.circuitList"
      :slotSelect="formData.slotSelect" @close-dialog="closeSelectDialog" />
    <div class="xipha-orbment">
      <t-card style="margin-bottom: 20px;" v-for="(linkItem, index) in chainList" :key="index" :title="linkItem.name">
        <template #actions>
          <t-button theme="danger" variant="outline" @click="onClickClear(linkItem)"
            style="margin-right: 10px;">清空</t-button>
          <t-button theme="primary" @click="onClickShowShadow(linkItem)">晶片技能</t-button>
        </template>
        <t-form ref="form" :data="formData" label-width="120px" layout="inline" scroll-to-first-error="smooth"
          class="form-slot">
          <template v-for="(pos, j) in [index * 4, index * 4 + 1, index * 4 + 2, index * 4 + 3]" :key="j">
            <t-form-item :name="linkItem.name + pos">
              <template #label>
                <t-select v-model="localSlotList[pos].type" @change="onChangeSlotType(pos)">
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
                <div :class="'circuit-icon-text-' + props.slotList[pos].type">{{ props.circuitList[pos].name }}
                </div>
              </div>
            </t-form-item>
          </template>
        </t-form>
      </t-card>
    </div>
  </div>
</template>
<script setup>
import { reactive, defineEmits, watch, inject } from 'vue';

import { chainList, circuitMap, circuitType } from "@/assets/data/circuit";
import CurcuitSelectDialog from './CircuitSelectDialog.vue';

const emit = defineEmits(["change-slot", "show-shadow", "clear-link", "change-circuit"]);

const allCircuit = inject("backpack")

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
  slotList: {
    type: Array,
    default: () => []
  },
})

const localSlotList = reactive([...props.slotList]);

watch(() => props.slotList, (newVal) => {
  localSlotList.splice(0, localSlotList.length, ...newVal);
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
  slotSelect: {
    type: "all",
    name: "无限定",
    index: -1,
    linkId: 0
  },
})

// 当槽位类型改变时，触发父组件的 change-slot 事件
const onChangeSlotType = (pos) => {
  emit("change-slot", pos)
}
// 当点击回路时，显示对话框并设置选中的槽位信息
const onClickCircuit = (circuitIndex, linkItem) => {
  formData.backpackVisible = true;
  formData.slotSelect = {
    name: circuitMap[props.slotList[circuitIndex].type],
    type: props.slotList[circuitIndex].type,
    index: circuitIndex,
    linkId: linkItem.id
  };
};
// 当点击显示晶片技能时，触发父组件的 show-shadow 事件
const onClickShowShadow = (linkItem) => {
  emit("show-shadow", linkItem);
};
// 关闭选择对话框，如果是选择的结晶孔，则更新回路
const closeSelectDialog = (ctx) => {
  if (typeof ctx === "string") {
    //选择的结晶孔
    const slot = formData.slotSelect;
    //这个是新的回路
    const circuit = allCircuit[parseInt(ctx) - 1];

    emit("change-circuit", circuit, slot.index);
  }

  formData.backpackVisible = false;
}
// 清除链路上的回路
const onClickClear = (linkItem) => {
  let position = linkItem.id;

  emit("clear-link", position);
};

</script>
<style scoped lang='scss'>
@import url("./style/XiphaOrbment.scss");
</style>
