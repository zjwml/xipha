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
      <t-cascader v-model="formData.orbmentSelectIndex" :options="orbmentOptions" @change="onConfirmOrbment">
        <template #option="{ item }">
          <div class="orbment-option">
            <div class="diamond-container">
              <div :class="'diamond-' + item.type"></div>
              <div :class="'inner-diamond-' + item.type"></div>
            </div>
            <div class="orbment-option-text">{{ item.label }}</div>
          </div>
        </template>
      </t-cascader>
    </t-dialog>

    <shadowSkillDialog :shadowSkillVisible="formData.shadowSkillVisible" :shadowType="formData.shadowType"
      :skillList="skillList" :holeList="formData.holeList" :orbmentList="formData.orbmentList"
      @close-dialog="formData.shadowSkillVisible = false" />

    <t-space direction="vertical" size="large">
      <t-card v-for="(linkItem, index) in linkList" :key="index" :title="linkItem.name">
        <template #actions>
          <t-button theme="danger" variant="outline" @click="onClickClear(linkItem)"
            style="margin-right: 10px;">清空</t-button>
          <t-button theme="primary" @click="onClickShowShadow(linkItem)">晶片技能</t-button>
        </template>
        <t-form ref="form" :data="formData" label-width="120px" layout="inline" scroll-to-first-error="smooth">
          <template v-for="(pos, j) in [index * 4, index * 4 + 1, index * 4 + 2, index * 4 + 3]" :key="j">
            <t-form-item :name="linkItem.name + pos">
              <template #label>
                <t-select v-model="formData.holeList[pos].type"
                  :style="formData.holeList[pos].type ? 'color:' + orbmentColor[formData.holeList[pos].type] : ''"
                  @change="onChangeHoleType(pos)">
                  <t-option v-for="item in orbmentType" :key="item.key" :style="'color:' + item.color"
                    :label="item.name" :value="item.key">
                  </t-option>
                </t-select>
              </template>
              <div class="circuit" @click="onClickCircuit(pos, linkItem)">
                <div class="diamond-container">
                  <div :class="'diamond-' + formData.orbmentList[pos].type"></div>
                  <div :class="'inner-diamond-' + formData.orbmentList[pos].type"></div>
                </div>
                <div class="circuit-icon-text">{{ formData.orbmentList[pos].name }}</div>
              </div>
            </t-form-item>
          </template>
        </t-form>
      </t-card>
    </t-space>
  </div>
</template>
<script setup>
import shadowSkillDialog from "../components/ShadowSkillDialog.vue";
import { reactive, onBeforeMount, onMounted, computed } from "vue";
import { linkList, orbmentMap, orbmentColor, orbmentType } from "@/assets/data/orbment";
import orbmentList from "@/assets/data/kuro2_orbment.json";
import skillList from "@/assets/data/kuro2_skill.json";

const formData = reactive({
  backpackVisible: false,
  shadowSkillVisible: false,
  shadowType: 0,
  orbmentSelectIndex: "",
  /**
   * 选择的结晶孔
   */
  holeSelect: {
    type: "all",
    name: "无限定",
    index: -1,
    linkId: ""
  },
  holeList: [],
  orbmentList: [],
});

const getNewOrbment = () => {
  return {
    type: "none",
    name: "请选择",
    cost: [{
      type: "none",
      price: 0
    }]
  };
}

