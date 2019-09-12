// var  li = ['中国', '四川', '遂宁', '南门']

// function makeTree (li) {
//   var li_rev = li.concat()
//   var children = []

//   function inner (li) {
//     var item = li.pop()

//     children = [
//       {
//         label: item,
//         value: item,
//         children: children
//       }
//     ]

//     if (li.length) {
//       inner(li)
//     } else {
//       return
//     }
//   }

//   inner(li_rev)
//   console.log(JSON.stringify(children))
// }

// makeTree(li);
var options = [
  {
    label: '四川',
    children: [
      {
        label: '遂宁',
        children: [
          {
            label: '蓬溪'
          },
          {
            label: '射洪'
          }
        ]
      }
    ]
  }
]

var o = {
  '四川': 0,
  '遂宁': 0
}

function needReq(address, options) {
  let index = o[address.shift()]

  if (address.length === 0) {
    return options[index].children.length <= 1
  } else {
    return needReq(address, options[index].children)
  }
}

var address = ['四川', '遂宁']

var rel = needReq(address, options)
console.log(rel)