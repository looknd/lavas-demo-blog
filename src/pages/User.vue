<template>
    <div class="app-user-page">
        <div class="app-user-title text-xs-center">
            <div class="user-avatar">
                <p>
                    <v-icon light class="user-avatar-icon">face</v-icon>
                </p>
                <p>User Name</p>
            </div>
            <v-list two-line>
                <v-list-item v-for="item in items" :key="item.title">
                    <v-list-tile avatar>
                        <v-list-tile-avatar>
                            <v-icon>{{ item.icon }}</v-icon>
                        </v-list-tile-avatar>
                        <v-list-tile-content>
                            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                            <v-list-tile-sub-title>{{ item.subtitle }}</v-list-tile-sub-title>
                        </v-list-tile-content>
                        <v-list-tile-action>
                            <span class="user-item-count" v-if="item.count">{{ item.count }}</span>
                        </v-list-tile-action>
                    </v-list-tile>
                </v-list-item>
            </v-list>
        </div>
    </div>
</template>

<script>
import {mapActions} from 'vuex';

export default {
    name: 'user',
    data() {
        return {
            items: [
                {
                    title: 'Photos',
                    icon: 'photo_library',
                    subtitle: 'Jan 9, 2014'
                },
                {
                    title: 'Favorites',
                    icon: 'favorite',
                    subtitle: 'Feb 9, 2016'
                },
                {
                    title: 'Work',
                    icon: 'work',
                    subtitle: 'Nov 9, 2017'
                }
            ]
        };
    },
    methods: {
        ...mapActions('appShell/appHeader', [
            'setAppHeader'
        ]),
        ...mapActions('appShell/appBottomNavigator', [
            'showBottomNav',
            'activateBottomNav'
        ])
    },
    activated() {
        this.setAppHeader({
            show: true,
            title: 'Lavas',
            showMenu: true,
            showBack: false,
            showLogo: true,
            actions: [
                {
                    icon: 'search',
                    route: '/search'
                }
            ]
        });
        // 设置当前 bottom navigator 显示的 item
        this.activateBottomNav('user');
        this.showBottomNav();
    },
    async asyncData({store, route}) {
        await new Promise(resolve => {
            setTimeout(resolve, 1000);
        });
    }
};
</script>

<style lang="stylus" scoped>

.user-avatar
    color #333
    margin 50px auto 20px
    display flex
    justify-content center
    flex-direction column

    &-icon
        width 100px
        height 100px
        border-radius 100px
        background #666
        font-size 80px

.user-item-count
    height 24px
    width 24px
    border-radius 24px
    background #ccc
    font-size 14px
    line-height 24px
    color #fff
    font-weight bold
    vertical-align middle

</style>
