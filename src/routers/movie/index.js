export default {
    path : '/movie',
    name : 'Movie',
    component : function(){
        return import ('@/views/Movie')
    },
    children : [
        {
            path : 'city',
            component : function (){
                return import ('@/components/City')
            }
        },
        {
            path : 'nowPlaying',
            component : function (){
                return import ('@/components/NowPlaying')
            }
        },
        {
            path : 'comingSoon',
            component : function (){
                return import ('@/components/ComingSoon')
            }
        },
        {
            path : 'search',
            component : function (){
                return import ('@/components/Search')
            }
        },
        {
            path : '/movie',
            redirect : '/movie/nowPlaying'
        }
    ]
}