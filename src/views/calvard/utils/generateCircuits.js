// 核心逻辑函数
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

  // 过滤掉需要排除的circuit
  let filteredInventory = inventory.filter((circuit) => !circuitExclusions.includes(circuit.id))
  // 同时得到必须的电路和非必须的电路
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

  // 回溯法辅助函数
  function backtrack(index) {
    if (index === 16) {
      return true // 找到一个有效解
    }

    const slot = slots[index]
    // 空插槽直接跳过
    if ('none' === slot.type) {
      return backtrack(index + 1)
    }
    // 遍历所有回路
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

      // 检查每种type的成本是否满足条件
      let valid = true
      for (const [type, price] of Object.entries(typeCosts)) {
        if (price < (maxCostByChain[slot.position] || {})[type] || 0) {
          valid = false
          break
        }
      }

      if (valid) {
        result[index] = circuit
        if (backtrack(index + 1)) {
          return true
        }
        result[index] = null // 回溯
      }
    }
    return false
  }

  // 开始回溯
  backtrack(0)

  return result
}
