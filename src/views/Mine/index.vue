<template>
    <div id="main">
        <Header v-bind:title="text"></Header>
        <div id="content">
            <Login></Login>
        </div>
        <TabBar></TabBar>
    </div>
</template>

<script>

import Header from '@/components/Header';
import TabBar from '@/components/TabBar';
import Login from '@/components/Login';

export default {
    name : 'Mine',
    components : {
        Header,
        TabBar,
        Login
    },
    data : function (){
        return {
            text : '我的喵喵'
        }
    }
}
</script>

<style lang="scss" scoped>

</style>