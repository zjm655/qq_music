
        const dateGodown = [
            [
                { imgSrc: "./theContentphotos/imgtwo_1/re1.png", title: "抖音伤感热播：我们还是走散了", viewCout: "播放量: 180.1万" },
                { imgSrc: "./theContentphotos/imgtwo_1/re2.png", title: "抖音超热曲：左耳陪伴，右耳寻欢", viewCout: "播放量: 1.8亿" },
                { imgSrc: "./theContentphotos/imgtwo_1/re3.png", title: "汪苏泷：一小段一小段把歌唱完", viewCout: "播放量: 206.2万" },
                { imgSrc: "./theContentphotos/imgtwo_1/re4.png", title: "开口即惊艳！好评如潮的神仙歌曲", viewCout: "播放量: 1.0亿" },
                { imgSrc: "./theContentphotos/imgtwo_1/re5.png", title: "短视频装不下的表达欲，音乐加持", viewCout: "播放量: 48.9万" }
            ],

            [
                { imgSrc: "./theContentphotos/imgtwo_1/re6.png", title: "风靡全网！抖音最火中文歌大放送", viewCout: "播放量: 1.3 亿" },
                { imgSrc: "./theContentphotos/imgtwo_1/re7.png", title: "抖音 DJ 集 | 一脚油门 200 迈", viewCout: "播放量: 1381.8 万" },
                { imgSrc: "./theContentphotos/imgtwo_1/re8.png", title: "动感车载DJ 🔥gogogo出发咯！", viewCout: "播放量: 7902.7 万" },
                { imgSrc: "./theContentphotos/imgtwo_1/re9.png", title: "纪念方大同：我们耳机里特别的人", viewCout: "播放量: 910.9 万" },
                { imgSrc: "./theContentphotos/imgtwo_1/re10.png", title: "抖音热歌：全网爆火最流行", viewCout: "播放量: 1025.8 万" }
            ],

            [ 
                { imgSrc: "./theContentphotos/imgtwo_1/re11.png", title: "一听就落泪！哪首是emo天花板", viewCout: "播放量: 1317.8 万" },
                { imgSrc: "./theContentphotos/imgtwo_1/re12.png", title: "1005_檀健次生日快乐", viewCout: "播放量: 140.1 万" },
                { imgSrc: "./theContentphotos/imgtwo_1/re13.png", title: "张杰「开往1982」巡回演唱会", viewCout: "播放量: 242.7 万" },
                { imgSrc: "./theContentphotos/imgtwo_1/re14.png", title: "Clockenflap2025 独家阵容歌单！", viewCout: "播放量: 9.1 万" },
                { imgSrc: "./theContentphotos/imgtwo_1/re15.png", title: "袁一琦私藏 | 假日悠闲生活", viewCout: "播放量: 11.2 万" }
            ],

            [
                { imgSrc: "./theContentphotos/imgtwo_1/re16.png", title: "你不碰爱情，哪懂白月光的杀伤力", viewCout: "播放量: 1576.1 万" },
                { imgSrc: "./theContentphotos/imgtwo_1/re17.png", title: "纪念于朦胧 | 朦胧之境的光影旋律", viewCout: "播放量: 40.9 万" },
                { imgSrc: "./theContentphotos/imgtwo_1/re18.png", title: "华语流行天王·周杰伦出道25周年", viewCout: "播放量: 241.6 万" },
                { imgSrc: "./theContentphotos/imgtwo_1/re19.png", title: "抖音最火：超好听的热门BGM", viewCout: "播放量: 1217.6 万" },
                { imgSrc: "./theContentphotos/imgtwo_1/re20.png", title: "时代少年团「加冕礼」海口演唱会", viewCout: "播放量: 46.4 万" }
            ],

            [
                { imgSrc: "./theContentphotos/imgtwo_1/re21.png", title: "抖音热歌：100% 火爆全网", viewCout: "播放量: 2641.3 万" },
                { imgSrc: "./theContentphotos/imgtwo_1/re22.png", title: "抖音最火：单曲循环的热门歌曲", viewCout: "播放量: 4889.9 万" },
                { imgSrc: "./theContentphotos/imgtwo_1/re23.png", title: "祝千玺生日快乐！一人一首祝福！", viewCout: "播放量: 11.2 万" },
                { imgSrc: "./theContentphotos/imgtwo_1/re24.png", title: "抖音车载DJ：夜驾不犯困", viewCout: "播放量: 1314.9 万" },
                { imgSrc: "./theContentphotos/imgtwo_1/re25.png", title: "抖音热歌：全网流行超好听", viewCout: "播放量: 1212.6 万" }
            ]
        ];

        function divString(dateGodown){
            let carouselDiv="";
            for(let i=0;i<5;i++){
                carouselDiv += `
<div class="Center contmusicOne">`;
                for(let j=0;j<5;j++){
                     carouselDiv += 
`   <div class="outbox">
        <div class="innerbox">
            <img src="${dateGodown[i][j].imgSrc}" loading="lazy" decoding="async" alt="cover" width="210px" height="210px">
            <div class="markOne"></div>
        </div>
        <p><a href="" class="guidecontent guideBottom midtip">${dateGodown[i][j].title}</a></p>
        <p class="views">${dateGodown[i][j].viewCout}</p>
    </div>`;
                }
                    carouselDiv+=`
</div>`;
            }
            return carouselDiv;
        }

        let theHTML = document.getElementsByClassName("contmusic")[0];
        theHTML.innerHTML = divString(dateGodown);
