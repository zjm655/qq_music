    class Carousel {
        constructor(spanDots, imgin, dir_right, dir_left) {
        this.index=0;
        this.dots=document.getElementsByClassName(spanDots);
        this.img=document.getElementsByClassName(imgin)[0];
        this.right=document.getElementById(dir_right);
        this.left=document.getElementById(dir_left);
        this.disp=this.img.parentElement.offsetWidth;
        }
        chagePage(num, class_name) {
            this.disp = this.img.parentElement.offsetWidth;
            this.dots[this.index].className = class_name;
            this.dots[num].className = class_name + " chageColor";
            this.index = num;
            this.img.style = "transform:translateX("+(-this.index*this.disp)+"px)";           
        }
        clickPage(class_name) {
            // this.dots[num].onclick = () => {this.chagePage(num,class_name);}
            this.dots[0].parentElement.onclick = (e) => {
                const eve = e.target.closest(`.${class_name}`);
                let num = 0;
                for(; num < this.dots.length; num++)if(this.dots[num] === eve)break;
                // console.log("num = " + num)
                if(eve && num < this.dots.length) {
                    this.chagePage(num,class_name);
                }
            } 
        }
        skipLeft(dotName) {
            this.left.onclick = fangDou(50, () => {
                this.chagePage((this.index+this.dots.length-1)%this.dots.length,dotName)
            });
        }
        skipRight(dotName) {
            this.right.onclick = fangDou(50, () => {
                this.chagePage((this.index+1)%this.dots.length,dotName)
            });
        }
        passAge(style,mark,class_name) {
            this.img.addEventListener('mouseover',
                (e) => {
                    const eve = e.target.closest(`.${class_name}`);
                    if(eve) {
                        eve.lastElementChild.className=style+" "+mark;
                        eve.lastElementChild.previousElementSibling.className="scare";
                    }
                }
            )
            this.img.addEventListener('mouseout',
                (e) => {
                    const eve = e.target.closest(`.${class_name}`);
                    if(eve) {
                        eve.lastElementChild.className=mark;
                        eve.lastElementChild.previousElementSibling.className="";                      
                    }
                }
            )
        }
    }

    let carouselOne=new Carousel("sdot","contmusic","right1","left1");
    let carouselTwo=new Carousel("dotTwo","fbox","right2","left2");

    let footLogoOne = document.querySelectorAll(`.http`)[0];
    let footLogoTwo = document.querySelectorAll(`.http`)[2];

    let contenttop=document.getElementsByClassName("muscontentOne");
    let contentbottom=document.getElementsByClassName("muscontentTwo");
    // let canshuX = -100;
    const reg = /-\d+px/;
    function fangDou(time, fun){
        let idTime = null;
        return () => {
            if(idTime != null)clearTimeout(idTime);
            idTime = setTimeout(fun,time);
        }
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
    // for(let i=0;i<carouselOne.dots.length;i++)carouselOne.clickPage(i,"sdot");
    // for(let i=0;i<carouselTwo.dots.length;i++)carouselTwo.clickPage(i,"dotTwo");
    carouselOne.clickPage("sdot");
    carouselTwo.clickPage("dotTwo");

    carouselOne.skipLeft("sdot");
    carouselOne.skipRight("sdot");

    carouselTwo.skipLeft("dotTwo");
    carouselTwo.skipRight("dotTwo");

    seen(contenttop,carouselOne);
    seen(contentbottom,carouselTwo);

    leave(contenttop,carouselOne);
    leave(contentbottom,carouselTwo);

    carouselOne.passAge("mask","markOne","innerbox");
    carouselTwo.passAge("maskTwo","markTwo","innerboxTwo");