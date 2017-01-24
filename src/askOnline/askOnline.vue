<style lang="scss">
    #askOnline{
        overflow: auto;
        height: 100%;
        .header{
            height: 15rem;
        }
        .carousel{
            .one{
                background-size:cover !important; 
                background: url('../img/one.png') no-repeat center center;
            }
            .two{
                background-size:cover !important; 
                background: url('../img/two.png') no-repeat center center;
            }
        }
        .search{
            height: 5rem;
            line-height: 5rem;
            text-align: center;
            background: white;
            input{
                background:#EEE;
                height: 3rem;
                width: 15rem;
                padding-left: 1rem;
                font-size: 1.5rem;
                border-radius: 0.5rem;
            }
        }
        .funcGroup{
            margin: 1rem 0;
            background: white;
            height: 16rem;
            .chipItem{
                width: 25%;
                float:left;
                height:8rem;
                display:inline-block;
                text-align: center;
                padding-top: 1rem;
                box-sizing: border-box;
                color: black;

                .bindCard_icon{
                    height: 4rem;
                    width: 4rem;
                    margin: 0 auto;
                    margin-bottom: 0.5rem;
                    background-size: cover !important;
                    background: url('../img/bindCard.png') no-repeat center center;
                }
            }
        }
        .doctors{
            .header{
                font-size: 2rem;
                position: relative;
                line-height: 3.5rem;
                height: 3.5rem;
                padding-left: 2rem;
                padding-top: 0; 
                border-bottom: 1px solid #CCC;
                .more{
                    float: right;
                    margin-right: 2rem;
                    color: #b5b5b5;
                }
            }
            li.docInfo{
                height: 8rem;
                line-height: 7rem;
                border-bottom: 1px solid #CCC;
                .photo{
                    height: 6rem;
                    width: 5rem;
                    display: block;
                    margin: 1rem;
                    box-sizing: border-box;
                    display:inline-block;
                    background:url('../img/photo.png') no-repeat center center;
                }
                .info{
                    vertical-align: top;
                    display:inline-block;
                    margin-top: 1rem;
                    font-size: 1.6rem;
                    .name{
                        font-size: 2rem;
                        color: black;
                    }
                    .title,.skilful{
                        color:#838383;
                        font-size:1.6rem;
                        padding-top:0;
                    }
                    li{
                        height: 2rem;
                        line-height: 2rem;
                        padding-left: 2rem;
                    }
                }
            }
        }
    }
</style>

<template>
    <div id='askOnline'>
        <div class='header'>
            <mt-swipe :auto="0" class='carousel'>
                <mt-swipe-item class='one'></mt-swipe-item>
                <mt-swipe-item class='two'></mt-swipe-item>
            </mt-swipe>
        </div>
        <div class='search'>
            <input placeholder="请输入医生或科室"/>
        </div>
        <div class='funcGroup'>
            <chipItem iconName='bindCard_icon' name='产科'/>
            <chipItem iconName='bindCard_icon' name='妇科'/>
            <chipItem iconName='bindCard_icon' name='儿科'/>
            <chipItem iconName='bindCard_icon' name='计划生育'/>
            <chipItem iconName='bindCard_icon' name='优生学科'/>
            <chipItem iconName='bindCard_icon' name='生殖医学'/>
            <chipItem iconName='bindCard_icon' name='超声科'/>
            <chipItem iconName='bindCard_icon' name='更多'/>
        </div>
        <div class='doctors'>
            <div class='header'>
                推荐医生 
                <p class='more'>更多</p>
            </div>
            <ul>
               <docInfo name='张三' title='医师' skilful='XXXXXXXXXX'/>
               <docInfo name='张三' title='医师' skilful='XXXXXXXXXX'/>
               <docInfo name='张三' title='医师' skilful='XXXXXXXXXX'/>
               <docInfo name='张三' title='医师' skilful='XXXXXXXXXX'/>
               <docInfo name='张三' title='医师' skilful='XXXXXXXXXX'/>
               <docInfo name='张三' title='医师' skilful='XXXXXXXXXX'/>
               <docInfo name='张三' title='医师' skilful='XXXXXXXXXX'/>
            </ul>
        </div>
    </div>
</template>

<script>
    import chipItem from '../component/chipItem';

    var docInfo = {
        props:['name','title','skilful'],
        template: "<li class='docInfo'>\
                     <span class='photo'></span>\
                     <ul class='info'>\
                        <li class='name'>{{name}}</li>\
                        <li class='title'>职称：{{title}}</li>\
                        <li class='skilful'>擅长：{{skilful}}</li>\
                     </ul>\
                   </li>"
    }
    export default { 
        components:{
            chipItem,
            docInfo
        },
        data: function (){
            return {
            }
        }
    }
</script>