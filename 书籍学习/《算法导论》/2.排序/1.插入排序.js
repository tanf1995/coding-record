let li = [5, 2, 4, 6, 1, 3]
let liRand = []
let liAsc = []
let liDesc = []

for (let i = 0; i < 100000; i++) {
  liRand.push(Math.ceil(Math.random()*1000000))
  liDesc.push(i+1)
  liAsc.push(100000 - i)
}


function sort(li, order = 1) {
  let relLi = []

  relLi.push(li[0])
  for (let i = 1; i < li.length; i++) {
    let index = relLi.length

    for (let j = 0; j < relLi.length; j++) {
      if ((li[i] - relLi[j])*order <= 0) {
        index = j
        break
      }
    }
    relLi.splice(index, 0, li[i])
  }

  return relLi
}


// let liSort = sort(liRand, 1)  // 7.11s
// let liSort = sort(liAsc, 1) // 2.57s
let liSort = sort(liDesc, 1) // 12.007s
console.log(liSort)

// 时间复杂度 n²