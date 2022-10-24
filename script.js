

let addItem = function (element = {one: "vacio",two: "vacio", tree: 3}) {
    console.log(element)
    if (Array.isArray(element) && element.length){
        element = {
            one: "vacio",
            two: "vacio",
            tree: "vacio"
        }
    }
    let wrapper = document.querySelector('#wrapper')
    wrapper.innerHTML += item(element)
}


let loadJson = function () {
    //cargar de la api
    let fake = fakeData()
    fake.forEach(element => {
        addItem(element)    
    });
    
}

let fakeData = function () {
    let dataList = [{
        id:1,
        one: "one",
        two: "two",
        tree: 3
    },
    { id:2,
        one: "four",
        two: "five",
        tree: 6
    },
    {
        id:3,
        one: "seven",
        two: "eigth",
        tree: 9
    }
    ]
    return dataList
}

let item = function (element) {
    let classesItem = 'item'
    let classesItemCol = 'itemCol'
    let myItem = /*html*/`
    <div class="${classesItem}" id='${element.id}'>
            <div class="${classesItemCol}">${element.one}</div>
            <div class="${classesItemCol}">${element.two}</div>
            <div class="${classesItemCol} subtotal">${element.tree}</div>
            <div> <button onclick='deleteItem(this)'>Borrar</button> </div>
        </div>
    `
    return myItem
}

let deleteItem = function(element){
    //remove from server and html
    if (element.parentElement.parentElement.id === 'undefined') {
        console.log('no esta definido, borrar del html')
        //remove from html
    }else{
        //remove from server
        console.log('borrar del server')
    }
    console.log(element.parentElement.parentElement.id)
    // element.parentElement.parentElement.remove()
}

let total = function () {
    let subtotal = document.querySelectorAll('.subtotal')
    let total = 0
    subtotal.forEach(item => {
        total += parseInt(item.innerText)
    }
    )
    console.log(total)
    document.querySelector('.total').innerText = total
}

let viewEditNew = function(){
    const queryString = window.location.search;
      console.log(queryString);
      const urlParams = new URLSearchParams(queryString);
      console.log(parseInt(urlParams.get("id")))
      if (parseInt(urlParams.get("id"))) {
          console.log('Hay id. Editar. ver')
          loadJson()
      }else{
          console.log('No hay id. Nuevo')
      }
}

viewEditNew()