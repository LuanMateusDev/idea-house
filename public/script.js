function onOff(){
    document
        .querySelector("#modal")    
        .classList
        .toggle("hide")

    document
        .querySelector("body")
        .classList
        .toggle("hideScroll")

    document
        .querySelector("#modal")
        .classList
        .toggle("addScroll")
} 

function checkFields(event){

    const valuesToCheck = [
        "title",
        "image",
        "category",
        "description",
        "link",
    ]

    const isEmpty = valuesToCheck.find(function(value){

        const checkIfString = typeof event.target[value].value === "string"
        const checkIfEmpty = !event.target[value].value.trim()

        if (checkIfString && checkIfEmpty) {


            return true
        }


    })

    if (isEmpty){
            event.preventDefault()
            alert("Por favor, preencha todos os campos!")    
    }


}
