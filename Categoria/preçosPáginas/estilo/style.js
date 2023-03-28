
const Pages1 =`
    <style>
    .container{
    margin-top:4vh ;
    position: relative;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    width:70vw;
    height: 60vh;
    background-color: #fff;
    border-radius:15px;
  }
  .category{
    position: absolute;
    top: 15px;
    left: 38%;
  }

  .preco h1{
    position: relative;
    top: 5vh;
    left: 4vw;
    font-size: 90px;
    color:#FF1659 ;
  }
  .preco h4{
    color: #555;
  }
  .preco h1::after{
    content:"R$";
    color: #555;
    font-size: 38px;
    position: relative;
    top:-70px ;
    left: -140px;
  }
   #name{
     position: relative;
     color: #fff;
    height:5vh ;
    display:flex ;
    align-items: center;
    justify-content: center;
    border-radius:30px ;
    left: -65px;
    width:50vw;
    background: #34335C;
  }
  button{
    color: #fff;
    display:flex;
    align-items:center;
    justify-content:center;
    border: none;
    height: 5vh;
    width: 40vw;
    position: relative;
    top: 60px;
    left: 60px;
    border-radius:30px ;
    background:#FF1659 ;
  }
  </style>
    `

export {
  Pages1
}
