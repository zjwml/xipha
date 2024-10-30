<template>
  <div>
    <t-dialog :visible="shadowSkillVisible" header="晶片技能" width="60%" :footer="false" :show-all-levels="false"
      @close="$emit('close-dialog')">
      <t-row>
        <t-col v-for="(ab, ind) in [0, 1]" :key="ind" :span="6">
          <t-list>
            <template v-for="(shadow, shadowIndex) in shadowList" :key="shadow.id">
              <t-list-item :class="'bg-color' +
                checkShadow(
                  attributeSummary[props.shadowType],
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
                            {{ circuitMap[shadow.cost[0].type] }}
                          </div>
                        </div>
                        <div :class="'cost-use-' +
                          checkCircuit(
                            attributeSummary[props.shadowType][shadow.cost[0].type],
                            shadow.cost[0].price
                          )
                          ">
                          {{ attributeSummary[props.shadowType][shadow.cost[0].type] }}
                        </div>
                        <div>/</div>
                        <div class="cost-price">
                          {{ shadow.cost[0].price }}
                        </div>
                      </div>
                      <div class="cost" v-if="shadow.cost.length > 1">
                        <div :class="'cost-type-container-' + shadow.cost[1].type">
                          <div :class="'cost-type-' + shadow.cost[1].type">
                            {{ circuitMap[shadow.cost[1].type] }}
                          </div>
                        </div>
                        <div :class="'cost-use-' +
                          checkCircuit(
                            attributeSummary[props.shadowType][shadow.cost[1].type],
                            shadow.cost[1].price
                          )
                          ">
                          {{ attributeSummary[props.shadowType][shadow.cost[1].type] }}
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
  </div>
</template>
<script setup>
import { computed, inject, } from 'vue';
import { chainList, circuitMap } from "@/assets/data/circuit";

const skillList = inject('skillList');

const props = defineProps({
  //是否显示
  shadowSkillVisible: {
    type: Boolean,
    default: false
  },
  shadowType: {
    type: Number,
    default: 0
  },
  slotList: {
    type: Array,
  },
})

const shadowList = computed(() => {
  let result = [];
  let position = chainList[props.shadowType].position;
  for (let i = 0; i < skillList.length; i++) {
    if (position === skillList[i].position) {
      result.push(skillList[i]);
    }
  }
  return result;
});

const attributeSummary = computed(() => {
  // 定义一个函数来计算单个回路的属性成本  
  const calculateAttributeCost = (slot, circuit) => {
    const cost = {
      earth: 0,
      water: 0,
      fire: 0,
      wind: 0,
      time: 0,
      gold: 0,
      silver: 0,
    };

    let multiplier = 1; // 默认乘数为1  

    // 如果结晶孔的类型是7种属性之一，则乘数设为2  
    if (['earth', 'water', 'fire', 'wind', 'time', 'gold', 'silver'].includes(slot.type)) {
      multiplier = 2;
    }

    // console.log("circuit", circuit);

    // 遍历结晶回路的成本项，并应用乘数  
    circuit.cost.forEach(costItem => {
      cost[costItem.type] += costItem.price * multiplier;
    });

    return cost;
  };

  // 初始化一个空数组来存储每组属性的总和  
  const summaries = [];

  // 遍历每组的四个元素（slot和circuit是成对出现的）  
  for (let group = 0; group < 4; group++) {
    let groupSummary = {
      earth: 0,
      water: 0,
      fire: 0,
      wind: 0,
      time: 0,
      gold: 0,
      silver: 0,
    };

    // 遍历组内的四个元素  
    for (let index = 0; index < 4; index++) {
      const slotIndex = group * 4 + index;
      const slot = props.slotList[slotIndex];
      const circuit = props.slotList[slotIndex].circuit;

      // 计算当前回路对属性的贡献，并累加到组总和中  
      const cost = calculateAttributeCost(slot, circuit);
      for (const type in cost) {
        groupSummary[type] += cost[type];
      }
    }

    // 将组总和添加到结果数组中  
    summaries.push(groupSummary);
  }

  return summaries;
});

const checkCircuit = (a, b) => {
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

</script>
<style scoped lang='scss'>
@import url("./style/ShadowSkillDialog.scss");
</style>
