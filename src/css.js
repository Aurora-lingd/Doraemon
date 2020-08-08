const string = `
.header{
    width: 324px;
    height: 304px;
    border: 2px solid #757575;
    position: relative;
    left: 50%;
    margin-left: -162px;
    border-radius: 50% ;
    background: linear-gradient(229deg, rgba(255,255,255,1) 10%, rgba(7,187,238,1) 20%, rgba(16,166,206,1) 75%, rgba(0,0,0,1) 100%);
    box-shadow: -5px 10px 15px rgba(171,168,168,1);
}
.header .face{
    width: 264px;
    height: 196px;
    border-radius: 50%;
    border: 1px solid white;
    background-color: white;
    position: absolute;
    top: 80px;
    left: 50%;
    margin-left: -132px;
    z-index: 3;
}
.header .eye{
    width: 76px;
    height: 86px;
    border: 2px solid black;
    position: absolute;
    left: 50%;
    top: -40px;
    margin-left: -38px;
    border-radius: 35px;
    background-color:white;
    z-index: 1;
}
.header .eye::before{
    content: '';
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background-color: black;
    position: absolute;
    top: 50%;
}
 
.header .eye.left{
    transform: translateX(37px);
}
.header .eye.right{
    transform: translateX(-37px);
}
.header .eye.left::before{
    left: 15px;
}
.header .eye.right::before{
    right: 15px;
}



.header .nose{
    width: 34px;
    height: 34px;
    border: 2px solid black;
    border-radius: 45%;
    background-color:#ba401d ;
    position: absolute;
    left: 50%;
    margin-left: -17px;
    top: 30px;
}
.header .nose::before{
    content: '';
    width: 10px;
    height: 10px;
    display: block;
    position: absolute;
    top: -2px;
    left: -4px;
    border-radius: 5px;
    box-shadow: 19px 8px 5px #fff;
}
.header .nose::after{
    display: block;
    content: '';
    height: 96px;
    width: 2px;
    background-color: black;
    position: absolute;
    left: 50%;
    margin-left: -1px;
    bottom: -96px;
}
.header .mouth{
    width: 190px;
    height: 180px;
    border: 3px solid black;
    position: absolute;
    left: 50%;
    margin-left: -95px;
    border-radius: 0 0 100px 100px;
    top: -20px;
    border-top:transparent;
    border-left: transparent;
    border-right: transparent;
}
.header .mouth::before{
    content: '';
    width: 20px;
    height: 55px;
    display: block;
    background-color: white;
    position: absolute;
    bottom: 39px;
    left: 0;
}
.header .mouth::after{
    content: '';
    width: 20px;
    height: 55px;
    display: block;
    background-color: white;
    position: absolute;
    bottom: 39px;
    right: 0;

}
.header .huz,.header .huz::before,.header .huz::after{
    width:58px;
    height: 2px;
    border: 1px solid black;
    background-color: black;
    position: absolute;
    left: 50%;
    margin-left: -29px;
}

.header .huz.left{
    bottom: 130px;
    transform: translateX(78px) rotate(-25deg);

}
.header .huz.right{
    bottom: 130px;
    transform: translateX(-78px) rotate(25deg);

}
.header .huz.left::before,.header .huz.right::before,.header .huz.left::after,.header .huz.right::after{
    content: '';
    display: block;
}
.header .huz.left::before{
    bottom:-20px ;
    transform: translateX(-6px) rotate(23deg);
}
.header .huz.right::before{
    bottom:-20px ;
    transform: translateX(6px) rotate(-23deg);
}
.header .huz.left::after{
    bottom:-40px ;
    transform: translateX(-15px) rotate(45deg);
}
.header .huz.right::after{
    bottom:-40px;
    transform: translateX(15px) rotate(-45deg);
}
.header .necklace{
    width: 234px;
    height: 24px;
    border: 2px solid black;
    position: absolute;
    bottom: 10px;
    left: 50%;
    margin-left: -117px;
    background-color: #ba401d;
    border-radius: 20px;
    z-index: 3;
}
.header .necklace .bell{
    width: 44px;
    height: 44px;
    border: 2px solid black;
    background-color: #f3eb56;
    position: absolute;
    left: 50%;
    margin-left: -22px;
    top: 10px;
    border-radius: 50%;
}
.header .necklace .bell .yuan{
    width: 12px;
    height: 10px;
    border-radius: 50%;
    border: 2px solid black;
    position: absolute;
    left: 50%;
    margin-left: -6px;
    bottom: 10px;
    background-color: black;
    box-shadow: 11px -13px 4px white;
    z-index: 10;
}
.header .necklace .bell::after,.header .necklace .bell::before{
    content: '';
    display: block;
    position: absolute;
}
.header .necklace .bell::after{
    width: 40px;
    height: 6px;
    border: 2px solid black;
    top: 10px;
    border-radius: 2px 2px 0 0 ;
}
.header .necklace .bell::before{
    width: 4px;
    height: 15px;
    background-color: black;
    left: 50%;
    margin-left: -2px;
    bottom: 0;
}


.body{
    width: 224px;
    height: 168px;
    border: 2px solid black;
    position: relative;
    left: 50%;
    margin-left: -112px;
    top:-16px;
    background: linear-gradient(270deg, rgba(7,187,238,1) 0%, rgba(48,116,173,1) 42%, rgba(42,125,179,1) 57%, rgba(8,185,234,1) 84%);
    z-index: 2;
}
.body::before,.body::after{
    content: '';
    display: block;
    width: 2px;
    height: 38px;
    border: 1px solid  rgba(7,187,238,1);
    position: absolute;
    left: 50%;
    margin-left: -17px;
    top: 0px;
}
.body::before{
    transform: translateX(-95px);
}
.body::after{
    transform: translateX(127px);
}
.body .belly{
    width: 174px;
    height: 174px;
    border: 2px solid black;
    border-radius: 50%;
    background-color: white;
    position: absolute;
    left: 50%;
    margin-left: -87px;
    top: -35px;

}
.body .belly .bag{
    width: 134px;
    height: 134px;
    border: 2px solid black;
    position: absolute;
    left: 50%;
    margin-left:-67px;
    bottom: 20px;
    border-radius: 0 0 50% 50%;
}
.body .belly .bag::before,.body .belly .bag::after{
    width: 134px;
    content: '';
    display: block;
    position: absolute;
    left: 50%;
    margin-left: -67px;
}
.body .belly .bag::before{
    height: 53px;
    border: 2px solid white;
    top: 14px;
}
.body .belly .bag::after{
    height: 0px;
    border: 1px solid black;
    top:65px;
}
.hand{
    width: 100px;
    height: 100px;
    position:absolute;
    left: 50%;
    margin-left: -50px;
    top: 300px;
}
.hand.left{
    transform: translateX(-120px);
}
.hand.right{
    transform: translateX(120px);
}
.hand.left .arm,.hand.right .arm{
    width: 60px;
    height: 50px;
    border: 1px solid black;
    position: absolute;
    left: 50%;
    margin-left: -25px;
    top: -5px;
    background-color: rgba(7,187,238,1);
    box-shadow: 10px 5px 10px #8b8b8f;
}
.hand.left .arm{
    transform: translateX(-10px) rotate(-35deg);
}
.hand.right .arm{
    transform: translateX(0px) rotate(35deg);
}
.hand .arm::after{
    content: '';
    display: block;
    width: 64px;
    height: 64px;
    border: 2px solid black;
    background-color: white;
    position: absolute;
    left: 50%;
    margin-left: -32px;
    top: -5px;
    border-radius: 50%;
    
}
.hand.left .arm::after{
    transform: translateX(-40px);
    background: linear-gradient(66deg, rgba(191,187,187,1) 0%, rgba(224,224,224,1) 16%, rgba(248,248,248,1) 30%, rgba(255,255,255,1) 100%);
    
}
.hand.right .arm::after{
    transform: translateX(40px);
    background: linear-gradient(315deg, rgba(191,187,187,1) 0%, rgba(224,224,224,1) 16%, rgba(248,248,248,1) 30%, rgba(255,255,255,1) 100%);
}
.hand.left .arm::before{
    transform: rotate(-55deg) translateY(10px);
}
.foot{
    width: 120px;
    height: 34px;
    border: 2px solid black;
    position: absolute;
    left: 50%;
    margin-left: -60px;
    border-radius:80px 50px 50px 50px ;
    bottom: -10px;
    z-index: 2;
    background: rgb(171,168,168);
background: linear-gradient(85deg, rgba(171,168,168,1) 0%, rgba(255,255,255,1) 18%);
}
.foot.left{
    transform: translateX(-70px);
}
.foot.right{
    transform: translateX(70px);
}
.foot.left::before{
    content: '';
    display: block;
    width: 26px;
    height: 14px;
    position: absolute;
   right:-26px;
    bottom: 22px;
    border: 2px solid black;
    border-radius: 40px 40px 0 0;
    background: rgb(255,255,255);
background: linear-gradient(328deg, rgba(255,255,255,1) 0%, rgba(79,72,72,1) 100%);
    border-bottom: none;
}
`
export default string;