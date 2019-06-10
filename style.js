window.jQuery = function(nodeOrSelector) { //node或选择器
    let nodes = {} //声明变量
    if (typeof nodeOrSelector === 'string') { //如果是字符串
      let temp = document.querySelectorAll(nodeOrSelector) //伪数组
      for (let i = 0; i < temp.length; i++) {
        nodes[i] = temp[i]
      }
      nodes.length = temp.length
    } else if (nodeOrSelector instanceof node) { //判断对象类型（如果是node）
      nodes = {
          0: nodeOrSelector,
          length: 1
        } //伪数组
    }
    nodes.addClass = function(classes) {
      classes.forEach((value) => {
        for (let i = 0; i < nodes.length; i++) {
          nodes[i].classList.add(value)
        }
      })
    }
    nodes.text = function(text) {
      if (text === undefined) {
        var texts = []
        for (let i = 0; i < nodes.length; i++) {
          texts.push(nodes[i].textContent)
        }
        return texts
      } else {
        for (let i = 0; i < nodes.length; i++) {
          nodes[i].textContent = text
        }
      }
    }
    return nodes
  }
  
  var node2 = jQuery('ul>li') //同时操作所有的li
  node2.addClass(['blue'])
    //console.log(node2.getText())
  console.log(node2.text())