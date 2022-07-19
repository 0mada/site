* {
  cursor: url("arabic.png"),auto;
}
.elem {
    position:absolute;
    top : 50px;
    left:50px;
    height:30px;
    width:30px;
    -webkit-transition-property: -webkit-transform;
    -webkit-transition-duration: 1s;
    -moz-transition-property: -moz-transform;
    -moz-transition-duration: 1s;
    -webkit-animation-name: grow;
    -webkit-animation-duration: 2s;
    -webkit-animation-iteration-count: infinite;
    -webkit-animation-timing-function: linear;
    -moz-animation-name: grow;
    -moz-animation-duration: 2s;
    -moz-animation-iteration-count: infinite;
    -moz-animation-timing-function: linear;
    
    transition-property: -moz-transform;
    transition-duration: 1s;
    animation-name: grow;
    animation-duration: 2s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
}
@-webkit-keyframes grow {
    from {
        -webkit-transform:scale(1);
    }
    to {
        -webkit-transform:scale(4.333);
    }
}
@-moz-keyframes grow {
    from {
        -moz-transform:scale(1);
    }
    to {
        -moz-transform:scale(4.333);
    }
}
@keyframes grow {
    from {
        transform:scale(1);
    }
    to {
        transform:scale(4.333);
    }
}

html, body {
  height: 100%;
  width: 100%;
  background: black;
  color: darkorchid;
  font-size: 30px;
  font-family: 'nigger';
  align-items: center;
  justify-content:center;
  background-image: url("https://imgs.search.brave.com/D45-zX1EfH95RbgUab1IerZ4kDOERzvI4oVYrDwizR0/rs:fit:1200:720:1/g:ce/aHR0cHM6Ly9pbWFn/ZXMtd2l4bXAtZWQz/MGE4NmI4YzRjYTg4/Nzc3MzU5NGMyLndp/eG1wLmNvbS9mLzYw/N2NkM2FhLWNiOTMt/NGFkYi1iNWJmLWUx/YjU4OTYxZTMwOS9k/ZDh2emNxLTI1NTZk/NzY2LWE5NDctNDBk/ZS05MjFjLTg0YmRi/NmU0NjM4Yy5qcGc_/dG9rZW49ZXlKMGVY/QWlPaUpLVjFRaUxD/SmhiR2NpT2lKSVV6/STFOaUo5LmV5Snpk/V0lpT2lKMWNtNDZZ/WEJ3T2lJc0ltbHpj/eUk2SW5WeWJqcGhj/SEE2SWl3aWIySnFJ/anBiVzNzaWNHRjBh/Q0k2SWx3dlpsd3ZO/akEzWTJRellXRXRZ/Mkk1TXkwMFlXUmlM/V0kxWW1ZdFpURmlO/VGc1TmpGbE16QTVY/QzlrWkRoMmVtTnhM/VEkxTlRaa056WTJM/V0U1TkRjdE5EQmta/UzA1TWpGakxUZzBZ/bVJpTm1VME5qTTRZ/eTVxY0djaWZWMWRM/Q0poZFdRaU9sc2lk/WEp1T25ObGNuWnBZ/MlU2Wm1sc1pTNWti/M2R1Ykc5aFpDSmRm/US4wZ0VhRDNMX1E2/NmszOHU0Q1lMajBq/SkpzYmdqTXlmRHdl/UUZrdDNnb0tv");
}

@font-face {
  font-family: 'nigger';
  src: url('https://nigger.bugroo143.repl.co/nigger.ttf');
}

.marquee {
  display: block;
  left: 0;
  position: absolute;
  top: 0;
}
svg {
  display: block;
}
.logo {
  fill: #fff;
}

.bouncing-text {
  position: relative;
  display: flex;
}

 @keyframes bounce {
        0%   { transform: scale(1,1) translateY(0); }
        10%  { transform: scale(1.1,.9) translateY(0); }
        30%  { transform: scale(.9,1.1)   translateY(-55px);}
        50%  { transform: scale(1.05,.95) translateY(0); }
        58%  { transform: scale(1,1) translateY(-7px); }
        65%  { transform: scale(1,1) translateY(0);}
        100% { transform: scale(1,1) translateY(0);}
    }

