<template>
  <div>
    <t-dialog :visible="visible" header="请选择结晶回路" :footer="false" width="50%" :show-all-levels="false"
      :on-close="closeDialog">
      <t-cascader v-model="formData.circuitSelectIndex" :options="circuitOptions" @change="closeDialog">
        <template #option="{ item }">
          <t-tooltip :content="getCircuitAffect(item)">
            <div class="circuit-option">
              <div class="circuit-option-text-container">
                <div class="diamond-container">
                  <div :class="'diamond-' + item.type"></div>
                  <div :class="'inner-diamond-' + item.type"></div>
                </div>
                <div class="circuit-option-text">{{ getCircuitName(item) }}</div>
              </div>
              <div class="shadow-cost" v-if="getCircuitCost(item).length > 0">
                <div class="cost" v-if="getCircuitCost(item).length > 1">
                  <div :class="'cost-type-container-' + getCircuitCost(item)[1].type">
                    <div :class="'cost-type-' + getCircuitCost(item)[1].type">
                      {{ circuitMap[getCircuitCost(item)[1].type] }}
                    </div>
                  </div>
                  <div class="cost-text">{{ getCircuitCost(item)[1].price }}</div>
                </div>
                <div class="cost">
                  <div :class="'cost-type-container-' + getCircuitCost(item)[0].type">
                    <div :class="'cost-type-' + getCircuitCost(item)[0].type">
                      {{ circuitMap[getCircuitCost(item)[0].type] }}
                    </div>
                  </div>
                  <div class="cost-text">{{ getCircuitCost(item)[0].price }}</div>
                </div>
              </div>
            </div>
          </t-tooltip>

        </template>
      </t-cascader>
    </t-dialog>
  </div>
</template>
<script setup>
import { computed, reactive, defineEmits, onMounted } from 'vue';
import axios from 'axios';

import { chainList, circuitType, circuitMap } from "@/assets/data/circuit";
import { useVersionStore } from "@/store";

const store = useVersionStore();

const allCircuit = reactive([]);

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
  slotSelect: {
    type: Object,
    default: () => { }
  },

})

const formData = reactive({
  circuitSelectIndex: "",
})

const getCircuitCost = (circuit) => {
  if (/^\d+$/.test(circuit.value)) {
    return JSON.parse(circuit.label).cost;
  } else {
    return [];
  }
}

const getCircuitName = (circuit) => {
  if (/^\d+$/.test(circuit.value)) {
    return JSON.parse(circuit.label).name;
  } else {
    return circuit.label;
  }
}

const getCircuitAffect = (circuit) => {
  if (/^\d+$/.test(circuit.value)) {
    return JSON.parse(circuit.label).affect;
  } else {
    return circuit.label;
  }
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
    const { slotSelect } = props;

    const { linkId, type: selectedType } = slotSelect;
    const excludedNames = chainList[linkId]?.excludedNames || [];

    // 过滤条件：根据linkId和circuit的name
    if (excludedNames.some(excludedName => name.includes(excludedName))) {
      return true;
    }

    // 如果选择了特定类型，则只考虑该类型的circuit
    if (selectedType !== "all" && selectedType !== type) {
      return true;
    }

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
          label: JSON.stringify(circuit),
          value: circuit.id,
          type: circuit.type,
          cost: circuit.cost
        });
      }
    }
  });

  // 如果选择了特定类型，则只返回该类型的对象（可能需要额外逻辑处理，这里简单处理为返回第一个）  
  if (props.slotSelect.type !== "all") {
    result = [{
      label: props.slotSelect.name,
      value: props.slotSelect.type,
      type: props.slotSelect.type,
      children: [],
    }];

    // 重新填充子对象（仅针对所选类型）  
    allCircuit.forEach(circuit => {
      if (props.slotSelect.type === circuit.type && !isTypeFiltered(circuit)) {
        result[0].children.push({
          label: JSON.stringify(circuit),
          value: circuit.id,
          type: circuit.type,
          cost: circuit.cost
        });
      }
    });
  }

  return result;
});

const emit = defineEmits(["close-dialog"]);
const closeDialog = (ctx) => {
  formData.circuitSelectIndex = null;
  emit("close-dialog", ctx);
}

onMounted(() => {
  const version = store.version;
  axios.get(`data/${version}_circuit.json`).then(res => {
    const data = res.data;
    for (let i = 0; i < data.length; i++) {
      allCircuit.push(data[i]);
    }
  })
})

</script>
<style scoped lang='scss'>
@import url("./style/CircuitSelectDialog.scss");
</style>

<style>
.t-cascader__panel.t-cascader--normal {
  height: 320px !important;
}

.t-cascader__menu {
  width: 250px !important;
}

.t-cascader__item {
  height: 40px !important;
}
</style>