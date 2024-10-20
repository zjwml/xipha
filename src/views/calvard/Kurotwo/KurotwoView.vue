<!--
 * @Autor: zhenjun
 * @Date: 2024-09-30 14:08:31
 * @LastEditors: zhenjun
 * @LastEditTime: 2024-09-30 15:59:11
 * @Description: 
-->
<template>
  <div>
    <t-dialog v-model:visible="formData.backpackVisible" header="请选择结晶回路" :footer="false" width="60%"
      :show-all-levels="false">
      <t-cascader v-model="formData.circuitSelectIndex" :options="circuitOptions" @change="onConfirmCircuit">
        <template #option="{ item }">
          <div class="circuit-option">
            <div class="diamond-container">
              <div :class="'diamond-' + item.type"></div>
              <div :class="'inner-diamond-' + item.type"></div>
            </div>
            <div class="circuit-option-text">{{ item.label }}</div>
          </div>
        </template>
      </t-cascader>
    </t-dialog>

    <ShadowSkillDialog :shadowSkillVisible="formData.shadowSkillVisible" :shadowType="formData.shadowType"
      :skillList="skillList" :slotList="formData.slotList" :circuitList="formData.circuitList"
      @close-dialog="formData.shadowSkillVisible = false" />

    <t-space direction="vertical" size="large">
      <t-card v-for="(linkItem, index) in chainList" :key="index" :title="linkItem.name">
        <template #actions>
          <t-button theme="danger" variant="outline" @click="onClickClear(linkItem)"
            style="margin-right: 10px;">清空</t-button>
          <t-button theme="primary" @click="onClickShowShadow(linkItem)">晶片技能</t-button>
        </template>
        <t-form ref="form" :data="formData" label-width="120px" layout="inline" scroll-to-first-error="smooth">
          <template v-for="(pos, j) in [index * 4, index * 4 + 1, index * 4 + 2, index * 4 + 3]" :key="j">
            <t-form-item :name="linkItem.name + pos">
              <template #label>
                <t-select v-model="formData.slotList[pos].type"
                  :style="formData.slotList[pos].type ? 'color:' + circuitColor[formData.slotList[pos].type] : ''"
                  @change="onChangeSlotType(pos)">
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
import ShadowSkillDialog from "../components/ShadowSkillDialog.vue";
import { reactive, onBeforeMount, onMounted, computed } from "vue";
import { chainList, circuitMap, circuitColor, circuitType } from "@/assets/data/circuit";
import circuitList from "@/assets/data/kuro2_circuit.json";
import skillList from "@/assets/data/kuro2_skill.json";

const formData = reactive({
  backpackVisible: false,
  shadowSkillVisible: false,
  shadowType: 0,
  circuitSelectIndex: "",
  /**
   * 选择的结晶孔
   */
  slotSelect: {
    type: "all",
    name: "无限定",
    index: -1,
    linkId: ""
  },
  slotList: [],
  circuitList: [],
});

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

const circuitOptions = computed(() => {
  // 初始化结果数组，包含7种类型的空对象（假设circuitType数组长度固定为8，且第一个元素不使用）
  const typeAvaliableList = circuitType.slice(2);
  let result = typeAvaliableList.map(type => ({
    label: type.name,
    value: type.key,
    type: type.key,
    children: []
  }));

  const isTypeFiltered = (circuit) => {
    const { name, type } = circuit;
    const { linkId, slotSelect } = formData;

    // 过滤条件：根据linkId和circuit的name/type  
    if (linkId === 0 && (name.includes("轮") || name.includes("诗"))) return true;
    if (linkId === 1 && (name.includes("刃") || name.includes("诗"))) return true;
    if (linkId === 2 && (name.includes("轮") || name.includes("刃"))) return true;

    // 如果选择了特定类型，则只考虑该类型的circuit  
    if (slotSelect.type !== "all" && slotSelect.type !== type) return true;

    // 过滤已经使用过的circuit  
    return formData.circuitList.some(used => used.id === circuit.id);
  };

  // 遍历circuitList，根据条件填充result数组的子对象  
  circuitList.forEach(circuit => {
    if (!isTypeFiltered(circuit)) {
      // 根据circuit的type找到对应的result数组元素，并添加子对象  
      const index = typeAvaliableList.findIndex(type => type.key === circuit.type);
      if (index > -1 && index < result.length) {
        result[index].children.push({
          label: circuit.name,
          value: circuit.id,
          type: circuit.type,
          cost: circuit.cost
        });
      }
    }
  });

  // 如果选择了特定类型，则只返回该类型的对象（可能需要额外逻辑处理，这里简单处理为返回第一个）  
  if (formData.slotSelect.type !== "all") {
    result = [{
      label: formData.slotSelect.name,
      value: formData.slotSelect.type,
      type: formData.slotSelect.type,
      children: [],
    }];

    // 重新填充子对象（仅针对所选类型）  
    circuitList.forEach(circuit => {
      if (formData.slotSelect.type === circuit.type && !isTypeFiltered(circuit)) {
        result[0].children.push({
          label: circuit.name,
          value: circuit.id,
          type: circuit.type,
          cost: circuit.cost
        });
      }
    });
  }

  return result;
});

const onChangeSlotType = (pos) => {
  formData.circuitList[pos] = getNewCircuit();
}

const onClickCircuit = (circuitIndex, linkItem) => {
  formData.backpackVisible = true;
  formData.slotSelect = {
    name: circuitMap[formData.slotList[circuitIndex].type],
    type: formData.slotList[circuitIndex].type,
    index: circuitIndex,
    linkId: linkItem.id
  };
};
/**
 * 选择完回路的回调函数
 * @param ctx 选择的回路的 id
 */
const onConfirmCircuit = (ctx) => {
  //选择的结晶孔
  const slot = formData.slotSelect;
  //这个是新的回路
  const circuit = circuitList[ctx - 1];

  formData.circuitList[slot.index] = circuit;
  formData.circuitSelectIndex = "";

  formData.backpackVisible = false;
};

const onClickShowShadow = (linkItem) => {
  formData.shadowSkillVisible = true;
  formData.shadowType = linkItem.id;
};

const onClickClear = (linkItem) => {
  let position = linkItem.id;

  for (let i = position * 4; i < position * 4 + 4; i++) {
    formData.circuitList[i] = {
      type: "none",
      name: "请选择",
      index: -1,
    }
  }

};

onBeforeMount(() => {
  for (let i = 0; i < 16; i++) {
    formData.slotList.push({
      type: "all",
      name: "通用孔",
    });
  }

  for (let i = 0; i < 16; i++) {
    formData.circuitList.push(getNewCircuit());
  }
});

onMounted(() => {
  console.log("onMounted");
});
</script>
<style scoped lang="scss">
@import url("@/assets/circuit.scss");
@import url("./KurotwoView.scss");
</style>
