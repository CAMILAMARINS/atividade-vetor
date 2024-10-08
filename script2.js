let num, i, nums = [], negativos = [] 

for (i = 0; i < 5; i++) {

    num = Number(prompt("Digite um valor:"))
    nums.push(num)
    
}

for (i = 0; i < 5; i++) {

    if (nums[i] < 0) {
        negativos.push(nums[i]) 
    }
}

if (negativos.length > 0) {
    console.log(`Os números negativos são: ${negativos}`)
}