

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

    
    // let para = document.createElement("input");
    // let node = document.createTextNode("Tutorix is the best e-learning platform");
    // para.appendChild(node);
    // let el = document.getElementById("wrapper");
    // el.appendChild(para);    
    

    // let aCopiar = document.querySelector('#test')
    // const clone = aCopiar.cloneNode(true)
    // document.querySelector('#wrapper').appendChild(clone)

    // let wrapper = document.querySelector('#model')
    // wrapper.innerHTML += item(element)
}


let loadJson = function () {
    //cargar de la api
    let fake = fakeData()
    fake.forEach(element => {
        addItem(element)    
    });
    
}

let selectHtml = function () {
    let data = [
        {
        price: 200,
        code: 'COD1',
        nombre: 'Tamaño de poro'
      },
      {
        price: 100,
        code: 'COD2',
        nombre: 'Ruptura de papel'
      },
      {
        price: 140,
        code: 'COD3',
        nombre: 'Permeabilidad'
      },
      {
        price: 540,
        code: 'COD4',
        nombre: 'Performance de filtro de aire'
      }
    ]

    return data
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
            <div class="${classesItemCol}">${element.one} <input> </div>
            <div class="${classesItemCol}">${element.two}
            <select class="form-select" name="" id="" onchange="changeSelect(this)"> 
            <option value="" selected disabled>Elegir</option> 
            ${selectHtml().map(item =>
                `
                                    <option price="${item.price}" code="${item.code}" value="">${item.nombre}</option>               
                            `
            
              ).join('')}  
              </select>
              </div>
            <div class="${classesItemCol} subtotal">${element.tree}</div>
            <div> <button onclick='deleteItem(this)' class='deleteItem'>Borrar</button> </div>
        </div>
    `
    return myItem
}

let modelHtml = function(){
    addItem()
}

let deleteItem = function(element){
    //remove from server and html
    if (element.parentElement.parentElement.id === 'undefined') {
        console.log('no esta definido, borrar del html')
        element.parentElement.parentElement.remove()
        //remove from html
    }else{
        //remove from server
        console.log('borrar del server')
    }
    console.log(element.parentElement.parentElement.id)
    
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
          readOnlyInput()
          document.querySelector('#addItem').setAttribute('disabled','true')
      }else{
          console.log('No hay id. Nuevo')
      }
}

let readOnlyInput = function() {
    
    const buttons = document.querySelectorAll(".deleteItem");
    buttons.forEach((element) => {
      element.setAttribute("readonly", "true");
      element.setAttribute("disabled", "true");
    });

    const inputs = document.querySelectorAll("input");
    inputs.forEach((element) => {
      element.setAttribute("readonly", "true");
      element.setAttribute("disabled", "true");
    });

    const selects = document.querySelectorAll(".form-select");
    selects.forEach((element) => {
      element.setAttribute("readonly", "true");
    });
  }

viewEditNew()