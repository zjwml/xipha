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
                            {{ orbmentMap[shadow.cost[0].type] }}
                          </div>
                        </div>
                        <div :class="'cost-use-' +
                          checkOrbment(
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
                            {{ orbmentMap[shadow.cost[1].type] }}
                          </div>
                        </div>
                        <div :class="'cost-use-' +
                          checkOrbment(
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
import { computed } from 'vue';
import { linkList, orbmentMap } from "@/assets/data/orbment";

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
  skillList: {
    type: Array,
  },
  holeList: {
    type: Array,
  },
  orbmentList: {
    type: Array,
  },
})

const shadowList = computed(() => {
  let result = [];
  let position = linkList[props.shadowType].name;
  for (let i = 0; i < props.skillList.length; i++) {
    if (position === props.skillList[i].position) {
      result.push(props.skillList[i]);
    }
  }
  return result;
});

const attributeSummary = computed(() => {
  // 定义一个函数来计算单个回路的属性成本  
  const calculateAttributeCost = (hole, orbment) => {
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
    if (['earth', 'water', 'fire', 'wind', 'time', 'gold', 'silver'].includes(hole.type)) {
      multiplier = 2;
    }

    // 遍历结晶回路的成本项，并应用乘数  
    orbment.cost.forEach(costItem => {
      cost[costItem.type] += costItem.price * multiplier;
    });

    return cost;
  };

  // 初始化一个空数组来存储每组属性的总和  
  const summaries = [];

  // 遍历每组的四个元素（hole和orbment是成对出现的）  
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
      const holeIndex = group * 4 + index;
      const orbmentIndex = holeIndex; // orbmentList与holeList的索引一一对应  
      const hole = props.holeList[holeIndex];
      const orbment = props.orbmentList[orbmentIndex];

      // 计算当前回路对属性的贡献，并累加到组总和中  
      const cost = calculateAttributeCost(hole, orbment);
      for (const type in cost) {
        groupSummary[type] += cost[type];
      }
    }

    // 将组总和添加到结果数组中  
    summaries.push(groupSummary);
  }

  return summaries;
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

</script>
<style scoped lang='scss'>
@import url("./style/ShadowSkillDialog.scss");
</style>
