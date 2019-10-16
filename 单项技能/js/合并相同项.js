let li = [
  {
    time: 1,
    count: 1
  },
  {
    time: 1,
    count: 4
  },
  {
    time: 2,
    count: 2
  },
  {
    time: 2,
    count: 7
  },
  {
    time: 3,
    count: 1
  },
  {
    time: 4,
    count: 1
  },
  {
    time: 4,
    count: 2
  }
]

let rel = li.filter((item, index) => {
  if (index === li.length - 1) return true

  let nextIndex = index + 1

  if (item.time === li[nextIndex].time) {
    li[nextIndex].count += item.count
    return false
  }
  return true
})

console.log(rel)