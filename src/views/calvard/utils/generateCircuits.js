export function generateCircuits(backpack, skills, slots, circuitRequirements, circuitExclusions) {
  const filteredBackpack = backpack.filter((c) => !circuitExclusions.includes(c.id))
  const requiredCircuits = filteredBackpack.filter((c) => circuitRequirements.includes(c.id))

  if (requiredCircuits.length !== circuitRequirements.length) {
    throw new Error('Not all required circuits are available in the backpack')
  }

  const result = Array(16).fill(null)

  function backtrack(position) {
    if (position === 16) {
      // 检查cost条件
      for (const position of [0, 1, 2, 3]) {
        const slotCosts = slots.filter((s) => s.position === position).flatMap((s) => s.cost)
        const circuitCosts = result
          .filter((c) => c && c.position === position)
          .flatMap((c) => c.cost)

        const totalSlotCost = slotCosts.reduce((sum, cost) => sum + cost.price, 0)
        const totalCircuitCost = circuitCosts.reduce((sum, cost) => sum + cost.price, 0)

        if (totalCircuitCost < totalSlotCost) {
          return false
        }
      }
      return true
    }

    const availableCircuits = filteredBackpack.filter((c) => {
      return (
        !result.includes(c) &&
        !c.name.includes(slots[position].excludedNames.join('')) &&
        (slots[position].type === 'all' ||
          slots[position].type === 'none' ||
          c.type.includes(slots[position].type))
      )
    })

    for (const circuit of availableCircuits) {
      result[position] = circuit
      if (backtrack(position + 1)) {
        return true
      }
      result[position] = null // 回溯
    }

    return false
  }

  // 填充必须选择的circuit
  for (const circuit of requiredCircuits) {
    const availableSlots = slots.filter((slot) => {
      return !result[slot.position] && !circuit.name.includes(slot.excludedNames.join(''))
    })

    if (availableSlots.length === 0) {
      throw new Error('No available slots for required circuit')
    }

    const slot = availableSlots[0]
    result[slot.position] = circuit
  }

  if (backtrack(0)) {
    return result
  } else {
    throw new Error('No valid solution found')
  }
}

// // 示例数据
// const backpack = [
//   { id: 1, name: 'Circuit1', type: ['earth'], cost: [{ type: 'earth', price: 10 }] },
//   { id: 2, name: 'Circuit2', type: ['water'], cost: [{ type: 'water', price: 20 }] },
//   { id: 3, name: 'Circuit3', type: ['fire'], cost: [{ type: 'fire', price: 15 }] }
//   // 其他circuit对象
// ]

// const skills = [
//   { id: 1, name: 'Skill1', position: 0, cost: [{ type: 'earth', price: 5 }] },
//   { id: 2, name: 'Skill2', position: 1, cost: [{ type: 'water', price: 15 }] }
//   // 其他skill对象
// ]

// const slots = [
//   { name: 'Slot1', position: 0, cost: [{ type: 'earth', price: 3 }], excludedNames: ['Circuit1'] },
//   { name: 'Slot2', position: 1, cost: [{ type: 'water', price: 7 }], excludedNames: [] }
//   // 其他slot对象
// ]

// const circuitRequirements = [1, 3]
// const circuitExclusions = [2]

// try {
//   const result = generateCircuits(backpack, skills, slots, circuitRequirements, circuitExclusions)
//   console.log(result)
// } catch (error) {
//   console.error(error.message)
// }
