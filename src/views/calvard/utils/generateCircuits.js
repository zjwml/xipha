export function findOptimalCircuits(
  inventory,
  skills,
  slots,
  circuitRequirements,
  circuitExclusions
) {
  const result = Array(16).fill(null) // 初始化结果数组

  // 计算每个chain的最大cost
  const maxCostByChain = skills.reduce((acc, skill) => {
    skill.cost.forEach((cost) => {
      if (!acc[skill.position]) acc[skill.position] = {}
      if (!acc[skill.position][cost.type]) acc[skill.position][cost.type] = -Infinity
      acc[skill.position][cost.type] = Math.max(acc[skill.position][cost.type], cost.price)
    })
    return acc
  }, {})

  // 对每个position下的type按cost从大到小排序
  const sortedMaxCostByChain = Object.fromEntries(
    Object.entries(maxCostByChain).map(([position, types]) => [
      position,
      Object.fromEntries(Object.entries(types).sort((a, b) => b[1] - a[1]))
    ])
  )

  // 过滤掉需要排除的circuit
  let filteredInventory = inventory.filter((circuit) => !circuitExclusions.includes(circuit.id))
  // 同时得到必须的回路和非必须的回路
  const { requiredInventory, pendingInventory } = filteredInventory.reduce(
    (acc, circuit) => {
      if (circuitRequirements.includes(circuit.id)) {
        acc.requiredInventory.push(circuit)
      } else {
        acc.pendingInventory.push(circuit)
      }
      return acc
    },
    { requiredInventory: [], pendingInventory: [] }
  )
  // 排序非必须circuits以优化性能
  pendingInventory.sort(
    (a, b) =>
      b.cost.reduce((sum, cost) => sum + cost.price, 0) -
      a.cost.reduce((sum, cost) => sum + cost.price, 0)
  )
  // 合并必须回路和待选择的circuit
  filteredInventory = [...requiredInventory, ...pendingInventory]

  // 填充结果数组
  function fillResult() {
    for (let index = 0; index < 16; index++) {
      const slot = slots[index]
      // 空插槽直接跳过
      if ('none' === slot.type) {
        continue
      }

      // 获取当前position下的type按cost排序
      const positionTypes = sortedMaxCostByChain[slot.position]
      if (!positionTypes) continue

      // 遍历所有type，优先满足cost高的type
      for (const [type, maxCost] of Object.entries(positionTypes)) {
        let accumulatedCost = 0
        let circuitsForType = []

        for (const circuit of filteredInventory) {
          // 排除已选择的回路
          if (result.includes(circuit)) {
            continue
          }
          // 排除包含排除名单的回路
          if (slot.excludedNames.some((excludedName) => circuit.name.includes(excludedName))) {
            continue
          }
          // 筛选出符合类型的回路
          if (slot.type !== 'all' && slot.type !== 'none' && circuit.type !== slot.type) {
            continue
          }
          // 计算每种type的成本
          const typeCosts = circuit.cost.reduce((acc, cost) => {
            if (!acc[cost.type]) acc[cost.type] = 0
            acc[cost.type] += cost.price
            return acc
          }, {})

          // 累积当前type的成本
          if (typeCosts[type]) {
            accumulatedCost += typeCosts[type]
            circuitsForType.push(circuit)
          }

          // 检查是否满足当前type的要求
          if (accumulatedCost >= maxCost) {
            // 分配满足条件的circuit
            for (const circuit of circuitsForType) {
              if (result.includes(circuit)) {
                continue
              }
              result[index] = circuit
              break
            }
            break
          }
        }

        // 如果已经填满16个位置，提前结束
        if (result.every((c) => c !== null)) {
          return true
        }
      }
    }
    return result.every((c) => c !== null)
  }

  // 填充结果数组
  const isFilled = fillResult()

  return isFilled ? result : []
}
