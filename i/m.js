
const createString = (s, skipNumber) => {
    const string = s.split('. ')
    const arr = new Array()
  
    for (let i in string) {
      arr.push(string[i].split(' '))
    }
  
    for (let i in arr) {
      let subArr1 = arr[i].slice(0, arr[i].length - skipNumber)
      
      let subArr2 = arr[i].slice(arr[i].length - skipNumber, arr[i].length)
      subArr1 = subArr1.reverse()
     
      arr[i] = [...subArr1, ...subArr2]
    
      arr[i] = arr[i].join(' ')
     
    }
  
    const result = arr.join('. ')
    return result
  }
  
  const givenString = 'Hi there. My name is sam. This is my lucky day. I like coding so much. This is it.'
  const skipNumber = 2
  console.log("input : "+givenString)
  console.log(createString(givenString, skipNumber));