 // 创建一个轮播器模板，用于储存轮播器所需要的对象与数据
    function Carousel(x1,x2,x3,x4,x5,x6,x7,x8,x9,x10,x11,x12){
        this.img = document.getElementsByClassName(x1);     //需要替换的图片对应的标签元素的对象
        this.right = document.getElementById(x2);           
        this.left = document.getElementById(x3);            //right与left是歌单推荐或新歌首发左右翻页器对应的对象
        this.cont = [];                                     //cont数组是歌曲的作者简介等的标签对应的对象
        this.cont = [ document.getElementsByClassName(x4) , document.getElementsByClassName(x5) , document.getElementsByClassName(x6) ];
        this.godown = x7;                                   //godown是配置数据，用于在切换图片时更新图片对应的文字信息
        this.ver = x8;                                      //ver是索引，用于换页
        this.srcp = x9;                                     //srcp是图片路径对应关键字，用于之后替换图片路径
        this.charp = x1;                                    //charp是不同轮播器的特异关键字，便于减少之后函数的参数数目
        this.num = x10;                                     //num是该轮播器对应的数据组数
        this.stringp = x11;                                 //stringp同样是是不同轮播器的特异关键字，便于减少之后函数的参数数目
        this.spanp = [];                                    //spanp用于储存相应图片组的特意id，用于点击切换
        for(let i=0;i<this.num;i++)this.spanp[i] = document.getElementById(this.stringp + (i+1));
        this.target = document.getElementsByClassName(x12); //target用于储存歌单推荐或新歌首发对应内容区的对象
    }
    //godown是仓库，储存着配置文字信息，便于之后实列化轮播器
    let godown = [[["抖音伤感热播，我们还是走散了","抖音超热曲，左耳陪伴，右耳寻欢","汪苏泷：一小段一小段把歌唱完","开口即惊艳！好评如潮的神仙歌曲","短视频装不下的表达欲，音乐加持"],["风靡全网！抖音最火中文歌大放送","抖音 DJ 集丨一脚油门 200 迈","动感车载 DJ 🔥gogogo 出发咯！","纪念方大同：我们耳机里特别的人","抖音热歌：全网爆火最流行"],["一听就落泪！哪首是 emo 天花板","1005_檀健次生日快乐","张杰「开往 1982」巡回演唱会","Clockenflap2025 独家阵容歌单！","袁一琦私藏丨假日悠闲生活"],["你不碰爱情，哪懂白月光的杀伤力","纪念于朦胧丨朦胧之境的光影旋律","华语流行天王・周杰伦出道25周年","抖音最火：超好听的热门 BGM","时代少年团「加冠礼」海口演唱会"],["抖音热歌：100% 火爆全网","抖音最火：单曲循环的热门歌曲","祝千玺生日快乐！一人一首祝福！","抖音车载 DJ：夜驾不犯困","抖音热歌：全网流行超好听"]],
    [["播放量：180.1 万","播放量：1.8 亿","播放量：206.2 万","播放量：1.0 亿","播放量：48.9 万"],["播放量：1.3 亿","播放量：1381.8 万","播放量：7902.7 万","播放量：910.9 万","播放量：1025.8 万"],["播放量：1317.8 万","播放量：140.1 万","播放量：242.7 万","播放量：9.1 万","播放量：11.2 万"],["播放量：1576.1 万","播放量：40.9 万","播放量：241.6 万","播放量：1217.6 万","播放量：46.4 万"],["播放量：2641.3 万","播放量：4889.9 万","播放量：11.2 万","播放量：1314.9 万","播放量：1212.6 万"]]];
    let godown2 = [[["罪《唐宫奇案之青雾凤鸣》", "星落花火《唐宫奇案之青雾凤鸣》", "眼红", "岁月也抢不走的东西", "比肩飞驰和平精英丝路贺新春", "齐天大圣", "难解", "谜宫《唐宫奇案之青雾凤鸣》", "童话船《年少有为》电视剧主题曲"],["无以言表的日子里", "Opalite", "马上来财", "炽光", "苏轼与怀民", "BEAUTIFUL DAY", "行歌王者荣耀马年限定皮肤主题曲", "Cry", "谜底《唐宫奇案之青雾凤鸣》"],["节气颂", "春归引", "淬羽风华", "仅对你可见", "那颗星梦见的春日", "别让我离开 Stay With Me", "火车上的人", "荣光《风过留痕》影视剧片尾曲", "人间缱绻意"],["风吹过旧故里", "DISCO (2026 新版)", "执念", "给我加点冰", "如果再见面", "绚烂的光", "没调准的钟", "秋心不是愁", "In my dream tonight"],["神笔马良", "NEW BEAT NBA2K26 官方合作曲", "宿命之血 Fated Blood《龙族》", "Pandora", "等等", "别醒 (Live)", "无伤之痛 (Live)", "棱角 (Live)", "退场 (Live)"],["New Born (新生)", "Stay With Me", "江湖女侠", "翡翠之恋 (粤语版)", "东京巴黎", "想要保护的《功夫》电影主题曲", "羽毛 ft. Mei Semones", "明日坐标王者荣耀十周年版本曲", "太阳与地球 (Sun & Earth)"],["大小孩", "爱情讯息 (Live)", "恒星不忘 Forever Forever", "红蔷薇白玫瑰 (G.E.M. 重生版)", "爱错 (feat. 单依纯) (Live)", "你是我终点站", "还是会想她", "爱人啊", "非凡华为非凡大师品牌主题曲"],["K 歌之王 AIR (Day Version)", "可惜不可以", "无名氏", "Special Night《乱战》电视剧主题曲", "Letting Go (Live)", "当蒲公英吹散远航《秋雪漫过》", "全都 NICE DNF 手游男圣职推广曲", "By my side", "我的爱没前奏"],["明朝之前", "治疗", "It's My Turn《轧戏》电视剧主题曲", "意外勇敢的脸庞《我们意外的》", "时辰未到", "男", "我的错", "DEJA VU", "有且"]],
    [["GAI 周延", "白鹿", "早安", "赵传", "张远 / 和平精英", "南征北战 NZBZ", "邓寓君 (等什么君)", "周深", "袁娅维 TIA RAY"],["TF_ING 张子墨", "Taylor Swift", "刘宇", "希林娜依高", "蒲熠星", "袁娅维 TIA RAY", "王者荣耀 / 刘宇宁", "Charlie Puth/Kenny G", "蒋敦豪"],["马嘉祺", "Desire4 / 黄星 / 邱鼎杰", "黄霄雲", "彭楚粤", "鸣潮先约电台 /jixwang", "Terry Zhong 钟天利 / COLD", "阿杜", "刘宇宁", "恋与深空 / 蔡明希 - 不才"],["浅影阿 / 汐音社", "金润吉", "Uu (刘梦妤)", "VKNOW 感觉团 / 木秦", "陈默之", "高睿", "树莓乐队", "张大伟", "糖心蛋"],["ONER", "派克特 /seaLANG", "龙族・卡塞尔之门", "余宇涵", "TF_ING 邓佳鑫", "薛凯琪 / 刘恋", "黄子弘凡 / 于冬然", "吴克群 / 欢子", "张信哲 / 高睿"],["Jeffrey 董又霖", "JC 陈咏桐", "黄妃", "黎瑞恩", "HowZ", "毕书尽 / 徐靖翔", "大象体操 / Mei Semones", "林俊杰 / 王者荣耀", "卢广仲"],["张韶涵", "郭静", "周杰伦 / 言承旭 / 吴建豪", "G.E.M. 邓紫棋", "王力宏 / 单依纯", "BY2", "颜人中", "言承旭 / 五月天 阿信", "刘德华"],["陈奕迅", "蔡旻佑", "MC 张天赋", "韦礼安", "蔡健雅", "告五人", "陈小春", "Tyson Yoshi / 张敬轩", "欧阳娜娜"],["南拳妈妈", "侧田", "孙盛希", "五月天 阿信 / 刘若英", "周柏豪", "杨千嬅", "Karenciici", "Sunny Lukas", "杨丞琳"]],
    [["03:34", "04:25", "03:45", "04:32", "03:02", "03:10", "04:14", "04:13", "03:36"],["03:51", "03:55", "04:45", "03:49", "03:35", "02:51", "03:52", "03:07", "03:40"],["02:47", "04:02", "03:50", "04:00", "04:01", "02:56", "04:22", "04:25", "05:31"],["03:46", "03:20", "03:33", "03:15", "03:29", "03:27", "02:55", "04:17", "03:08"],["02:56", "03:09", "03:00", "02:56", "03:37", "04:52", "04:10", "04:06", "04:27"],["03:27", "03:33", "04:23", "03:56", "03:27", "04:15", "03:33", "04:44", "04:22"],["04:53", "02:41", "04:47", "04:45", "04:12", "03:40", "04:00", "03:43", "04:21"],["03:41", "04:19", "03:46", "04:40", "05:38", "03:52", "03:22", "03:11", "03:19"],["04:26", "02:01", "03:10", "04:07", "04:28", "03:53", "02:40", "02:20", "03:57"]]];
    //实列化两个轮播器对象，分别对应歌单推荐与新歌首发部分
    let carouseltop = new Carousel("AA6","right","left","AA7","AA8","AA8",godown,0,"imgtwo_",5,"img","AA10");
    let carouselbotton = new Carousel("BB8","right2","left2","BB10","BB11","BB12",godown2,0,"img_",9,"imgin","AA11");
    // let i,k;
    //vary函数用于更新文字信息
    function vary(carousel){
        let k;
        for(k=0;k<carousel.godown[0][0].length;k++){
            for(let t=0;t<carousel.godown.length;t++)carousel.cont[t][k].innerHTML=carousel.godown[t][carousel.ver][k];
        }
    }
    //sleep函数用于实现伪阻塞，从而实现切换时的过渡效果 
    function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
    }    
    //chage函数vary之上的部分主要用于更新图片路径，从而直接切换图片，是该轮播器的核心逻辑
    async function chage(carousel,start){
        carousel.spanp[carousel.ver].className="AA9 T1";
        let i,end=carousel.srcp + (carousel.ver+1);
        
        for(i=0;i<carousel.img.length;i++)carousel.img[i].className=carousel.charp+" T3";
        await sleep(300);
        for(i=0;i<carousel.img.length;i++)carousel.img[i].className=carousel.charp;
        for(i=0;i<carousel.img.length;i++)carousel.img[i].src=carousel.img[i].src.replace(start,end);
        await sleep(10);
        
        vary(carousel);
    }
    // click用于检测用户点击内容下面的小圆点，切换到对应组别
    function click(j,carousel){
        carousel.spanp[j].onclick = function(){
            let start=carousel.srcp + (carousel.ver+1);
            carousel.spanp[carousel.ver].className="AA9";
            carousel.ver=j;
            chage(carousel,start);
            
        }
    }
    //skip函数用于检测用户点击左右两侧的翻页器，进而翻页
    function skip(carousel,X1,X2){
        X1.onclick = function(){
        let start=carousel.srcp + (carousel.ver+1);
        carousel.spanp[carousel.ver].className="AA9";
        carousel.ver=(carousel.ver+X2)%carousel.num;
        chage(carousel,start);
    }
    }

    //seen函数用于检测用户光标是否位于歌单推荐或新歌首发部分，若是在则翻页器显现
    function seen(carousel){
        carousel.target[0].addEventListener('mouseenter',
            function(){
                carousel.right.className="Right shape";
                carousel.left.className="Left shape";
            }
        )
    }
    //leave函数用于加内存用户光标是否离开歌单推荐或新歌首发部分，若是离开，则光标隐藏
    function leave(carousel){
        carousel.target[0].addEventListener('mouseleave',
            function(){
                carousel.right.className="shape";
                carousel.left.className="shape";
            }
        )
    }
    //shadseen函数用于检测光标是否位于图片上方，要是，则会配合展示一些hover效果
    function shadeseen(carousel,n,ch){
        carousel.img[n].parentElement.addEventListener('mouseenter',
            function(){
                carousel.img[n].nextElementSibling.className="e_box "+ch;
                carousel.img[n].className=carousel.charp+" g";
            }
        )
    }
    // shadseen函数用于检测光标是离开于图片上方，要时离开则会消除hover的样式
    function shadeleave(carousel,n){
        carousel.img[n].parentElement.addEventListener('mouseleave',
            function(){
                carousel.img[n].nextElementSibling.className="";
                carousel.img[n].className=carousel.charp;
            }
        )
    }
    //相应事件的监控的实现
    for(let i=0;i<carouseltop.img.length;i++){shadeseen(carouseltop,i,"eTop");shadeleave(carouseltop,i);}
    for(let i=0;i<carouselbotton.img.length;i++){shadeseen(carouselbotton,i,"eBottom");shadeleave(carouselbotton,i);}
    seen(carouseltop);leave(carouseltop);
    seen(carouselbotton);leave(carouselbotton);
    for(let i=0;i<carouseltop.img.length;i++)click(i,carouseltop);
    skip(carouseltop,carouseltop.right,1);skip(carouseltop,carouseltop.left,4);
    for(let i=0;i<carouselbotton.img.length;i++)click(i,carouselbotton);
    skip(carouselbotton,carouselbotton.right,1);skip(carouselbotton,carouselbotton.left,8);