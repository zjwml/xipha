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
    <t-row :gutter="20">
      <t-col :span="8" :offset="isAutoEquip ? 0 : 2">
        <transition name="fade" mode="out-in" appear>
          <div v-show="isAutoEquip" key="equip">
            <MainSelectView @search="onSearch" @click-physics="onClickPhysics" @click-driver="onClickDriver" />
          </div>
        </transition>
        <XiphaOrbment :circuitList="formData.circuitList" :slotList="formData.slotList" @change-slot="onChangeSlot"
          @change-circuit="onChangeCircuit" @show-shadow="showShadowSkill" @clear-link="onClearLink"></XiphaOrbment>
      </t-col>
      <t-col :span="4">
        <Transition mode="out-in">
          <ShadowSkillSelect v-show="isAutoEquip" @change-skill="onChangeSkill" :skillSearch="skillSearch" />
        </Transition>
      </t-col>
    </t-row>

  </div>
</template>
<script setup>
import { ref, reactive, computed, onBeforeMount, onMounted, provide } from "vue";
import { useVersionStore } from "@/store";
import axios from 'axios';

import MainSelectView from "../components/MainSelectView.vue";
import ShadowSkillDialog from "../components/ShadowSkillDialog.vue";
import XiphaOrbment from "../components/XiphaOrbment.vue";
import ShadowSkillSelect from "../components/ShadowSkillSelect.vue";

import { chainList } from "@/assets/data/circuit";
// import { findOptimalCircuits } from "../utils/generateCircuits";

const store = useVersionStore();
const skillList = reactive([]);
// 给子组件提供skillList
provide("skillList", skillList);

const backpack = reactive([]);
// 给子组件提供circuitList
provide("backpack", backpack);
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

const skillSearch = ref(null);

const formData = reactive({
  shadowSkillVisible: false,
  shadowType: 0,
  slotList: [],
  circuitList: [],
  circuitExclusions: [],
  circuitRequirements: [],
  shadowSkillList: []
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

const onChangeSkill = (skillIdList) => {
  let result = [];
  let tmp = skillList.filter(skill => skillIdList.weapon.includes(skill.id));
  result.push(...tmp);
  tmp = skillList.filter(skill => skillIdList.driver.includes(skill.id));
  result.push(...tmp);
  tmp = skillList.filter(skill => skillIdList.shield.includes(skill.id));
  result.push(...tmp);
  tmp = skillList.filter(skill => skillIdList.extra.includes(skill.id));
  result.push(...tmp);
  formData.shadowSkillList = result;
}

const onSearch = (data) => {
  formData.circuitExclusions = data.circuitExclusions;
  formData.circuitRequirements = data.circuitRequirements;


  formData.slotList.forEach((slot, index) => {
    const chainIndex = Math.floor(index / 4);
    slot.position = chainList[chainIndex].position;
    slot.excludedNames = chainList[chainIndex].excludedNames;
  });

  // const result = findOptimalCircuits(circuitList, formData.shadowSkillList, formData.slotList, formData.circuitRequirements, formData.circuitExclusions)

  // formData.circuitList = result;
  // console.log("result", result);
};

const onClickPhysics = (ctx) => {
  skillSearch.value = ctx;
}

const onClickDriver = (ctx) => {
  skillSearch.value = ctx;
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

onMounted(async () => {
  const version = store.version;

  await axios.get(`data/${version}_skill.json`).then(res => {
    const data = res.data;
    for (let i = 0; i < data.length; i++) {
      skillList.push(data[i]);
    }
  })

  await axios.get(`data/${version}_circuit.json`).then(res => {
    const data = res.data;
    for (let i = 0; i < data.length; i++) {
      backpack.push(data[i]);
    }
  })
})
</script>
<style scoped lang="scss"></style>
