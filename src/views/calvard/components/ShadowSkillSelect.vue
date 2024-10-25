<template>
  <div class="shadow-select-container">
    <t-dialog v-model:visible="visible" title="选择晶片技能" :footer="false" width="50%" :show-all-levels="false"
      :on-close="closeDialog">
      <t-form ref="formSkill">
        <t-form-item label="武器链" props="weapon">
          <t-checkbox-group v-model="formData.weapon" :options="weaponOptions"
            style="display: grid;grid-template-columns: repeat(5,20%);"></t-checkbox-group>
        </t-form-item>
        <t-form-item label="护盾链" props="shield">
          <t-checkbox-group v-model="formData.shield" :options="shieldOptions"
            style="display: grid;grid-template-columns: repeat(5,20%);"></t-checkbox-group>
        </t-form-item>
        <t-form-item label="驱动链" props="driver">
          <t-checkbox-group v-model="formData.driver" :options="driverOptions"
            style="display: grid;grid-template-columns: repeat(5,20%);"></t-checkbox-group>
        </t-form-item>
        <t-form-item label="EX链" props="extra">
          <t-checkbox-group v-model="formData.extra" :options="extraOptions"
            style="display: grid;grid-template-columns: repeat(5,20%);"></t-checkbox-group>
        </t-form-item>
      </t-form>
    </t-dialog>
    <div class="shadow-select-title">晶片技能需求</div>
    <div class="shadow-select-content">点击下面按钮，请选择自己需要的技能</div>
    <div class="shadow-select-button" @click="onClickSelect">选择晶片技能</div>
    <div class="cost-types-container">

    </div>
    <div class="shadow-selected-conntainer" v-for="item in allSelectedSkill" :key="item.id">
      <div class="shadow-selected">
        <div class="shadow-selected-title">{{ item.name }}</div>
        <!-- <div class="shadow-selected-content">技能描述</div> -->
        <div class="shadow-cost">
          <div class="cost">
            <div :class="'cost-type-container-' + item.cost[0].type">
              <div :class="'cost-type-' + item.cost[0].type">
                {{ circuitMap[item.cost[0].type] }}
              </div>
            </div>
            <!-- <div :class="'cost-use-' +
              checkCircuit(
                attributeSummary[props.shadowType][item.cost[0].type],
                item.cost[0].price
              )
              ">
              {{ attributeSummary[props.shadowType][item.cost[0].type] }}
            </div>
            <div>/</div> -->
            <div class="cost-price">
              {{ item.cost[0].price }}
            </div>
          </div>
          <div class="cost" v-if="item.cost.length > 1">
            <div :class="'cost-type-container-' + item.cost[1].type">
              <div :class="'cost-type-' + item.cost[1].type">
                {{ circuitMap[item.cost[1].type] }}
              </div>
            </div>
            <!-- <div :class="'cost-use-' +
              checkCircuit(
                attributeSummary[props.shadowType][item.cost[1].type],
                item.cost[1].price
              )
              ">
              {{ attributeSummary[props.shadowType][item.cost[1].type] }}
            </div>
            <div>/</div> -->
            <div class="cost-price">
              {{ item.cost[1].price }}
            </div>
          </div>
        </div>

        <div class="shadow-selected-close" @click="unselectOne(item)">
          <close-icon size="large" />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, reactive, defineEmits, computed, inject, watch } from 'vue';
import { circuitMap } from "@/assets/data/circuit";

import { CloseIcon } from 'tdesign-icons-vue-next';

const emit = defineEmits(["change-skill"]);

const skillList = inject("skillList");

const visible = ref(false);

const props = defineProps({
  skillSearch: {
    type: Object,
    default: () => {
      return {
        weapon: [],
        shield: [],
        driver: [],
        extra: [],
      }
    }
  }
});

watch(() => props.skillSearch, (newData) => {
  formData.weapon = Array.from(new Set([...formData.weapon, ...newData.weapon]));
  formData.shield = Array.from(new Set([...formData.shield, ...newData.shield]));
  formData.driver = Array.from(new Set([...formData.driver, ...newData.driver]));
  formData.extra = Array.from(new Set([...formData.extra, ...newData.extra]));
}, { deep: true });

const formData = reactive({
  weapon: [],
  shield: [],
  driver: [],
  extra: [],
});

const onClickSelect = () => {
  visible.value = true;
}

const weaponOptions = computed(() => {
  const weaponList = [];
  const filtertmp = skillList.filter(item => item.position === 'weapon' && item.cost.length > 1);
  for (let i = 0; i < filtertmp.length; i++) {
    weaponList.push({
      label: filtertmp[i].name,
      value: filtertmp[i].id
    });
  }
  return weaponList;
})

const shieldOptions = computed(() => {
  const list = [];
  const filtertmp = skillList.filter(item => item.position === 'shield' && item.cost.length > 1);
  for (let i = 0; i < filtertmp.length; i++) {
    list.push({
      label: filtertmp[i].name,
      value: filtertmp[i].id
    });
  }
  return list;
})

const driverOptions = computed(() => {
  const list = [];
  const filtertmp = skillList.filter(item => item.position === 'driver' && item.cost.length > 1);
  for (let i = 0; i < filtertmp.length; i++) {
    list.push({
      label: filtertmp[i].name,
      value: filtertmp[i].id
    });
  }
  return list;
})

const extraOptions = computed(() => {
  const list = [];
  const filtertmp = skillList.filter(item => item.position === 'extra' && !item.name.includes("起手式"));
  for (let i = 0; i < filtertmp.length; i++) {
    list.push({
      label: filtertmp[i].name,
      value: filtertmp[i].id
    });
  }
  return list;
})

const unselectOne = (skill) => {
  formData[skill.position] = formData[skill.position].filter(item => item != skill.id);
}

const allSelectedSkill = computed(() => {
  const result = [];
  formData.weapon.forEach(item => {
    result.push(skillList[parseInt(item) - 1]);
  });
  formData.shield.forEach(item => {
    result.push(skillList[parseInt(item) - 1]);
  });
  formData.driver.forEach(item => {
    result.push(skillList[parseInt(item) - 1]);
  });
  formData.extra.forEach(item => {
    result.push(skillList[parseInt(item) - 1]);
  });
  return result;
})

const closeDialog = () => {
  emit("change-skill", formData);
}

</script>
<style scoped lang='scss'>
@import url("./style/ShadowSkillselect.scss");
</style>
