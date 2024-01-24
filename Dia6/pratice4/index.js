let value = parseInt(prompt('Give an input'))

for(let i = value;  i <= value + 2; i++){
    console.log('tabuada do numero: ' + i)
    for(let j = 1; j <= 10; j++){
        console.log(`${i} * ${j} = ${i * j}`);
    }
}