const orbmentOptions = computed(() => {
  let result = [];
  if ("all" === formData.holeSelect.type) {
    //先放7种的种类
    for (let i = 2; i < orbmentType.length; i++) {
      result.push({
        label: orbmentType[i].name,
        value: orbmentType[i].key,
        type: orbmentType[i].key,
        children: [],
      });
    }

    for (let i = 0; i < orbmentList.length; i++) {
      const orbment = orbmentList[i];
      //过滤刃、轮、诗
      if (0 === formData.holeSelect.linkId) {
        if (orbment.name.indexOf("轮") != -1 || orbment.name.indexOf("诗") != -1) {
          continue;
        }
      } else if (1 === formData.holeSelect.linkId) {
        if (orbment.name.indexOf("刃") != -1 || orbment.name.indexOf("诗") != -1) {
          continue;
        }
      } else if (2 === formData.holeSelect.linkId) {
        if (orbment.name.indexOf("轮") != -1 || orbment.name.indexOf("刃") != -1) {
          continue;
        }
      }
      //过滤已经用过的回路
      let isUsed = false;
      for (let j = 0; j < formData.orbmentList.length; j++) {
        const hole = formData.orbmentList[j];
        if (hole.id === orbment.id) {
          isUsed = true;
        }
      }
      if (isUsed) {
        continue;
      }
      //结束过滤
      if ("earth" === orbment.type) {
        result[0].children.push({
          label: orbment.name,
          value: orbment.id,
          type: orbment.type,
        });
      } else if ("water" === orbment.type) {
        result[1].children.push({
          label: orbment.name,
          value: orbment.id,
          type: orbment.type,
        });
      } else if ("fire" === orbment.type) {
        result[2].children.push({
          label: orbment.name,
          value: orbment.id,
          type: orbment.type,
        });
      } else if ("wind" === orbment.type) {
        result[3].children.push({
          label: orbment.name,
          value: orbment.id,
          type: orbment.type,
        });
      } else if ("time" === orbment.type) {
        result[4].children.push({
          label: orbment.name,
          value: orbment.id,
          type: orbment.type,
        });
      } else if ("gold" === orbment.type) {
        result[5].children.push({
          label: orbment.name,
          value: orbment.id,
          type: orbment.type,
        });
      } else if ("silver" === orbment.type) {
        result[6].children.push({
          label: orbment.name,
          value: orbment.id,
          type: orbment.type,
        });
      }
    }
  } else {
    result.push({
      label: formData.holeSelect.name,
      value: formData.holeSelect.type,
      type: formData.holeSelect.type,
      children: [],
    });

    for (let i = 0; i < orbmentList.length; i++) {
      const orbment = orbmentList[i];
      if (formData.holeSelect.type === orbment.type) {
        //过滤刃、轮、诗
        if (0 === formData.holeSelect.linkId) {
          if (orbment.name.indexOf("轮") != -1 || orbment.name.indexOf("诗") != -1) {
            continue;
          }
        } else if (1 === formData.holeSelect.linkId) {
          if (orbment.name.indexOf("刃") != -1 || orbment.name.indexOf("诗") != -1) {
            continue;
          }
        } else if (2 === formData.holeSelect.linkId) {
          if (orbment.name.indexOf("轮") != -1 || orbment.name.indexOf("刃") != -1) {
            continue;
          }
        }
        //过滤已经用过的回路
        let isUsed = false;
        for (let j = 0; j < formData.orbmentList.length; j++) {
          const hole = formData.orbmentList[j];
          if (hole.id === orbment.id) {
            isUsed = true;
          }
        }
        if (isUsed) {
          continue;
        }
        //结束过滤
        result[0].children.push({
          label: orbment.name,
          value: orbment.id,
          type: orbment.type,
        });
      }
    }
  }

  return result;
});

const onChangeHoleType = (pos) => {
  formData.orbmentList[pos] = getNewOrbment();
}

const onClickCircuit = (circuitIndex, linkItem) => {
  formData.backpackVisible = true;
  formData.holeSelect = {
    name: orbmentMap[formData.holeList[circuitIndex].type],
    type: formData.holeList[circuitIndex].type,
    index: circuitIndex,
    linkId: linkItem.id
  };
};
/**
 * 选择完回路的回调函数
 * @param ctx 选择的回路的 id
 */
const onConfirmOrbment = (ctx) => {
  //选择的结晶孔
  const hole = formData.holeSelect;
  //这个是新的回路
  const orbment = orbmentList[ctx - 1];

  formData.orbmentList[hole.index] = orbment;
  formData.orbmentSelectIndex = "";

  formData.backpackVisible = false;
};

const onClickShowShadow = (linkItem) => {
  formData.shadowSkillVisible = true;
  formData.shadowType = linkItem.id;
};

const onClickClear = (linkItem) => {
  let position = linkItem.id;

  for (let i = position * 4; i < position * 4 + 4; i++) {
    formData.orbmentList[i] = {
      type: "none",
      name: "请选择",
      index: -1,
    }
  }

};

onBeforeMount(() => {
  for (let i = 0; i < 16; i++) {
    formData.holeList.push({
      type: "all",
      name: "通用孔",
    });
  }

  for (let i = 0; i < 16; i++) {
    formData.orbmentList.push(getNewOrbment());
  }
});

onMounted(() => {
  console.log("onMounted");
});
</script>
<style scoped lang="scss">
@import url("@/assets/orbment.scss");
@import url("./KurotwoView.scss");
</style>
