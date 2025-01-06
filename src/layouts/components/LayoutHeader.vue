<template>
  <div class="layout-header">
    <div class="header-title">导力器回路搭配模拟器</div>

    <div class="header-auto">
      <div class="header-version">
        <t-select label="选择版本" v-model="data.version" @blur="onChangeVersion">
          <t-option key="kai" label="界之轨迹" value="kai" />
          <t-option key="kurotwo" label="黎之轨迹2" value="kurotwo" disabled />
          <t-option key="kuro" label="黎之轨迹" value="kuro" disabled />
        </t-select>
      </div>
      <t-switch v-model="slotChecked" size="large" @change="onChangeAuto">
        <template #label="slotProps">{{ slotProps.value ? '自动配装' : '手动配装' }}</template>
      </t-switch>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { useRouter } from "vue-router";
import { useVersionStore } from '@/store';

// import { MessagePlugin } from 'tdesign-vue-next';

const router = useRouter();

const store = useVersionStore();

const slotChecked = ref(false);

const data = reactive({
  version: "kai"
})

const onChangeVersion = () => {
  router.push("/kiseki/" + data.version);
  store.setVersion(data.version);
};

const onChangeAuto = () => {
  store.setAutoEquip(slotChecked.value)
}

</script>

<style lang="scss" scoped>
// :deep(.t-switch) {
//   background-color: #FF6935;
// }

// :deep(.t-switch:hover) {
//   background-color: #FF6935 !important;
// }

.layout-header {
  display: flex;
  height: 100%;

  justify-content: center;
  align-items: center;

  .header-title {
    font-size: 32px;
    font-weight: bold;
  }

  .header-version {
    margin-right: 20px;
  }

  .header-auto {
    position: absolute;
    display: flex;
    right: 15px;

    align-items: center;
  }
}
</style>
