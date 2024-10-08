let a = []
let b = []
let c = []

for(let i = 0; i < 5; i++){

    a[i] = prompt(`Digite o  ${i}º valor: `)

    b[i] = Math.round( Math.random() * 4 + 1 )

    c[i] = a[i]*b[i]

}

for(let j = 0; j < 5; j++){
    console.log(c[j])
}