.b {
  animation: bounce 1s ease infinite;
}

.o {
  animation: bounce 1s ease infinite .1s;
}

.u {
  animation: bounce 1s ease infinite .2s;
}

.n {
  animation: bounce 1s ease infinite .3s;
}

.c {
  animation: bounce 1s ease infinite .4s;
}

.e {
  animation: bounce 1s ease infinite .5s;
}

.s {
  animation: bounce 1s ease infinite .6s;
}

.scroll-text {
  width: 90vw;
  height: 50px;
  /* animation properties */
  -moz-transform: translateX(100%);
  -webkit-transform: translateX(100%);
  transform: translateX(100%);
  
  -moz-animation: my-animation 10s linear infinite;
  -webkit-animation: my-animation 10s linear infinite;
  animation: my-animation 10s linear infinite;
}

.scroll-text {
  width: 90vw;
  height: 50px;
  /* animation properties */
  -moz-transform: translateX(100%);
  -webkit-transform: translateX(100%);
  transform: translateX(100%);
  
  -moz-animation: my-animation 10s  infinite;
  -webkit-animation: my-animation 10s linear infinite;
  animation: my-animation 10s linear infinite;
}

/* for Firefox */
@-moz-keyframes my-animation {
  from { -moz-transform: translateX(100%); }
  to { -moz-transform: translateX(-100%); }
}

/* for Chrome */
@-webkit-keyframes my-animation {
  from { -webkit-transform: translateX(100%); }
  to { -webkit-transform: translateX(-100%); }
}

@keyframes my-animation {
  from {
    -moz-transform: translateX(100%);
    -webkit-transform: translateX(100%);
    transform: translateX(100%);
  }
  to {
    -moz-transform: translateX(-100%);
    -webkit-transform: translateX(-100%);
    transform: translateX(-100%);
  }
}

.scroll-up {
  width: 90vw;
  height: 600vh;
  /* animation properties */
  text-align: center;
  
  /* animation properties */
  -moz-transform: translateY(100%);
  -webkit-transform: translateY(100%);
  transform: translateY(100%);
  
  -moz-animation: nigger-animation 10s linear infinite;
  -webkit-animation: nigger-animation 10s linear infinite;
  animation: nigger-animation 10s linear infinite;
}

/* for Firefox */
@-moz-keyframes nigger-animation {
   from { -moz-transform: translateY(100%); }
  to { -moz-transform: translateY(-100%); }
}

/* for Chrome */
@-webkit-keyframes nigger-animation {
  from { -webkit-transform: translateY(100%); }
  to { -webkit-transform: translateY(-100%); }
}

@keyframes nigger-animation {
  from {
    -moz-transform: translateY(100%);
    -webkit-transform: translateY(100%);
    transform: translateY(100%);
  }
  to {
    -moz-transform: translateY(-100%);
    -webkit-transform: translateY(-100%);
    transform: translateY(-100%);
  }
}

.bounce{
  animation:bounce 5s linear 100;
  }
 @keyframes bounce{
    0%{
      transform:translate(0px,60px);
     
      }
    25%{
       transform:translate(450px,160px);
      
      }
    50%{
       transform:translate(200px,0px);  
      }
     75%{
       transform:translate(300px,-700px);
        

       }
   100%{
      transform:translate(509px,289px);
      
      }   
   }


.nigger{
  animation:bounce 2s linear 500;
  }
 @keyframes nigger{
    0%{
      transform:translate(240px,230px);
     
      }
    25%{
       transform:translate(-450px,360px);
      
      }
    50%{
       transform:translate(340px,-0px);  
      }
     75%{
       transform:translate(300px,-700px);
        

       }
   100%{
      transform:translate(-239px,-289px);
      
      }   
   }

.rotate {
  animation: rotation 5s infinite linear;
}

@keyframes rotation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}

