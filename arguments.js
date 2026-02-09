function add (a, b){
    console.log(arguments)
    const params = [...arguments]
    console.log(params.map)
}

add(88, 77, 4 , 5, 9)

