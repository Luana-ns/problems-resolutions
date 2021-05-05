function coordinates(x,y){
    if (x == 0 && y == 0){
        console.log('Origem')
    } else if (x == 0){
        console.log ('Eixo Y')
    } else if (y == 0){
        console.log ('Eixo X')
    } else if (x > 0 && y > 0){
        console.log('Q1')
    } else if (x < 0 && y > 0){
        console.log ('Q2')
    } else if (x < 0 && y < 0){
        console.log('Q3')
    } else if (x > 0 && y < 0){
        console.log('Q4')
    }
}
//Tests:
coordinates(4.5, -2.2)
coordinates(0.1, 0.1)
coordinates(0, 0)
