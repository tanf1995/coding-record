import random
import time

li = [5, 2, 4, 6, 1, 3]
li2 = []

for i in range(10000):
  li2.append(random.randint(0, 1000))

def sort(li, order):
  startTime = time.time()
  relLi = []

  relLi.append(li[0])
  for i in range(1, len(li)):
    index = len(li)

    for j in range(0, len(relLi)):
      if (li[i] - relLi[j])*order <= 0:
        index = j
        break
    
    relLi.insert(index, li[i])

  endTime = time.time()
  print(endTime - startTime)
  return relLi

liSort = sort(li2, 1)
print(liSort[0:10])