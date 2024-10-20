<!--
 * @Autor: zhenjun
 * @Date: 2024-09-30 14:08:31
 * @LastEditors: zhenjun
 * @LastEditTime: 2024-09-30 15:59:11
 * @Description: 
-->
<template>
  <div>
    <ShadowSkillDialog :shadowSkillVisible="formData.shadowSkillVisible" :shadowType="formData.shadowType"
      :slotList="formData.slotList" :circuitList="formData.circuitList"
      @close-dialog="formData.shadowSkillVisible = false" />
    <XiphaOrbment v-show="!isAutoEquip" :circuitList="formData.circuitList" :slotList="formData.slotList"
      @change-slot="onChangeSlot" @change-circuit="onChangeCircuit" @show-shadow="showShadowSkill"
      @clear-link="onClearLink"></XiphaOrbment>
    <ShadowSkillSelect v-show="isAutoEquip" />
  </div>
</template>
<script setup>
import { reactive, computed, onBeforeMount } from "vue";
import { useVersionStore } from "@/store";

import ShadowSkillDialog from "../components/ShadowSkillDialog.vue";
import XiphaOrbment from "../components/XiphaOrbment.vue";
import ShadowSkillSelect from "../components/ShadowSkillSelect.vue";

const store = useVersionStore();

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

const formData = reactive({
  shadowSkillVisible: false,
  shadowType: 0,
  slotList: [],
  circuitList: [],
});

const isAutoEquip = computed(() => {
  return store.getAutoEquip;
})

const onChangeSlot = (pos) => {
  formData.circuitList[pos] = getNewCircuit();
}

const onChangeCircuit = (circuit, index) => {
  formData.circuitList[index] = circuit;
}

const onClearLink = (position) => {
  for (let i = position * 4; i < position * 4 + 4; i++) {
    formData.circuitList[i] = getNewCircuit();
  }
};

const showShadowSkill = (linkItem) => {
  formData.shadowType = linkItem.id;
  formData.shadowSkillVisible = true;
}

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
</script>
<style scoped lang="scss"></style>
