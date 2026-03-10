    //轮播器类，包含html中需要操作的DOM节点的对象，已经相应的方法
    class Carousel {
        //构造函数，用于实例化多个轮播器
        constructor(spanDots, imgin, dir_right, dir_left) {
        this.index=0;           //index是切图的索引
        this.dots=document.getElementsByClassName(spanDots);    //dots是一个轮播器所以轮播点对象的集合
        this.img=document.getElementsByClassName(imgin)[0];     //img是存放图片的容器的集合
        this.right=document.getElementById(dir_right);          //获取轮播区域右箭头
        this.left=document.getElementById(dir_left);            //获取左箭头
        this.disp=this.img.parentElement.offsetWidth;           //获取轮播区域的宽度，便于后面位移切换
        }

        //chagePage实现点击相应轮播点时切换相应内容
        chagePage(num, class_name) {
            this.disp = this.img.parentElement.offsetWidth;
            this.dots[this.index].className = class_name;
            this.dots[num].className = class_name + " chageColor";
            this.index = num;
            this.img.style = "transform:translateX("+(-this.index*this.disp)+"px)";           
        }
        //clickPage封装了chagePage，对点击轮播点切图进行了事件委托
        clickPage(class_name) {
            this.dots[0].parentElement.onclick = (e) => {
                const eve = e.target.closest(`.${class_name}`);
                let num = 0;
                for(; num < this.dots.length; num++)if(this.dots[num] === eve)break;
                if(eve && num < this.dots.length) {
                    this.chagePage(num,class_name);
                }
            } 
        }
        //skipLeft与skipRight也是封装了chagePage，因为点击左右箭头相当于点击当前索引的下一个或者上一个轮播点
        //同时两者采用了防抖，以防连点器，虽然作用不大
        //skipLeft是左箭头对应的方法
        skipLeft(dotName) {
            this.left.onclick = fangDou(50, () => {
                this.chagePage((this.index+this.dots.length-1)%this.dots.length,dotName)    //通过取余实现循环
            });
        }
        //skipRight是右箭头对应的方法
        skipRight(dotName) {
            this.right.onclick = fangDou(50, () => {
                this.chagePage((this.index+1)%this.dots.length,dotName)                     //取余实现循环
            });
        }
        //passAge用于光标悬浮在图片上的时候
        //效果相当于给图片添加一个透光的灰色遮罩，同时添加一个播放箭头以及放大照片
        //它的实现是通过类名的增删,方式非常混乱，想改成opacity来切换来着，但老是忘了
        //它使用了事件委托
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

    let carouselOne=new Carousel("sdot","contmusic","right1","left1");     //这是上方歌单推荐部分的轮播器的实例化
    let carouselTwo=new Carousel("dotTwo","fbox","right2","left2");         //这是下方的新歌首发

    let contenttop=document.getElementsByClassName("muscontentOne");        //获取歌单推荐部分的DOM节点
    let contentbottom=document.getElementsByClassName("muscontentTwo");     //获取新歌首发的节点
    //防抖函数，用于练习闭包知识点        
    function fangDou(time, fun){
        let idTime = null;
        return () => {
            if(idTime != null)clearTimeout(idTime);
            idTime = setTimeout(fun,time);
        }
    }
    
    //下面就是各种监听与委托的布置

    //这是轮播点的点击监听
    carouselOne.clickPage("sdot");
    carouselTwo.clickPage("dotTwo");

    //下面是左右箭头的箭头
    carouselOne.skipLeft("sdot");
    carouselOne.skipRight("sdot");

    carouselTwo.skipLeft("dotTwo");
    carouselTwo.skipRight("dotTwo");

    //下面是光标悬浮与图片上的监听
    carouselOne.passAge("mask","markOne","innerbox");
    carouselTwo.passAge("maskTwo","markTwo","innerboxTwo");