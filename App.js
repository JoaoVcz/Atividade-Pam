import  {  StatusBar  }  from  'expo-status-bar' ;
import  {  StyleSheet ,  Text ,  Image  ,  View  }  from  'react-native' ;

importar  Img  de  './assets/Lua.png' ;

exportar  função padrão  App ( ) {  
  retornar  (
    < Estilo de visualização  = { estilos . recipiente } >
      < Estilo da imagem  = { estilos . img } fonte = { img } / > 

    
    < Estilo de visualização  = { estilos . caixatexto } > 
    < Estilo de texto  = { estilos . titulo } > Lua < / Text >
    < Estilo de texto  = { estilos . texto } > A lua é o satélite natural do < Text style = { styles . especial } > planeta Terra < / Text > , distanciados por aproximadamente 384.405km. < / Texto > 
    < / Ver >
    < / Ver >
  ) ;
}

 estilos  const =  StyleSheet . criar ( {
  recipiente : {
    Flexão : 1 ,
    backgroundColor : '#000' ,
    alignItems : 'center' ,
    justificarConteúdo : 'centro' ,
    preenchimento : 30
  } ,

  img : {
    largura : 100 ,
    altura : 100 ,
    margemBaixo : 50
  } ,

  caixatexto : {
    borderColor : "#fff" ,
    largura da borda : 2 ,
    borderRadius : 20 ,
    borderStyle : 'pontilhado' ,
    preenchimentoVertical : 10 ,
    preenchimentoHorizontal : 20
  } ,

  título : {
    cor : '#fff' ,
    tamanho da fonte : 30 ,
    fontWeight : 'bold' ,
    margemBottom : 20 ,
    textAlign : 'centro'
  } ,

  texto : {
    tamanho da fonte : 20 ,
    cor : '#fff' ,
    textAlign : 'centro'
  } ,

  especial : {
    fontStyle : 'italic' ,
    fontWeight : 'bold'
  }
} ) ;
// feito por João Vitor Da Cruz Souza e Matheus Macedo
