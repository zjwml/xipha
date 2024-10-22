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
    <!-- <div class="shadow-selected-conntainer">
      <div class="shadow-selected">
        <div class="shadow-selected-title">已选技能1</div>
        <div class="shadow-selected-content">技能描述</div>
      </div>
    </div> -->
  </div>
</template>
<script setup>
import { ref, reactive, onMounted, defineEmits, computed } from 'vue';
import { useVersionStore } from '@/store';
import axios from 'axios';

const emit = defineEmits(["change-skill"]);

const store = useVersionStore();

const skillList = reactive([]);

const visible = ref(false);

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

const closeDialog = () => {
  emit("change-skill", formData);
}

onMounted(() => {
  const version = store.version;
  axios.get(`data/${version}_skill.json`).then(res => {
    const data = res.data;
    for (let i = 0; i < data.length; i++) {
      skillList.push(data[i]);
    }
  })
})

</script>
<style scoped lang='scss'>
@import url("./style/ShadowSkillselect.scss");
</style>
