var container=document.getElementById('container');
        var borderArray=['50%','0'];
        var blueArray=['0','5px'];
        var colorArray=['#FF6B6B','#FFE66D','#4472CA'];
        var width=document.documentElement.clientWidth;
        var height=document.documentElement.clientHeight;
        var count=40;
        function createrrandum(){
            for(var i=0;i<count;i++){
                
                var randumleft=Math.floor(Math.random()*width);
                var randumtop=Math.floor(Math.random()*height);
                var color=Math.floor(Math.random()*3);
                var border=Math.floor(Math.random()*2);
                var blur=Math.floor(Math.random()*2);
                var widthelement=Math.floor(Math.random()*5)+5;
                var timeAnimation=Math.floor(Math.random()*12)+8;

                var div=document.createElement("div");
                div.style.backgroundColor=colorArray[color];
                div.style.position='absolute';
                div.style.width=widthelement+'px';
                div.style.height=widthelement+'px';
                div.style.marginLeft=randumleft+'px';
                div.style.marginTop=randumtop+'px';
                div.style.borderRadius=borderArray[border];
                div.style.filter="blur("+blueArray[blur]+")";
                div.style.animation='move 5s ease-in infinite';
                container.appendChild(div);
                
            }
        }
        createrrandum();