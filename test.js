    function Carousel(spanDots,imgin,dir_right,dir_left,cover){
        this.index=0;
        this.dots=document.getElementsByClassName(spanDots);
        this.img=document.getElementsByClassName(imgin)[0];
        this.right=document.getElementById(dir_right);
        this.left=document.getElementById(dir_left);
        this.mask=document.getElementsByClassName(cover);
        this.disp=this.img.parentElement.offsetWidth;
    }

    let carouselOne=new Carousel("sdot","contmusic","right1","left1","markOne");
    let carouselTwo=new Carousel("dotTwo","fbox","right2","left2","markTwo");

    let contenttop=document.getElementsByClassName("muscontentOne");
    let contentbottom=document.getElementsByClassName("muscontentTwo");

    function pageChage(num,carousel,class_name){
        carousel.disp=carousel.img.parentElement.offsetWidth;
        carousel.dots[carousel.index].className=class_name;
        carousel.dots[num].className=class_name+" chageColor";
        carousel.index=num;
        carousel.img.style="transform:translateX("+(-carousel.index*carousel.disp)+"px)"
    }
    function pageClick(num,carousel,class_name){
        carousel.dots[num].onclick=function(){pageChage(num,carousel,class_name);}
    }
    function skipRight(carousel,dotName){
        carousel.right.onclick=function(){pageChage((carousel.index+1)%carousel.dots.length,carousel,dotName);}
    }
    function skipLeft(carousel,dotName){
        carousel.left.onclick=function(){pageChage((carousel.index+carousel.dots.length-1)%carousel.dots.length,carousel,dotName);}
    }
    function seen(content,carousel){
        content[0].addEventListener('mouseenter',
            function(){
            carousel.right.className="right";
            carousel.left.className="left";
        }
        )
    }
    function leave(content,carousel){
        content[0].addEventListener('mouseleave',
            function(){
            carousel.right.className="";
            carousel.left.className="";
        }
        )
    }
    function passage(carousel,style,mark){
        for(let i=0;i<carousel.mask.length;i++){
            carousel.mask[i].parentElement.addEventListener('mouseenter',
                function(){
                    carousel.mask[i].className=style+" "+mark;
                    carousel.mask[i].previousElementSibling.className="scare";
                }
            )
            carousel.mask[i].parentElement.addEventListener('mouseleave',
                function(){
                    carousel.mask[i].className=mark;
                    carousel.mask[i].previousElementSibling.className="";
                }
            )
        }
    }
    for(let i=0;i<carouselOne.dots.length;i++)pageClick(i,carouselOne,"sdot");
    for(let i=0;i<carouselTwo.dots.length;i++)pageClick(i,carouselTwo,"dotTwo");
    skipRight(carouselOne,"sdot");
    skipRight(carouselTwo,"dotTwo");
    skipLeft(carouselOne,"sdot");
    skipLeft(carouselTwo,"dotTwo");
    seen(contenttop,carouselOne);
    seen(contentbottom,carouselTwo);
    leave(contenttop,carouselOne);
    leave(contentbottom,carouselTwo);
    passage(carouselOne,"mask","markOne");
    passage(carouselTwo,"maskTwo","markTwo");