let Heroi = "ShaKa"
let Vitorias = 70
let Derrotas = 10

function Rank (Vitorias, Derrotas  ) {
    let xp = Vitorias - Derrotas
    let nivel = ""
    
    if (xp <=10){
      nivel = "Ferro"
  }   else if (xp <= 20){
      nivel ="Bronze"
  }   else if (xp <= 50){
       nivel ="Prata"
  }   else if (xp <= 80){
      nivel ="Ouro"
  }    else if (xp <= 90){
      nivel ="Diamante"
  }   else if (xp <= 100){
      nivel ="Lendario"
  }   else {
    nivel ="Imortal" 
  }
       
return  nivel
      
}  
let xp = Vitorias - Derrotas
let nivel = Rank ( Vitorias, Derrotas )

console.log (
    `O Herói de nome ${Heroi} tem o saldo de ${xp} vitorias e está no nível ${nivel}`
    )

