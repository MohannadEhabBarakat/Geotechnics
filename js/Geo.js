    function hreadTextFile(file, id)
    {
        var rawFile = new XMLHttpRequest();
        rawFile.open("GET", "comp/"+file, true);
        rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            document.getElementById(id).innerHTML = rawFile.responseText;
            }
        }
        rawFile.send(null);
    }


    class gfRect
    {
      constructor(id,dist,time1=0,time2=2,trans=2) {
            this.id = id;
            this.dist = dist;
            this.time1 = this.constructor.lag+time1*1000;
            this.trans="";
            this.time2 = this.constructor.lag+(time1+time2)*1000+trans*1000;
            this.time3 = this.time2+trans*1000;
            var a = this.constructor.lag;
            this.constructor.lag += (time1+time2)*1000+trans*2000;
            this.width = document.getElementById(id).offsetWidth;
            this.reset();
       }
       reset(){
            var self = this;
            document.getElementById(self.id).style.transition       = "all 0s";
            document.getElementById(self.id).style.WebkitTransition = "all 0s";
            var a = (-1.1*self.width).toString()+"px";
            document.getElementById(self.id).style.left =a;
            document.getElementById(self.id).style.opacity = "1.0";
       }
       shiftl(){
            var self = this;
            document.getElementById(self.id).style.transition = "left 2s ease";
            document.getElementById(self.id).style.WebkitTransition = "left 2s ease";
            document.getElementById(self.id).style.left = self.dist;

        }
        fade(){
            var self = this;
            document.getElementById(self.id).style.transition       = "opacty 2s ease";
            document.getElementById(self.id).style.WebkitTransition = "opacity 2s ease";
            document.getElementById(self.id).style.opacity = "0"
        }

        do(){
            var self = this;
            setTimeout(function(){self.fade()},self.time2);
        }

       animate(){
            var self = this;
            var a = self.time1+self.time2+self.time3
            setTimeout(function(){self.shiftl()},self.time1);
            setTimeout(function(){self.fade()},self.time2);
            setTimeout(function(){self.reset()},self.time3);
            setTimeout(function(){self.animate()},this.constructor.lag);

        }
    }
    gfRect.lag=0;

  
    function j1(){
        aj = new gfRect("ho1","50px");
        aj.animate();
    }


    // alert("before setTimeout");
    // setTimeout('gleft("ho2","200px")',2000);
    // setTimeout(function(){gleft("ho3","400px")}, 4000);
    
     // alert("after setTimeout");






//    document.getElementById("myDIV").addEventListener("webkitTransitionEnd", myFunction);

// // Standard syntax
// document.getElementById("myDIV").addEventListener("transitionend", myFunction);
// -moz-transform