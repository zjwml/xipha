<template>
  <div>
    <t-dialog :visible="visible" header="请选择结晶回路" :footer="false" width="60%" :show-all-levels="false">
      <t-cascader v-model="formData.circuitSelectIndex" :options="circuitOptions"
        @change="(ctx) => $emit('close-dialog', ctx)">
        <template #option="{ item }">
          <div class="circuit-option">
            <div class="diamond-container">
              <div :class="'diamond-' + item.cost[0].type"></div>
              <div :class="'inner-diamond-' + item.cost[0].type"></div>
            </div>
            <div class="diamond-text">{{ item.cost[0].price }}</div>
            <div class="diamond-container" v-if="item.cost.length > 1">
              <div :class="'diamond-' + item.cost[1].type"></div>
              <div :class="'inner-diamond-' + item.cost[1].type"></div>
            </div>
            <div class="diamond-text" v-if="item.cost.length > 1">{{ item.cost[1].price }}</div>
            <div class="circuit-option-text">{{ item.label }}</div>
          </div>
        </template>
      </t-cascader>
    </t-dialog>
  </div>
</template>
<script setup>
import { computed, reactive } from 'vue';
import { circuitType } from "@/assets/data/circuit";
import allCircuit from "@/assets/data/kuro2_circuit.json";

const props = defineProps({
  //是否显示
  visible: {
    type: Boolean,
    default: false
  },
  circuitList: {
    type: Array,
    default: () => []
  },
  linkId: {
    type: Number,
    default: 0
  },
  holeSelect: {
    type: Object,
    default: () => { }
  },

})

const formData = reactive({
  circuitSelectIndex: "",
})

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
    const { linkId, holeSelect } = props;

    // 过滤条件：根据linkId和circuit的name/type  
    if (linkId === 0 && (name.includes("轮") || name.includes("诗"))) return true;
    if (linkId === 1 && (name.includes("刃") || name.includes("诗"))) return true;
    if (linkId === 2 && (name.includes("轮") || name.includes("刃"))) return true;

    // 如果选择了特定类型，则只考虑该类型的circuit  
    if (holeSelect.type !== "all" && holeSelect.type !== type) return true;

    // 过滤已经使用过的circuit  
    return props.circuitList.some(used => used.id === circuit.id);
  };

  // 遍历allCircuit，根据条件填充result数组的子对象  
  allCircuit.forEach(circuit => {
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
  if (formData.holeSelect.type !== "all") {
    result = [{
      label: formData.holeSelect.name,
      value: formData.holeSelect.type,
      type: formData.holeSelect.type,
      children: [],
    }];

    // 重新填充子对象（仅针对所选类型）  
    allCircuit.forEach(circuit => {
      if (formData.holeSelect.type === circuit.type && !isTypeFiltered(circuit)) {
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

</script>
<style scoped lang='scss'>
@import url("./style/CurcuitSelectDialog.scss");
</style>
