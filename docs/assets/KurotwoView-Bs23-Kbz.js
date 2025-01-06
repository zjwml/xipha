import{f as B,D as N,S as U,e as $,c as _,C as z,h as O,d as K,B as q,F as G,a as J,b as j}from"./ShadowSkillDialog-CWZANn-L.js";import{q as Q,v as W,g as Y,N as Z,o as ee,y as h,c as d,z as s,H as T,x as y,D as n,G as S,E as C,F as A,B as P,C as E,A as H,J as x,O as ie,S as te}from"./index-DUCrlVMA.js";const g=[{id:"1",name:"防御1",price:"50",type:"earth",cost:[{type:"earth",price:2}],affect:"DEF+15"},{id:"2",name:"防御2",price:"150",type:"earth",cost:[{type:"earth",price:4}],affect:"DEF+30"},{id:"3",name:"防御3",price:"450",type:"earth",cost:[{type:"earth",price:6}],affect:"DEF+60"},{id:"4",name:"EP1",price:"50",type:"earth",cost:[{type:"earth",price:2}],affect:"最大EP+60"},{id:"5",name:"EP2",price:"150",type:"earth",cost:[{type:"earth",price:4}],affect:"最大EP+120"},{id:"6",name:"EP3",price:"450",type:"earth",cost:[{type:"earth",price:6}],affect:"最大EP+240"},{id:"7",name:"琥耀珠",price:"0",type:"earth",cost:[{type:"earth",price:8}],affect:"DEF+60，最大EP+240"},{id:"8",name:"腐蚀之刃",price:"100",type:"earth",cost:[{type:"earth",price:3}],affect:"STR+3，普通攻击·战技附加「腐蚀」10%。武器·EXTRA线专用"},{id:"9",name:"腐蚀之刃II",price:"300",type:"earth",cost:[{type:"earth",price:5}],affect:"STR+6，普通攻击·战技附加「腐蚀」20%。武器·EXTRA线专用"},{id:"10",name:"地灵之诗",price:"100",type:"earth",cost:[{type:"earth",price:3}],affect:"ATS+5，地属性魔法硬直时间2/3。驱动·EXTRA线专用"},{id:"11",name:"大地之诗",price:"300",type:"earth",cost:[{type:"earth",price:5}],affect:"ATS+10，地属性魔法硬直时间1/2。驱动·EXTRA线专用"},{id:"12",name:"黄晶之轮",price:"100",type:"earth",cost:[{type:"earth",price:3}],affect:"最大HP+150，危机时DEF·ADF上升小。护盾·EXTRA线专用"},{id:"13",name:"刚玉之轮",price:"300",type:"earth",cost:[{type:"earth",price:5}],affect:"最大HP+600，危机时DEF·ADF上升中。护盾·EXTRA线专用"},{id:"14",name:"耀脉",price:"600",type:"earth",cost:[{type:"earth",price:4},{type:"fire",price:2}],affect:"装备者击败敌人时获得耀晶石数量+30%"},{id:"15",name:"秘脉",price:"600",type:"earth",cost:[{type:"earth",price:5},{type:"fire",price:3}],affect:"装备者击败敌人时获得耀晶石数量+50%"},{id:"16",name:"金牛",price:"0",type:"earth",cost:[{type:"earth",price:5},{type:"wind",price:3}],affect:"对STUN中敌人赋予伤害+50%"},{id:"17",name:"狂龙",price:"0",type:"earth",cost:[{type:"earth",price:6},{type:"silver",price:4}],affect:"魔法伤害+50%，硬直时间1.5倍"},{id:"18",name:"百臂",price:"0",type:"earth",cost:[{type:"earth",price:7},{type:"gold",price:5}],affect:"HP护盾的效果变为1.2倍"},{id:"19",name:"HP1",price:"50",type:"water",cost:[{type:"water",price:2}],affect:"最大HP+400"},{id:"20",name:"HP2",price:"150",type:"water",cost:[{type:"water",price:4}],affect:"最大HP+800"},{id:"21",name:"HP3",price:"450",type:"water",cost:[{type:"water",price:6}],affect:"最大HP+1600"},{id:"22",name:"魔防1",price:"50",type:"water",cost:[{type:"water",price:2}],affect:"ADF+10，魔法回避率+2"},{id:"23",name:"魔防2",price:"150",type:"water",cost:[{type:"water",price:4}],affect:"ADF+20，魔法回避率+4"},{id:"24",name:"魔防3",price:"450",type:"water",cost:[{type:"water",price:6}],affect:"ADF+40，魔法回避率+8"},{id:"25",name:"苍耀珠",price:"0",type:"water",cost:[{type:"water",price:8}],affect:"最大HP+1600，ADF+40，魔法回避率+8"},{id:"26",name:"冻结之刃",price:"100",type:"water",cost:[{type:"water",price:3}],affect:"STR+3，普通攻击·战技附加「冻结」10%。武器·EXTRA线专用"},{id:"27",name:"冻结之刃II",price:"300",type:"water",cost:[{type:"water",price:5}],affect:"STR+6，普通攻击·战技附加「冻结」20%。武器·EXTRA线专用"},{id:"28",name:"水灵之诗",price:"100",type:"water",cost:[{type:"water",price:3}],affect:"ATS+5，水属性魔法硬直时间2/3。驱动·EXTRA线专用"},{id:"29",name:"苍冰之诗",price:"300",type:"water",cost:[{type:"water",price:5}],affect:"ATS+10，水属性魔法硬直时间1/2。驱动·EXTRA线专用"},{id:"30",name:"青晶之轮",price:"100",type:"water",cost:[{type:"water",price:3}],affect:"最大HP+150，危机时HP缓慢恢复小。护盾·EXTRA线专用"},{id:"31",name:"蓝玉之轮",price:"300",type:"water",cost:[{type:"water",price:5}],affect:"最大HP+600，危机时HP缓慢恢复中。护盾·EXTRA线专用"},{id:"32",name:"气息",price:"600",type:"water",cost:[{type:"water",price:4},{type:"earth",price:2}],affect:"回复魔法效果+50%"},{id:"33",name:"慈爱",price:"600",type:"water",cost:[{type:"water",price:5},{type:"earth",price:3}],affect:"回复魔法效果+70%"},{id:"34",name:"海妖",price:"0",type:"water",cost:[{type:"water",price:5},{type:"gold",price:3}],affect:"50%概率魔法攻击造成暴击"},{id:"35",name:"巨兽",price:"0",type:"water",cost:[{type:"water",price:6},{type:"time",price:4}],affect:"剩余HP越多魔法伤害越高（最高+50%）"},{id:"36",name:"汪洋",price:"0",type:"water",cost:[{type:"water",price:7},{type:"wind",price:5}],affect:"晶片技能的发动率+20%"},{id:"37",name:"攻击1",price:"50",type:"fire",cost:[{type:"fire",price:2}],affect:"STR+6"},{id:"38",name:"攻击2",price:"150",type:"fire",cost:[{type:"fire",price:4}],affect:"STR+12"},{id:"39",name:"攻击3",price:"450",type:"fire",cost:[{type:"fire",price:6}],affect:"STR+24"},{id:"40",name:"破坏1",price:"50",type:"fire",cost:[{type:"fire",price:2}],affect:"造成眩晕累计值+20%"},{id:"41",name:"破坏2",price:"150",type:"fire",cost:[{type:"fire",price:4}],affect:"造成眩晕累计值+40%"},{id:"42",name:"破坏3",price:"450",type:"fire",cost:[{type:"fire",price:6}],affect:"造成眩晕累计值+60%"},{id:"43",name:"红耀珠",price:"0",type:"fire",cost:[{type:"fire",price:8}],affect:"STR+24，造成眩晕累计值+60%"},{id:"44",name:"炎伤之刃",price:"100",type:"fire",cost:[{type:"fire",price:3}],affect:"STR+3，普通攻击·战技附加「炎伤」10%。武器·EXTRA线专用"},{id:"45",name:"炎伤之刃II",price:"300",type:"fire",cost:[{type:"fire",price:5}],affect:"STR+6，普通攻击·战技附加「炎伤」20%。武器·EXTRA线专用"},{id:"46",name:"火灵之诗",price:"100",type:"fire",cost:[{type:"fire",price:3}],affect:"ATS+5，火属性魔法硬直时间2/3。驱动·EXTRA线专用"},{id:"47",name:"业火之诗",price:"300",type:"fire",cost:[{type:"fire",price:5}],affect:"ATS+10，火属性魔法硬直时间1/2。驱动·EXTRA线专用"},{id:"48",name:"赤晶之轮",price:"100",type:"fire",cost:[{type:"fire",price:3}],affect:"最大HP+150，危机时STR上升小。护盾·EXTRA线专用"},{id:"49",name:"红玉之轮",price:"300",type:"fire",cost:[{type:"fire",price:5}],affect:"最大HP+600，危机时STR上升中。护盾·EXTRA线专用"},{id:"50",name:"烈火",price:"600",type:"fire",cost:[{type:"fire",price:4},{type:"wind",price:2}],affect:"先制攻击伤害1.2倍"},{id:"51",name:"猛炎",price:"600",type:"fire",cost:[{type:"fire",price:5},{type:"wind",price:3}],affect:"先制攻击伤害1.5倍"},{id:"52",name:"赤兔马",price:"0",type:"fire",cost:[{type:"fire",price:5},{type:"water",price:3}],affect:"被伤害时CP上升率5倍"},{id:"53",name:"黑狼",price:"0",type:"fire",cost:[{type:"fire",price:6},{type:"time",price:4}],affect:"剩余HP越多物理伤害越高（最高+50%）"},{id:"54",name:"毒龙",price:"0",type:"fire",cost:[{type:"fire",price:7},{type:"earth",price:5}],affect:"装备者攻击敌人时增幅量表累积量变为1.5倍"},{id:"55",name:"回避1",price:"50",type:"wind",cost:[{type:"wind",price:2}],affect:"回避率+4"},{id:"56",name:"回避2",price:"150",type:"wind",cost:[{type:"wind",price:4}],affect:"回避率+8"},{id:"57",name:"回避3",price:"450",type:"wind",cost:[{type:"wind",price:6}],affect:"回避率+16"},{id:"58",name:"必杀1",price:"50",type:"wind",cost:[{type:"wind",price:2}],affect:"必杀率+6"},{id:"59",name:"必杀2",price:"150",type:"wind",cost:[{type:"wind",price:4}],affect:"必杀率+12"},{id:"60",name:"必杀3",price:"450",type:"wind",cost:[{type:"wind",price:6}],affect:"必杀率+24"},{id:"61",name:"翠耀珠",price:"0",type:"wind",cost:[{type:"wind",price:8}],affect:"回避率+16，必杀率+24"},{id:"62",name:"封技之刃",price:"100",type:"wind",cost:[{type:"wind",price:3}],affect:"STR+3，普通攻击·战技附加「封技」10%。武器·EXTRA线专用"},{id:"63",name:"封技之刃II",price:"300",type:"wind",cost:[{type:"wind",price:5}],affect:"STR+6，普通攻击·战技附加「封技」20%。武器·EXTRA线专用"},{id:"64",name:"风灵之诗",price:"100",type:"wind",cost:[{type:"wind",price:3}],affect:"ATS+5，风属性魔法硬直时间2/3。驱动·EXTRA线专用"},{id:"65",name:"威风之诗",price:"300",type:"wind",cost:[{type:"wind",price:5}],affect:"ATS+10，风属性魔法硬直时间1/2。驱动·EXTRA线专用"},{id:"66",name:"绿晶之轮",price:"100",type:"wind",cost:[{type:"wind",price:3}],affect:"最大HP+150，危机时获得「心眼」一回合。护盾·EXTRA线专用"},{id:"67",name:"翠玉之轮",price:"300",type:"wind",cost:[{type:"wind",price:5}],affect:"最大HP+600，危机时获得「心眼」二回合。护盾·EXTRA线专用"},{id:"68",name:"异香",price:"600",type:"wind",cost:[{type:"wind",price:4},{type:"water",price:2}],affect:"指令战斗中，90%概率吸引敌人攻击"},{id:"69",name:"不屈",price:"600",type:"wind",cost:[{type:"wind",price:5},{type:"water",price:3}],affect:"指令战斗中当HP低于50%时，回避率+10%"},{id:"70",name:"风灵",price:"0",type:"wind",cost:[{type:"wind",price:5},{type:"gold",price:3}],affect:"回复道具范围+10m"},{id:"71",name:"圣兽",price:"0",type:"wind",cost:[{type:"wind",price:6},{type:"silver",price:4}],affect:"普通攻击·战技暴击伤害+100%"},{id:"72",name:"羽蛇",price:"0",type:"wind",cost:[{type:"wind",price:7},{type:"fire",price:5}],affect:"驱动魔法期间回避率+100%"},{id:"73",name:"行动力1",price:"50",type:"time",cost:[{type:"time",price:2}],affect:"SPD+4"},{id:"74",name:"行动力2",price:"150",type:"time",cost:[{type:"time",price:4}],affect:"SPD+8"},{id:"75",name:"行动力3",price:"450",type:"time",cost:[{type:"time",price:6}],affect:"SPD+16"},{id:"76",name:"驱动1",price:"50",type:"time",cost:[{type:"time",price:2}],affect:"魔法驱动时间-10%"},{id:"77",name:"驱动2",price:"150",type:"time",cost:[{type:"time",price:4}],affect:"魔法驱动时间-20%"},{id:"78",name:"驱动3",price:"450",type:"time",cost:[{type:"time",price:6}],affect:"魔法驱动时间-40%"},{id:"79",name:"黑耀珠",price:"0",type:"time",cost:[{type:"time",price:8}],affect:"SPD+16，魔法驱动时间-40%"},{id:"80",name:"黑暗之刃",price:"100",type:"time",cost:[{type:"time",price:3}],affect:"STR+3，普通攻击·战技附加「黑暗」10%。武器·EXTRA线专用"},{id:"81",name:"黑暗之刃II",price:"300",type:"time",cost:[{type:"time",price:5}],affect:"STR+6，普通攻击·战技附加「黑暗」20%。武器·EXTRA线专用"},{id:"82",name:"星灵之诗",price:"100",type:"time",cost:[{type:"time",price:3}],affect:"ATS+5，时属性魔法硬直时间2/3。驱动·EXTRA线专用"},{id:"83",name:"晓星之诗",price:"300",type:"time",cost:[{type:"time",price:5}],affect:"ATS+10，时属性魔法硬直时间1/2。驱动·EXTRA线专用"},{id:"84",name:"紫晶之轮",price:"100",type:"time",cost:[{type:"time",price:3}],affect:"最大HP+150，危机时SPD上升小。护盾·EXTRA线专用"},{id:"85",name:"黑银之轮",price:"300",type:"time",cost:[{type:"time",price:5}],affect:"最大HP+600，危机时SPD上升中。护盾·EXTRA线专用"},{id:"86",name:"幸运",price:"600",type:"time",cost:[{type:"time",price:4},{type:"wind",price:2}],affect:"装备者击败敌人时物品掉落概率+30%"},{id:"87",name:"豪运",price:"600",type:"time",cost:[{type:"time",price:5},{type:"wind",price:3}],affect:"装备者击败敌人时物品掉落概率+50%"},{id:"88",name:"水妖",price:"0",type:"time",cost:[{type:"time",price:5},{type:"earth",price:3}],affect:"S战技硬直时间1/2"},{id:"89",name:"八咫鸟",price:"0",type:"time",cost:[{type:"time",price:6},{type:"silver",price:4}],affect:"剩余HP越少物理伤害越高（最高+100%）"},{id:"90",name:"堕天使",price:"0",type:"time",cost:[{type:"time",price:7},{type:"water",price:5}],affect:"普通战技硬直时间4/5"},{id:"91",name:"省EP1",price:"50",type:"gold",cost:[{type:"gold",price:2}],affect:"消费EP-10%"},{id:"92",name:"省EP2",price:"150",type:"gold",cost:[{type:"gold",price:4}],affect:"消费EP-20%"},{id:"93",name:"省EP3",price:"450",type:"gold",cost:[{type:"gold",price:6}],affect:"消费EP-40%"},{id:"94",name:"命中1",price:"50",type:"gold",cost:[{type:"gold",price:2}],affect:"命中率+25%，必杀率+2%"},{id:"95",name:"命中2",price:"150",type:"gold",cost:[{type:"gold",price:4}],affect:"命中率+50%，必杀率+4%"},{id:"96",name:"命中3",price:"450",type:"gold",cost:[{type:"gold",price:6}],affect:"命中率+100%，必杀率+8%"},{id:"97",name:"金耀珠",price:"0",type:"gold",cost:[{type:"gold",price:8}],affect:"消费EP-40%，命中率+100%，必杀率+8%"},{id:"98",name:"封魔之刃",price:"100",type:"gold",cost:[{type:"gold",price:3}],affect:"STR+3，普通攻击·战技附加「封魔」10%。武器·EXTRA线专用"},{id:"99",name:"封魔之刃II",price:"300",type:"gold",cost:[{type:"gold",price:5}],affect:"STR+6，普通攻击·战技附加「封魔」20%。武器·EXTRA线专用"},{id:"100",name:"阳灵之诗",price:"100",type:"gold",cost:[{type:"gold",price:3}],affect:"ATS+5，空属性魔法硬直时间2/3。驱动·EXTRA线专用"},{id:"101",name:"极光之诗",price:"300",type:"gold",cost:[{type:"gold",price:5}],affect:"ATS+10，空属性魔法硬直时间1/2。驱动·EXTRA线专用"},{id:"102",name:"金晶之轮",price:"100",type:"gold",cost:[{type:"gold",price:3}],affect:"最大HP+150，危机时ATS上升小。护盾·EXTRA线专用"},{id:"103",name:"黄金之轮",price:"300",type:"gold",cost:[{type:"gold",price:5}],affect:"最大HP+600，危机时ATS上升中。护盾·EXTRA线专用"},{id:"104",name:"天启",price:"600",type:"gold",cost:[{type:"gold",price:4},{type:"fire",price:2}],affect:"范围魔法的效果范围+1m"},{id:"105",name:"神谕",price:"600",type:"gold",cost:[{type:"gold",price:5},{type:"fire",price:3}],affect:"范围魔法的效果范围+2m"},{id:"106",name:"尖牙",price:"0",type:"gold",cost:[{type:"gold",price:5},{type:"earth",price:3}],affect:"20%概率吸收物理攻击"},{id:"107",name:"阿玛蒂亚",price:"0",type:"gold",cost:[{type:"gold",price:6},{type:"time",price:4}],affect:"剩余HP越少魔法伤害越高（最高+100%）"},{id:"108",name:"亥伯龙",price:"0",type:"gold",cost:[{type:"gold",price:7},{type:"silver",price:5}],affect:"使同伴回复时，CP+10"},{id:"109",name:"精神1",price:"50",type:"silver",cost:[{type:"silver",price:2}],affect:"ATS+6"},{id:"110",name:"精神2",price:"150",type:"silver",cost:[{type:"silver",price:4}],affect:"ATS+12"},{id:"111",name:"精神3",price:"450",type:"silver",cost:[{type:"silver",price:6}],affect:"ATS+24"},{id:"112",name:"妨碍1",price:"50",type:"silver",cost:[{type:"silver",price:2}],affect:"普通攻击·战技，15%概率解除驱动&延迟10"},{id:"113",name:"妨碍2",price:"150",type:"silver",cost:[{type:"silver",price:4}],affect:"普通攻击·战技，30%概率解除驱动&延迟10"},{id:"114",name:"妨碍3",price:"450",type:"silver",cost:[{type:"silver",price:6}],affect:"普通攻击·战技，45%概率解除驱动&延迟10"},{id:"115",name:"银耀珠",price:"0",type:"silver",cost:[{type:"silver",price:8}],affect:"ATS+24，普通攻击·战技，45%概率解除驱动&延迟10"},{id:"116",name:"恐惧之刃",price:"100",type:"silver",cost:[{type:"silver",price:3}],affect:"STR+3，普通攻击·战技附加「恐怖」10%。武器·EXTRA线专用"},{id:"117",name:"恐惧之刃II",price:"300",type:"silver",cost:[{type:"silver",price:5}],affect:"STR+6，普通攻击·战技附加「恐怖」20%。武器·EXTRA线专用"},{id:"118",name:"月灵之诗",price:"100",type:"silver",cost:[{type:"silver",price:3}],affect:"ATS+5，幻属性魔法硬直时间2/3。驱动·EXTRA线专用"},{id:"119",name:"胧月之诗",price:"300",type:"silver",cost:[{type:"silver",price:5}],affect:"ATS+10，幻属性魔法硬直时间1/2。驱动·EXTRA线专用"},{id:"120",name:"银晶之轮",price:"100",type:"silver",cost:[{type:"silver",price:3}],affect:"最大HP+150，危机时获得「匿踪」一回合。护盾·EXTRA线专用"},{id:"121",name:"白银之轮",price:"300",type:"silver",cost:[{type:"silver",price:5}],affect:"最大HP+600，危机时获得「匿踪」二回合。护盾·EXTRA线专用"},{id:"122",name:"空蝉",price:"600",type:"silver",cost:[{type:"silver",price:4},{type:"water",price:2}],affect:"指令战斗中，90%概率不会被敌人攻击"},{id:"123",name:"隐士",price:"600",type:"silver",cost:[{type:"silver",price:5},{type:"water",price:3}],affect:"指令战斗中，HP全满时暴击率+10%"},{id:"124",name:"红玉",price:"0",type:"silver",cost:[{type:"silver",price:5},{type:"fire",price:3}],affect:"20%概率吸收魔法攻击"},{id:"125",name:"白泽",price:"0",type:"silver",cost:[{type:"silver",price:6},{type:"gold",price:4}],affect:"AT奖励发生率提高90%"},{id:"126",name:"妖狐",price:"0",type:"silver",cost:[{type:"silver",price:7},{type:"time",price:5}],affect:"遭到攻击时低概率进入「匿踪」状态"}],pe=[{id:"1",position:"weapon",name:"大地冲击",cost:[{type:"earth",price:2}],description:"施展普通攻击·战技时有概率追加20%地属性伤害",lv0:"25%",lv1:"50%",lv2:"100%"},{id:"2",position:"weapon",name:"水花冲击",cost:[{type:"water",price:2}],description:"施展普通攻击·战技时有概率追加20%水属性伤害",lv0:"25%",lv1:"50%",lv2:"100%"},{id:"3",position:"weapon",name:"火光冲击",cost:[{type:"fire",price:2}],description:"施展普通攻击·战技时有概率追加20%火属性伤害",lv0:"25%",lv1:"50%",lv2:"100%"},{id:"4",position:"weapon",name:"疾风冲击",cost:[{type:"wind",price:2}],description:"施展普通攻击·战技时有概率追加20%风属性伤害",lv0:"25%",lv1:"50%",lv2:"100%"},{id:"5",position:"weapon",name:"时光冲击",cost:[{type:"time",price:2}],description:"施展普通攻击·战技时有概率追加20%时属性伤害",lv0:"25%",lv1:"50%",lv2:"100%"},{id:"6",position:"weapon",name:"碧空冲击",cost:[{type:"gold",price:2}],description:"施展普通攻击·战技时有概率追加20%空属性伤害",lv0:"25%",lv1:"50%",lv2:"100%"},{id:"7",position:"weapon",name:"幻影冲击",cost:[{type:"silver",price:2}],description:"施展普通攻击·战技时有概率追加20%幻属性伤害",lv0:"25%",lv1:"50%",lv2:"100%"},{id:"8",position:"weapon",name:"大地冲击Ⅱ",cost:[{type:"earth",price:8}],description:"施展普通攻击·战技时有概率追加50%地属性伤害",lv0:"25%",lv1:"50%",lv2:"100%"},{id:"9",position:"weapon",name:"水花冲击Ⅱ",cost:[{type:"water",price:8}],description:"施展普通攻击·战技时有概率追加50%水属性伤害",lv0:"25%",lv1:"50%",lv2:"100%"},{id:"10",position:"weapon",name:"火光冲击Ⅱ",cost:[{type:"fire",price:8}],description:"施展普通攻击·战技时有概率追加50%火属性伤害",lv0:"25%",lv1:"50%",lv2:"100%"},{id:"11",position:"weapon",name:"疾风冲击Ⅱ",cost:[{type:"wind",price:8}],description:"施展普通攻击·战技时有概率追加50%风属性伤害",lv0:"25%",lv1:"50%",lv2:"100%"},{id:"12",position:"weapon",name:"时光冲击Ⅱ",cost:[{type:"time",price:8}],description:"施展普通攻击·战技时有概率追加50%时属性伤害",lv0:"25%",lv1:"50%",lv2:"100%"},{id:"13",position:"weapon",name:"碧空冲击Ⅱ",cost:[{type:"gold",price:8}],description:"施展普通攻击·战技时有概率追加50%空属性伤害",lv0:"25%",lv1:"50%",lv2:"100%"},{id:"14",position:"weapon",name:"幻影冲击Ⅱ",cost:[{type:"silver",price:8}],description:"施展普通攻击·战技时有概率追加50%幻属性伤害",lv0:"25%",lv1:"50%",lv2:"100%"},{id:"15",position:"weapon",name:"破剑者",cost:[{type:"silver",price:4},{type:"fire",price:4}],description:"施展普通攻击·战技时有概率追加STR下降·小",lv0:"20%",lv1:"40%",lv2:"100%"},{id:"16",position:"weapon",name:"破盾者",cost:[{type:"silver",price:4},{type:"earth",price:4}],description:"施展普通攻击·战技时有概率追加DEF下降·小",lv0:"20%",lv1:"40%",lv2:"100%"},{id:"17",position:"weapon",name:"破剑突袭",cost:[{type:"gold",price:6},{type:"fire",price:6}],description:"先制晶片攻击时有概率追加STR下降·中",lv0:"50%",lv1:"-",lv2:"-"},{id:"18",position:"weapon",name:"破盾突袭",cost:[{type:"gold",price:6},{type:"earth",price:6}],description:"先制晶片攻击时有概率追加DEF下降·中",lv0:"50%",lv1:"-",lv2:"-"},{id:"19",position:"weapon",name:"致命追击",cost:[{type:"earth",price:4},{type:"time",price:8}],description:"若攻击后敌人所剩HP小于攻击值，则必定会进行终结追击",lv0:"100%",lv1:"100%",lv2:"100%"},{id:"20",position:"weapon",name:"致命追击·改",cost:[{type:"earth",price:6},{type:"time",price:12}],description:"若攻击后敌人所剩HP小于攻击值的1.5倍，则必定会进行终结追击",lv0:"100%",lv1:"100%",lv2:"100%"},{id:"21",position:"weapon",name:"爆裂吸收",cost:[{type:"water",price:3},{type:"fire",price:12}],description:"施展普通攻击·战技时，回复造成伤害10%的HP，CP+10",lv0:"25%",lv1:"50%",lv2:"100%"},{id:"22",position:"weapon",name:"处刑者",cost:[{type:"fire",price:6},{type:"wind",price:12}],description:"触发晕眩或攻击晕眩中敌人时，有几率进行追击",lv0:"25%",lv1:"50%",lv2:"100%"},{id:"23",position:"shield",name:"大地抗性",cost:[{type:"earth",price:2}],description:"受到攻击时，有概率「腐蚀」无效",lv0:"50%",lv1:"75%",lv2:"100%"},{id:"24",position:"shield",name:"水花抗性",cost:[{type:"water",price:2}],description:"受到攻击时，有概率「冻结」无效",lv0:"50%",lv1:"75%",lv2:"100%"},{id:"25",position:"shield",name:"火光抗性",cost:[{type:"fire",price:2}],description:"受到攻击时，有概率「炎伤」无效",lv0:"50%",lv1:"75%",lv2:"100%"},{id:"26",position:"shield",name:"疾风抗性",cost:[{type:"wind",price:2}],description:"受到攻击时，有概率「封技」无效",lv0:"50%",lv1:"75%",lv2:"100%"},{id:"27",position:"shield",name:"黑暗抗性",cost:[{type:"time",price:2}],description:"受到攻击时，有概率「黑暗」无效",lv0:"50%",lv1:"75%",lv2:"100%"},{id:"28",position:"shield",name:"碧空抗性",cost:[{type:"gold",price:2}],description:"受到攻击时，有概率「封魔」无效",lv0:"50%",lv1:"75%",lv2:"100%"},{id:"29",position:"shield",name:"幻影抗性",cost:[{type:"silver",price:2}],description:"受到攻击时，有概率「恐怖」无效",lv0:"50%",lv1:"75%",lv2:"100%"},{id:"30",position:"shield",name:"大地抗性Ⅱ",cost:[{type:"earth",price:8}],description:"受到攻击时，有概率「腐蚀」无效",lv0:"75%",lv1:"90%",lv2:"100%"},{id:"31",position:"shield",name:"水花抗性Ⅱ",cost:[{type:"water",price:8}],description:"受到攻击时，有概率「冻结」无效",lv0:"75%",lv1:"90%",lv2:"100%"},{id:"32",position:"shield",name:"火光抗性Ⅱ",cost:[{type:"fire",price:8}],description:"受到攻击时，有概率「炎伤」无效",lv0:"75%",lv1:"90%",lv2:"100%"},{id:"33",position:"shield",name:"疾风抗性Ⅱ",cost:[{type:"wind",price:8}],description:"受到攻击时，有概率「封技」无效",lv0:"75%",lv1:"90%",lv2:"100%"},{id:"34",position:"shield",name:"黑暗抗性Ⅱ",cost:[{type:"time",price:8}],description:"受到攻击时，有概率「黑暗」无效",lv0:"75%",lv1:"90%",lv2:"100%"},{id:"35",position:"shield",name:"碧空抗性Ⅱ",cost:[{type:"gold",price:8}],description:"受到攻击时，有概率「封魔」无效",lv0:"75%",lv1:"90%",lv2:"100%"},{id:"36",position:"shield",name:"幻影抗性Ⅱ",cost:[{type:"silver",price:8}],description:"受到攻击时，有概率「恐怖」无效",lv0:"75%",lv1:"90%",lv2:"100%"},{id:"37",position:"shield",name:"治疗防御",cost:[{type:"gold",price:2},{type:"water",price:4}],description:"使用防御时，有概率回复HP，且受到伤害为原来的1/3",lv0:"50%",lv1:"75%",lv2:"100%"},{id:"38",position:"shield",name:"充能防御",cost:[{type:"fire",price:2},{type:"wind",price:4}],description:"使用防御时，有概率获得三回合CP上升的效果，且受到伤害为原来的1/3",lv0:"50%",lv1:"75%",lv2:"100%"},{id:"39",position:"shield",name:"强攻防御",cost:[{type:"earth",price:2},{type:"fire",price:4}],description:"使用防御时，有概率使自身攻击力上升，且受到伤害为原来的1/3",lv0:"50%",lv1:"75%",lv2:"100%"},{id:"40",position:"shield",name:"结晶防御",cost:[{type:"time",price:2},{type:"earth",price:2}],description:"使用防御时，有概率使自身防御力上升，且受到伤害为原来的1/3",lv0:"50%",lv1:"75%",lv2:"100%"},{id:"41",position:"shield",name:"掩护之盾",cost:[{type:"earth",price:2},{type:"silver",price:2}],description:"伙伴遭到攻击时，有概率使伤害变为1/2，以HP1抵挡战斗不能伤害。伙伴濒死时S.C.L.M.发动率上升。",lv0:"10%(通常)/20%(濒死S.C.L.M)",lv1:"20%(通常)/40%(濒死S.C.L.M)",lv2:"100%"},{id:"42",position:"shield",name:"掩护之盾Ⅱ",cost:[{type:"earth",price:8},{type:"silver",price:8}],description:"伙伴遭到攻击时，有概率使伤害变为1/4，以HP1抵挡战斗不能伤害。伙伴濒死时S.C.L.M.发动率上升。",lv0:"20%(通常)/40%(濒死S.C.L.M)",lv1:"40%(通常)/80%(濒死S.C.L.M)",lv2:"100%"},{id:"43",position:"shield",name:"复仇之箭",cost:[{type:"wind",price:4},{type:"time",price:12}],description:"伙伴遭到攻击时，有概率发动反击",lv0:"20%(通常)/40%(濒死S.C.L.M)",lv1:"40%(通常)/80%(濒死S.C.L.M)",lv2:"100%"},{id:"44",position:"shield",name:"炽天使之力",cost:[{type:"water",price:8},{type:"gold",price:12}],description:"以HP1抵挡战斗不能伤害，并中幅回复HP·EP·CP（每战限一次）",lv0:"100%",lv1:"100%",lv2:"100%"},{id:"45",position:"driver",name:"大地增幅",cost:[{type:"earth",price:2}],description:"施展地属性魔法时，有概率造成25%地属性额外伤害",lv0:"25%",lv1:"50%",lv2:"100%"},{id:"46",position:"driver",name:"水花增幅",cost:[{type:"water",price:2}],description:"施展水属性魔法时，有概率造成25%水属性额外伤害",lv0:"25%",lv1:"50%",lv2:"100%"},{id:"47",position:"driver",name:"火光增幅",cost:[{type:"fire",price:2}],description:"施展火属性魔法时，有概率造成25%火属性额外伤害",lv0:"25%",lv1:"50%",lv2:"100%"},{id:"48",position:"driver",name:"疾风增幅",cost:[{type:"wind",price:2}],description:"施展风属性魔法时，有概率造成25%风属性额外伤害",lv0:"25%",lv1:"50%",lv2:"100%"},{id:"49",position:"driver",name:"时光增幅",cost:[{type:"time",price:2}],description:"施展时属性魔法时，有概率造成25%时属性额外伤害",lv0:"25%",lv1:"50%",lv2:"100%"},{id:"50",position:"driver",name:"碧空增幅",cost:[{type:"gold",price:2}],description:"施展空属性魔法时，有概率造成25%空属性额外伤害",lv0:"25%",lv1:"50%",lv2:"100%"},{id:"51",position:"driver",name:"幻影增幅",cost:[{type:"silver",price:2}],description:"施展幻属性魔法时，有概率造成25%幻属性额外伤害",lv0:"25%",lv1:"50%",lv2:"100%"},{id:"52",position:"driver",name:"大地增幅Ⅱ",cost:[{type:"earth",price:8}],description:"施展地属性魔法时，有概率造成50%地属性额外伤害",lv0:"50%",lv1:"75%",lv2:"100%"},{id:"53",position:"driver",name:"水花增幅Ⅱ",cost:[{type:"water",price:8}],description:"施展水属性魔法时，有概率造成50%水属性额外伤害",lv0:"50%",lv1:"75%",lv2:"100%"},{id:"54",position:"driver",name:"火光增幅Ⅱ",cost:[{type:"fire",price:8}],description:"施展火属性魔法时，有概率造成50%火属性额外伤害",lv0:"50%",lv1:"75%",lv2:"100%"},{id:"55",position:"driver",name:"疾风增幅Ⅱ",cost:[{type:"wind",price:8}],description:"施展风属性魔法时，有概率造成50%风属性额外伤害",lv0:"50%",lv1:"75%",lv2:"100%"},{id:"56",position:"driver",name:"时光增幅Ⅱ",cost:[{type:"time",price:8}],description:"施展时属性魔法时，有概率造成50%时属性额外伤害",lv0:"50%",lv1:"75%",lv2:"100%"},{id:"57",position:"driver",name:"碧空增幅Ⅱ",cost:[{type:"gold",price:8}],description:"施展空属性魔法时，有概率造成50%空属性额外伤害",lv0:"50%",lv1:"75%",lv2:"100%"},{id:"58",position:"driver",name:"幻影增幅Ⅱ",cost:[{type:"silver",price:8}],description:"施展幻属性魔法时，有概率造成50%幻属性额外伤害",lv0:"50%",lv1:"75%",lv2:"100%"},{id:"59",position:"driver",name:"碎心者",cost:[{type:"silver",price:4},{type:"wind",price:4}],description:"施展攻击魔法时，有概率赋予ATS下降·小",lv0:"20%",lv1:"40%",lv2:"100%"},{id:"60",position:"driver",name:"碎魂者",cost:[{type:"silver",price:4},{type:"water",price:4}],description:"施展攻击魔法时，有概率赋予ADF下降·小",lv0:"20%",lv1:"40%",lv2:"100%"},{id:"61",position:"driver",name:"破言突袭",cost:[{type:"wind",price:6},{type:"time",price:6}],description:"先制晶片攻击时，有概率赋予ATS下降·小",lv0:"50%",lv1:"-",lv2:"-"},{id:"62",position:"driver",name:"破灵突袭",cost:[{type:"water",price:6},{type:"time",price:6}],description:"先制晶片攻击时，有概率赋予ADF下降·小",lv0:"50%",lv1:"-",lv2:"-"},{id:"63",position:"driver",name:"神圣之羽",cost:[{type:"silver",price:8},{type:"wind",price:4}],description:"施展攻击魔法时，有概率追加附带延迟效果的25%额外伤害",lv0:"40%",lv1:"80%",lv2:"100%"},{id:"64",position:"driver",name:"神圣之羽·改",cost:[{type:"silver",price:12},{type:"wind",price:6}],description:"施展攻击魔法时，有概率追加附带延迟效果的50%额外伤害",lv0:"50%",lv1:"90%",lv2:"100%"},{id:"65",position:"driver",name:"奔流吸收",cost:[{type:"earth",price:6},{type:"water",price:3}],description:"施展攻击魔法时，有概率依伤害值2%回复EP",lv0:"50%",lv1:"75%",lv2:"100%"},{id:"66",position:"driver",name:"复仇咏唱",cost:[{type:"gold",price:12},{type:"fire",price:6}],description:"回避魔法攻击时，有概率用持有的魔法反击（不消耗EP）",lv0:"50%",lv1:"75%",lv2:"100%"},{id:"67",position:"extra",name:"防御起手式",cost:[{type:"earth",price:3}],description:"指令晶片开始时，有概率获得DEF上升·小，ADF上升·小2回合",lv0:"25%",lv1:"-",lv2:"-"},{id:"68",position:"extra",name:"能量起手式",cost:[{type:"water",price:3}],description:"指令晶片开始时，有概率获得HP回复·小2回合",lv0:"25%",lv1:"-",lv2:"-"},{id:"69",position:"extra",name:"威力起手式",cost:[{type:"fire",price:3}],description:"指令晶片开始时，有概率获得STR上升·小2回合",lv0:"25%",lv1:"-",lv2:"-"},{id:"70",position:"extra",name:"心眼起手式",cost:[{type:"wind",price:3}],description:"指令晶片开始时，有概率获得心眼1回合",lv0:"25%",lv1:"-",lv2:"-"},{id:"71",position:"extra",name:"快捷起手式",cost:[{type:"time",price:3}],description:"指令晶片开始时，有概率获得快速·小2回合",lv0:"25%",lv1:"-",lv2:"-"},{id:"72",position:"extra",name:"魔力起手式",cost:[{type:"gold",price:3}],description:"指令晶片开始时，有概率获得ATS上升·小2回合",lv0:"25%",lv1:"-",lv2:"-"},{id:"73",position:"extra",name:"幻像起手式",cost:[{type:"silver",price:3}],description:"指令晶片开始时，有概率获得匿踪1回合",lv0:"25%",lv1:"-",lv2:"-"},{id:"74",position:"extra",name:"防御起手式Ⅱ",cost:[{type:"earth",price:12}],description:"指令晶片开始时，有概率获得DEF上升·中，ADF上升·中2回合",lv0:"50%",lv1:"-",lv2:"-"},{id:"75",position:"extra",name:"能量起手式Ⅱ",cost:[{type:"water",price:12}],description:"指令晶片开始时，有概率获得HP回复·中2回合",lv0:"50%",lv1:"-",lv2:"-"},{id:"76",position:"extra",name:"威力起手式Ⅱ",cost:[{type:"fire",price:12}],description:"指令晶片开始时，有概率获得STR上升·中2回合",lv0:"50%",lv1:"-",lv2:"-"},{id:"77",position:"extra",name:"心眼起手式Ⅱ",cost:[{type:"wind",price:12}],description:"指令晶片开始时，有概率获得心眼2回合",lv0:"50%",lv1:"-",lv2:"-"},{id:"78",position:"extra",name:"快捷起手式Ⅱ",cost:[{type:"time",price:12}],description:"指令晶片开始时，有概率获得快速·中2回合",lv0:"50%",lv1:"-",lv2:"-"},{id:"79",position:"extra",name:"魔力起手式Ⅱ",cost:[{type:"gold",price:12}],description:"指令晶片开始时，有概率获得ATS上升·中2回合",lv0:"50%",lv1:"-",lv2:"-"},{id:"80",position:"extra",name:"幻像起手式Ⅱ",cost:[{type:"silver",price:12}],description:"指令晶片开始时，有概率获得匿踪2回合",lv0:"50%",lv1:"-",lv2:"-"},{id:"81",position:"extra",name:"宝藏猎人",cost:[{type:"silver",price:3},{type:"wind",price:3}],description:"将原野上所有宝箱显示在迷你地图上",lv0:"-",lv1:"-",lv2:"-"},{id:"82",position:"extra",name:"鹰眼",cost:[{type:"gold",price:3},{type:"time",price:3}],description:"将原野上所有敌人显示在迷你地图上",lv0:"-",lv1:"-",lv2:"-"},{id:"83",position:"extra",name:"破迅者",cost:[{type:"wind",price:3},{type:"time",price:3}],description:"施展普通攻击·战技时有概率使目标陷入缓慢·小状态",lv0:"25%",lv1:"50%",lv2:"100%"},{id:"84",position:"extra",name:"破迅强袭",cost:[{type:"water",price:8},{type:"wind",price:8}],description:"先制晶片攻击时有概率对所有敌人追加缓慢·小",lv0:"50%",lv1:"-",lv2:"-"},{id:"85",position:"extra",name:"自动强音之力",cost:[{type:"fire",price:8},{type:"silver",price:8}],description:"指令战斗中行动时，有概率获得STR+10% 1回合",lv0:"10%",lv1:"50%",lv2:"100%"},{id:"86",position:"extra",name:"自动结晶防护",cost:[{type:"earth",price:8},{type:"gold",price:8}],description:"指令战斗中行动时，有概率获得DEF+10% 1回合",lv0:"10%",lv1:"50%",lv2:"100%"},{id:"87",position:"extra",name:"自动快速",cost:[{type:"wind",price:8},{type:"time",price:8}],description:"指令战斗中行动时，有概率获得行动后硬直-10%，MOV+2 1回合",lv0:"10%",lv1:"50%",lv2:"100%"},{id:"88",position:"extra",name:"HP补给",cost:[{type:"water",price:6},{type:"gold",price:6}],description:"指令战斗结束后，HP回复5%",lv0:"100%",lv1:"-",lv2:"-"},{id:"89",position:"extra",name:"EP补给",cost:[{type:"earth",price:6},{type:"water",price:6}],description:"指令战斗结束后，EP回复5%",lv0:"100%",lv1:"-",lv2:"-"},{id:"90",position:"extra",name:"CP补给",cost:[{type:"fire",price:8},{type:"wind",price:8}],description:"指令战斗结束后，CP+25",lv0:"100%",lv1:"-",lv2:"-"},{id:"91",position:"extra",name:"HP补给Ⅱ",cost:[{type:"water",price:14},{type:"gold",price:14}],description:"指令战斗结束后，HP回复10%",lv0:"100%",lv1:"-",lv2:"-"},{id:"92",position:"extra",name:"EP补给Ⅱ",cost:[{type:"earth",price:14},{type:"water",price:14}],description:"指令战斗结束后，EP回复10%",lv0:"100%",lv1:"-",lv2:"-"},{id:"93",position:"extra",name:"CP补给Ⅱ",cost:[{type:"fire",price:14},{type:"wind",price:14}],description:"指令战斗结束后，CP+50",lv0:"100%",lv1:"-",lv2:"-"},{id:"94",position:"extra",name:"S.C.L.M.扩增",cost:[{type:"time",price:8},{type:"water",price:4}],description:"指令战斗时，S.C.L.M.半径+1",lv0:"100%",lv1:"100%",lv2:"100%"},{id:"95",position:"extra",name:"危机之力",cost:[{type:"gold",price:12},{type:"fire",price:6}],description:"指令战斗中，濒死状态下行动时有概率全能力上升·小（每战限1次）",lv0:"50%",lv1:"90%",lv2:"100%"},{id:"96",position:"extra",name:"夺取奖励",cost:[{type:"silver",price:12},{type:"wind",price:6}],description:"施展普通攻击·战技时，有概率获取目标的AT奖励",lv0:"25%",lv1:"50%",lv2:"100%"}],ce={class:"circuit-option"},re={class:"diamond-container"},oe={class:"circuit-option-text"},se=["onClick"],ae={class:"diamond-container"},ne={class:"circuit-icon-text"},le={__name:"KurotwoView",setup(de){const e=W({backpackVisible:!1,shadowSkillVisible:!1,shadowType:0,circuitSelectIndex:"",slotSelect:{type:"all",name:"无限定",index:-1,linkId:""},slotList:[],circuitList:[]}),R=()=>({type:"none",name:"请选择",cost:[{type:"none",price:0}]}),X=Y(()=>{const p=_.slice(2);let i=p.map(t=>({label:t.name,value:t.key,type:t.key,children:[]}));const a=t=>{const{name:r,type:v}=t,{linkId:f,slotSelect:w}=e;return f===0&&(r.includes("轮")||r.includes("诗"))||f===1&&(r.includes("刃")||r.includes("诗"))||f===2&&(r.includes("轮")||r.includes("刃"))||w.type!=="all"&&w.type!==v?!0:e.circuitList.some(u=>u.id===t.id)};return g.forEach(t=>{if(!a(t)){const r=p.findIndex(v=>v.key===t.type);r>-1&&r<i.length&&i[r].children.push({label:t.name,value:t.id,type:t.type,cost:t.cost})}}),e.slotSelect.type!=="all"&&(i=[{label:e.slotSelect.name,value:e.slotSelect.type,type:e.slotSelect.type,children:[]}],g.forEach(t=>{e.slotSelect.type===t.type&&!a(t)&&i[0].children.push({label:t.name,value:t.id,type:t.type,cost:t.cost})})),i}),L=p=>{e.circuitList[p]=R()},k=(p,i)=>{e.backpackVisible=!0,e.slotSelect={name:K[e.slotList[p].type],type:e.slotList[p].type,index:p,linkId:i.id}},D=p=>{const i=e.slotSelect,a=g[p-1];e.circuitList[i.index]=a,e.circuitSelectIndex="",e.backpackVisible=!1},b=p=>{e.shadowSkillVisible=!0,e.shadowType=p.id},F=p=>{let i=p.id;for(let a=i*4;a<i*4+4;a++)e.circuitList[a]={type:"none",name:"请选择",index:-1}};return Z(()=>{for(let p=0;p<16;p++)e.slotList.push({type:"all",name:"通用孔"});for(let p=0;p<16;p++)e.circuitList.push(R())}),ee(()=>{console.log("onMounted")}),(p,i)=>{const a=z,t=N,r=q,v=ie,f=te,w=G,u=J,V=j,I=U;return y(),h("div",null,[d(t,{visible:e.backpackVisible,"onUpdate:visible":i[1]||(i[1]=c=>e.backpackVisible=c),header:"请选择结晶回路",footer:!1,width:"60%","show-all-levels":!1},{default:s(()=>[d(a,{modelValue:e.circuitSelectIndex,"onUpdate:modelValue":i[0]||(i[0]=c=>e.circuitSelectIndex=c),options:X.value,onChange:D},{option:s(({item:c})=>[n("div",ce,[n("div",re,[n("div",{class:S("diamond-"+c.type)},null,2),n("div",{class:S("inner-diamond-"+c.type)},null,2)]),n("div",oe,C(c.label),1)])]),_:1},8,["modelValue","options"])]),_:1},8,["visible"]),d(B,{shadowSkillVisible:e.shadowSkillVisible,shadowType:e.shadowType,skillList:T(pe),slotList:e.slotList,circuitList:e.circuitList,onCloseDialog:i[2]||(i[2]=c=>e.shadowSkillVisible=!1)},null,8,["shadowSkillVisible","shadowType","skillList","slotList","circuitList"]),d(I,{direction:"vertical",size:"large"},{default:s(()=>[(y(!0),h(A,null,P(T($),(c,m)=>(y(),E(V,{key:m,title:c.name},{actions:s(()=>[d(r,{theme:"danger",variant:"outline",onClick:o=>F(c),style:{"margin-right":"10px"}},{default:s(()=>i[3]||(i[3]=[H("清空")])),_:2},1032,["onClick"]),d(r,{theme:"primary",onClick:o=>b(c)},{default:s(()=>i[4]||(i[4]=[H("晶片技能")])),_:2},1032,["onClick"])]),default:s(()=>[d(u,{ref_for:!0,ref:"form",data:e,"label-width":"120px",layout:"inline","scroll-to-first-error":"smooth"},{default:s(()=>[(y(!0),h(A,null,P([m*4,m*4+1,m*4+2,m*4+3],(o,M)=>(y(),E(w,{key:M,name:c.name+o},{label:s(()=>[d(f,{modelValue:e.slotList[o].type,"onUpdate:modelValue":l=>e.slotList[o].type=l,style:x(e.slotList[o].type?"color:"+T(O)[e.slotList[o].type]:""),onChange:l=>L(o)},{default:s(()=>[(y(!0),h(A,null,P(T(_),l=>(y(),E(v,{key:l.key,style:x("color:"+l.color),label:l.name,value:l.key},null,8,["style","label","value"]))),128))]),_:2},1032,["modelValue","onUpdate:modelValue","style","onChange"])]),default:s(()=>[n("div",{class:"circuit",onClick:l=>k(o,c)},[n("div",ae,[n("div",{class:S("diamond-"+e.circuitList[o].type)},null,2),n("div",{class:S("inner-diamond-"+e.circuitList[o].type)},null,2)]),n("div",ne,C(e.circuitList[o].name),1)],8,se)]),_:2},1032,["name"]))),128))]),_:2},1032,["data"])]),_:2},1032,["title"]))),128))]),_:1})])}}},fe=Q(le,[["__scopeId","data-v-24556724"]]);export{fe as default};
