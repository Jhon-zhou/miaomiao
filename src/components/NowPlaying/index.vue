<template>
    <div class="movie_body" ref="movie_body">
        <Loading v-if="isLoading"></Loading>
        <Scroller v-else v-bind:handleToScroll = "handleToScroll" v-bind:handleToTouchEnd = "handleToTouchEnd">
            <ul>
                <li class="pullDown">{{ pullDownMsg }}</li>
                <li v-for="item in movieList" v-bind:key="item.id">
                    <div class="pic_show" @tap="handleToDetail"><img v-bind:src="item.img | setWH('120.180')"></div>
                    <div class="info_list">
                        <h2>{{ item.nm }}</h2>
                        <p>观众评 <span class="grade">{{ item.sc }}</span></p>
                        <p>主演: {{ item.star }}</p>
                        <p>{{ item.comingTitle }}</p>
                    </div>
                    <div class="btn_mall">
                        购票
                    </div>
                </li>
            </ul>
        </Scroller>
    </div>
</template>

<script>

// import BScroll from 'better-scroll';

export default {
    name : 'NowPlaying',
    data(){
        return {
            movieList : [],
            pullDownMsg : '',
            isLoading : true,
            prevCityId : -1
        }
    },
    activated(){
        var cityId = this.$store.state.city.id;
        if(this.prevCityId === cityId){
            return;
        }
        this.isLoading = true;
        this.$axios.get('/api/movieOnInfoList?cityId='+cityId).then((res) => {
            var msg = res.data.msg;
            if( msg === 'ok'){
                this.movieList = res.data.data.movieList;
                this.isLoading = false;
                this.prevCityId = cityId;
/*                 this.$nextTick(() => {
                    var scroll = new BScroll(this.$refs.movie_body , {
                        tap : true,
                        probeType: 1
                    } );

                    scroll.on('scroll',(pos) => {
                        if(pos.y > 30){
                            this.pullDownMsg = '正在加载';
                        }
                        
                        // console.log('scroll');
                        // Max 容器高度 上拉加载
                    });

                    scroll.on('touchEnd',(pos) => {
                        if(pos.y > 30){
                            this.$axios.get('/api/movieOnInfoList?cityId=15').then((res) => {
                                var msg = res.data.msg;
                                if( msg === 'ok'){
                                    this.pullDownMsg = '加载完毕';
                                    setTimeout(() => {
                                        this.movieList = res.data.data.movieList;
                                        this.pullDownMsg = '';
                                    },1000)
                                }
                            })
                            
                        }
                        // console.log('touchEnd');
                    })
                });
 */                
             }
        })
    },
    methods : {
        handleToDetail(){
            console.log('handleToDetail');
        },
        handleToScroll(pos){
            if(pos.y >30){
                this.pullDownMsg = '正在加载';
            }
        },
        handleToTouchEnd(pos){
            if(pos.y > 30){
                this.$axios.get('/api/movieOnInfoList?cityId=15').then((res) => {
                    var msg = res.data.msg;
                    if( msg === 'ok'){
                        this.pullDownMsg = '加载完毕';
                        setTimeout(() => {
                            this.movieList = res.data.data.movieList;
                            this.pullDownMsg = '';
                        },1000)
                    }
                })
            }
        }
    }
}
</script>

<style lang="scss" scoped>
#content .movie_body{ flex:1; overflow:auto;}
.movie_body ul{ margin:0 12px; overflow: hidden;}
.movie_body ul li{ margin-top:12px; display: flex; align-items:center; border-bottom: 1px #e6e6e6 solid; padding-bottom: 10px;}
.movie_body ul li.pullDown{margin:0; padding: 0; border:none;}
.movie_body .pic_show{ width:64px; height: 90px;}
.movie_body .pic_show img{ width:100%;}
.movie_body .info_list { margin-left: 10px; flex:1; position: relative;}
.movie_body .info_list h2{ font-size: 17px; line-height: 24px; width:150px; overflow: hidden; white-space: nowrap; text-overflow:ellipsis;}
.movie_body .info_list p{ font-size: 13px; color:#666; line-height: 22px; width:200px; overflow: hidden; white-space: nowrap; text-overflow:ellipsis;}
.movie_body .info_list .grade{ font-weight: 700; color: #faaf00; font-size: 15px;}
.movie_body .info_list img{ width:50px; position: absolute; right:10px; top: 5px;}
.movie_body .btn_mall , .movie_body .btn_pre{ width:47px; height:27px; line-height: 28px; text-align: center; background-color: #f03d37; color: #fff; border-radius: 4px; font-size: 12px; cursor: pointer;}
.movie_body .btn_pre{ background-color: #3c9fe6;}

</style>