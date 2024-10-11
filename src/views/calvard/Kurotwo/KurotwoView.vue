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
    <t-dialog v-model:visible="formData.shadowSkillVisible" header="晶片技能" width="60%" :footer="false"
      :show-all-levels="false">
      <t-row>
        <t-col v-for="(ab, ind) in [0, 1]" :key="ind" :span="6">
          <t-list>
            <template v-for="(shadow, shadowIndex) in shadowList" :key="shadow.id">
              <t-list-item :class="'bg-color' +
                checkShadow(
                  formData.useList[formData.shadowType],
                  shadow.cost
                ) +
                '-' +
                shadow.cost[0].type
                " v-if="shadowIndex % 2 === ab">
                <template #content>
                  <div class="shadow-list-item">
                    <div class="shadow-name">{{ shadow.name }}</div>
                    <div class="shadow-cost">
                      <div class="cost">
                        <div :class="'cost-type-container-' + shadow.cost[0].type">
                          <div :class="'cost-type-' + shadow.cost[0].type">
                            {{ orbmentMap[shadow.cost[0].type] }}
                          </div>
                        </div>
                        <div :class="'cost-use-' +
                          checkOrbment(
                            formData.useList[formData.shadowType][shadow.cost[0].type],
                            shadow.cost[0].price
                          )
                          ">
                          {{ formData.useList[formData.shadowType][shadow.cost[0].type] }}
                        </div>
                        <div>/</div>
                        <div class="cost-price">
                          {{ shadow.cost[0].price }}
                        </div>
                      </div>
                      <div class="cost" v-if="shadow.cost.length > 1">
                        <div :class="'cost-type-container-' + shadow.cost[1].type">
                          <div :class="'cost-type-' + shadow.cost[1].type">
                            {{ orbmentMap[shadow.cost[1].type] }}
                          </div>
                        </div>
                        <div :class="'cost-use-' +
                          checkOrbment(
                            formData.useList[formData.shadowType][shadow.cost[1].type],
                            shadow.cost[1].price
                          )
                          ">
                          {{ formData.useList[formData.shadowType][shadow.cost[1].type] }}
                        </div>
                        <div>/</div>
                        <div class="cost-price">
                          {{ shadow.cost[1].price }}
                        </div>
                      </div>
                    </div>
                  </div>
                </template>
              </t-list-item>
            </template>
          </t-list>
        </t-col>
      </t-row>
    </t-dialog>
    <t-space direction="vertical" size="large">
      <t-card v-for="(linkItem, index) in linkList" :key="index" :title="linkItem.name">
        <template #actions>
          <t-button theme="danger" variant="outline" @click="onClickClear(linkItem)"
            style="margin-right: 10px;">清空</t-button>
          <t-button theme="primary" @click="onClickShadow(linkItem)">晶片技能</t-button>
        </template>
        <t-form ref="form" :data="formData" label-width="120px" layout="inline" scroll-to-first-error="smooth">
          <template v-for="(pos, j) in [index * 4, index * 4 + 1, index * 4 + 2, index * 4 + 3]" :key="j">
            <t-form-item :name="linkItem.name + pos">
              <template #label>
                <t-select v-model="formData.holeList[pos].type" :style="formData.holeList[pos].type
                  ? 'color:' + orbmentColor[formData.holeList[pos].type]
                  : ''
                  ">
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
  useList: [],
});

const checkOrbment = (a, b) => {
  if (a >= b) {
    return "success";
  } else {
    return "failure";
  }
};

const checkShadow = (a, b) => {
  let result = "success";
  for (let i = 0; i < b.length; i++) {
    if (a[b[i].type] < b[i].price) {
      return "failure";
    }
  }
  return result;
}

const shadowList = computed(() => {
  let result = [];
  let position = linkList[formData.shadowType].name;
  for (let i = 0; i < skillList.length; i++) {
    if (position === skillList[i].position) {
      result.push(skillList[i]);
    }
  }
  return result;
});

//可选择的回路
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
  const linkId = hole.linkId;
  //先记录之前的回路并回退链子
  const preOrbment = formData.orbmentList[hole.index];
  if ("none" != preOrbment.type) {
    for (let i = 0; i < preOrbment.cost.length; i++) {
      const item = preOrbment.cost[i];
      formData.useList[linkId][item.type] -= item.price;
    }
  }
  //这个是新的回路
  const orbment = orbmentList[ctx - 1];

  formData.orbmentList[hole.index] = orbment;
  formData.orbmentSelectIndex = "";

  for (let i = 0; i < orbment.cost.length; i++) {
    const item = orbment.cost[i];
    formData.useList[linkId][item.type] += item.price;
  }

  formData.backpackVisible = false;
};

const onClickShadow = (linkItem) => {
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

  formData.useList[position] = {
    earth: 0,
    water: 0,
    fire: 0,
    wind: 0,
    time: 0,
    gold: 0,
    silver: 0,
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
    formData.orbmentList.push({
      type: "none",
      name: "请选择",
    });
  }

  for (let i = 0; i < 4; i++) {
    formData.useList.push({
      earth: 0,
      water: 0,
      fire: 0,
      wind: 0,
      time: 0,
      gold: 0,
      silver: 0,
    });
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
