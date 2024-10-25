<template>
  <div class="select-container">
    <t-card title="搜索器">
      <t-form ref="form" :data="formData" label-width="120px" scroll-to-first-error="smooth">
        <t-form-item label="可以开始搜索">
          <t-button @click="onClickSearch">开始搜索</t-button>
        </t-form-item>
        <t-divider></t-divider>
        <t-form-item label="必需回路" prop="circuitRequirements">
          <t-cascader v-model="formData.circuitRequirements" :options="circuitOptions" clearable
            :show-all-levels="false" multiple>
          </t-cascader>
        </t-form-item>
        <t-form-item label="排除回路" prop="circuitExclusions">
          <t-cascader v-model="formData.circuitExclusions" :options="circuitOptions" clearable :show-all-levels="false"
            multiple>
          </t-cascader>
        </t-form-item>
        <t-form-item label="辅助按钮">
          <t-space>
            <t-button @click="onClickPhysics" variant="outline" theme="primary">菜刀必备</t-button>
            <t-button @click="onClickDriver" variant="outline" theme="primary">法师必备</t-button>
            <t-button @click="onClickNoLevel" variant="outline" theme="primary">不要1级回路</t-button>
          </t-space>
        </t-form-item>
      </t-form>
    </t-card>
  </div>
</template>
<script setup>
import { computed, reactive, defineEmits, inject } from 'vue';
import { circuitType } from "@/assets/data/circuit";

const emit = defineEmits(["search", "click-physics", "click-driver"]);

const allCircuit = inject("backpack");

const formData = reactive({
  // 必须回路id列表
  circuitRequirements: [],
  // 不要的回路id列表
  circuitExclusions: [],
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

  // 遍历allCircuit，根据条件填充result数组的子对象  
  allCircuit.forEach(circuit => {
    // 根据circuit的type找到对应的result数组元素，并添加子对象  
    const index = typeAvaliableList.findIndex(type => type.key === circuit.type);
    if (index > -1 && index < result.length) {
      result[index].children.push({
        label: circuit.name,
        value: circuit.id,
        type: circuit.type,
        cost: circuit.cost,
        info: JSON.stringify(circuit),
      });
    }

  });

  return result;
});

const onClickPhysics = () => {
  formData.circuitRequirements = Array.from(new Set([...formData.circuitRequirements, ...[
    "79",
    "43",
    "71",
    "61",
    "89",
    "97"
  ]]));

  emit("click-physics", {
    weapon: ["26"],
    shield: ["46", "48"],
    driver: [],
    extra: ["104", "106", "116"],
  });
}

const onClickDriver = () => {
  formData.circuitRequirements = Array.from(new Set([...formData.circuitRequirements, ...[
    "34",
    "36",
    "61",
    "79",
    "97",
    "115",
  ]]));

  emit("click-driver", {
    weapon: [],
    shield: ["46"],
    driver: ["80",],
    extra: ["106", "116"],
  });
}

const onClickNoLevel = () => {
  // 得到1级回路
  const level1list = allCircuit.filter(circuit => circuit.name.includes("1"));
  for (let i = 0; i < level1list.length; i++) {
    formData.circuitExclusions.push(level1list[i].id);
  }
}

const onClickSearch = () => {
  emit("search", formData);
}

</script>
<style scoped lang='scss'>
@import url("./style/MainSelectView.scss");
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