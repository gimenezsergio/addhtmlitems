

let addItem = function (element = {one: "vacio",two: "vacio", tree: "vacio"}) {
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

let removeItem = function () {

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
        one: "one",
        two: "two",
        tree: "tree"
    },
    {
        one: "four",
        two: "five",
        tree: "six"
    }
    ]
    return dataList
}

let item = function (element) {
    let classesItem = 'item'
    let classesItemCol = 'itemCol'
    let myItem = /*html*/`
    <div class="${classesItem}">
            <div class="${classesItemCol}">${element.one}</div>
            <div class="${classesItemCol}">${element.two}</div>
            <div class="${classesItemCol} subtotal">${element.tree}</div>
        </div>
    `
    return myItem
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