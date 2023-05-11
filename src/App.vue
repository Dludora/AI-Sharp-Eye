<template>
    <n-config-provider
            :theme="theme"
            :theme-overrides="themeOverrides">
        <!-- Desktop Navbar -->
        <nav class="navbar-desktop navbar" v-if="!isMobile" :class="{'hide': hide}">
            <div class="container">
                <div id="logo" @click="router.push('/')">
                    <n-icon size="12rem">
                        <Logo/>
                    </n-icon>
                </div>
                <ul>
                    <li class="menu__item menu__item__first" :class="{'is__active': isActive==0}"
                        @click="router.push('/')">
                        <n-icon-wrapper :border-radius="50" size="2.5rem" :class="{'active': isActive==0}">
                            <n-icon>
                                <Home/>
                            </n-icon>
                        </n-icon-wrapper>
                        <a href="#">首页</a>
                    </li>
                    <li class="menu__item menu__item__second" :class="{'is__active': isActive == 1}"
                        @click="router.push('/about')">
                        <n-icon-wrapper :border-radius="50" size="2.5rem" :class="{'active': isActive==1}">
                            <n-icon>
                                <InformationCircle/>
                            </n-icon>
                        </n-icon-wrapper>
                        <a href="#">联系我们</a>
                    </li>
                    <li class="menu__item menu__item__third" :class="{'is__active': isActive === 2}"
                        @click="router.push('/process')">
                        <div id="menu__line" :class="activeClassName"></div>
                        <n-icon-wrapper :border-radius="50" size="2.5rem" :class="{'active': isActive==2}">
                            <n-icon>
                                <Enter/>
                            </n-icon>
                        </n-icon-wrapper>

                        <a href="#">在线使用</a>
                    </li>
                </ul>
                <div id="operator"></div>
            </div>
        </nav>

        <!--         Mobile Navbar-->
        <nav class="navbar-mobile navbar" v-else :class="{'hide': hide}">
            <div id="logo">
                <n-icon size="3rem">
                    <LogoPure/>
                </n-icon>
            </div>
            <div class="logo">
                <n-icon size="2rem" @click="drawerActive=true">
                    <Menu/>
                </n-icon>
            </div>
        </nav>

        <n-drawer v-model:show="drawerActive">
            <n-drawer-content>
                <div class="drawer-container">
                    <div @click="router.push('/');" class="menu__item" :class="{'is__active': isActive==0}">
                        <n-icon size="1.5rem">
                            <Home/>
                        </n-icon>
                        首页
                    </div>
                    <div @click="router.push('/about');" class="menu__item" :class="{'is__active': isActive==1}">
                        <n-icon size="1.5rem">
                            <InformationCircle/>
                        </n-icon>
                        关于我们
                    </div>
                    <div @click="router.push('/process');" class="menu__item" :class="{'is__active': isActive==2}">
                        <n-icon size="1.5rem">
                            <Enter/>
                        </n-icon>
                        在线使用
                    </div>
                </div>
            </n-drawer-content>
        </n-drawer>
        <n-scrollbar @scroll="handleScroll" style="max-height: 100%">
            <n-message-provider>
                <router-view/>
            </n-message-provider>
            <footer class="site-footer">
                <div class="footer-container">
                    <div class="row">
                        <div class="col-sm-12 col-md-6">
                            <h6>关于我们</h6>
                            <p class="text-justify">
                                团队来自北京航空航天大学前沿科学院、计算机学院等多个学院，包含4名正高级和3名副高级科研人员，依托网络技术北京市重点实验室、数字媒体北京市重点实验等平台，近年主持完成国家重大和重点科研项目二十余项，承担校企研发项目三十余项，发表SCI、EI高水平论文百余篇。
                            </p>
                        </div>
                        <div class="col-xs-6 col-md-3">
                            <h6>涉及技术</h6>
                            <ul class="footer-links">
                                <li><a href="#">Vue</a></li>
                                <li><a href="#">UI Design</a></li>
                                <li><a href="#">Django</a></li>
                                <li><a href="#">Pytorch</a></li>
                            </ul>
                        </div>

                        <div class="col-xs-6 col-md-3">
                            <h6>快速链接</h6>
                            <ul class="footer-links">
                                <li><a href="#" @click="router.push('/')">首页</a></li>
                                <li><a href="#" @click="router.push('/process')">在线使用</a></li>
                            </ul>
                        </div>

                    </div>
                    <hr>
                </div>
                <div class="footer-container">
                    <div class="row">
                        <div class="col-md-8 col-sm-6 col-xs-12">
                            <p class="copyright-text">Copyright &copy; 2023 All Rights Reserved by
                                <a href="#">Scanfcode</a>.
                            </p>
                        </div>

                        <div class="col-md-4 col-sm-6 col-xs-12">
                            <ul class="social-icons">
                                <li><a class="facebook" href="#">
                                    <n-icon size="1.5rem">
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                             xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 320 512">
                                            <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                                                  fill="currentColor"></path>
                                        </svg>
                                    </n-icon>
                                </a></li>
                                <li><a class="twitter" href="#">
                                    <n-icon size="1.5rem">
                                        <LogoTwitter/>
                                    </n-icon>
                                </a></li>
                                <li><a class="dribbble" href="#">
                                    <n-icon size="1.5rem">
                                        <LogoDribbble/>
                                    </n-icon>
                                </a></li>
                                <li><a class="linkedin" href="#">
                                    <n-icon size="1.5rem">
                                        <LogoLinkedin/>
                                    </n-icon>
                                </a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </n-scrollbar>
    </n-config-provider>

</template>

<script setup lang="ts">
import {Home, InformationCircle, Enter, Menu, LogoTwitter, LogoDribbble, LogoLinkedin} from "@vicons/ionicons5"
import {computed, onBeforeUnmount, onMounted, ref, watch} from "vue"
import router from "@/router"
import Logo from '@/assets/logo/logo.vue'
import LogoPure from '@/assets/logo/LogoPure.vue'
import {useRoute, useRouter} from "vue-router";
import {darkTheme, type GlobalThemeOverrides} from "naive-ui";
import About from "@/views/About.vue";

const theme = darkTheme
const themeOverrides: GlobalThemeOverrides = {
    Upload: {
        'draggerBorder': 'none',
        'draggerBorderHover': 'none'
    },
    Drawer: {
        "bodyPadding": "2rem"
    }
}

const route = useRoute()
// const router = useRouter()
const isMenuOpen = ref<boolean>(false)
const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value
}
const isMobile = ref(false)
const drawerActive = ref(false)


const isActive = computed(() => {
    if (route.name === 'home') {
        return 0
    } else if (route.name === 'about') {
        return 1
    } else {
        return 2
    }
})
const activeClassName = computed(() => {
    if (isActive.value === 0) {
        return 'active__first'
    } else if (isActive.value === 1) {
        return 'active__second'
    } else {
        return 'active__third'
    }
})


const lastScrollTop = ref(0)
const hide = ref(false)
// @ts-ignore
const handleScroll = (event: Event) => {
    if (event.currentTarget.scrollTop != null && event.currentTarget.scrollTop != null > 100) {
        hide.value = event.currentTarget.scrollTop > lastScrollTop.value;
    }
    lastScrollTop.value = event.currentTarget.scrollTop
}
onMounted(() => {
    isMobile.value = window.innerWidth <= 768;
    window.addEventListener("resize", () => {
        isMobile.value = window.innerWidth <= 768;
    })
    window.addEventListener("scroll", () => {
        lastScrollTop.value = window.scrollY
    })
})
onBeforeUnmount(() => {
})


</script>

<style scoped lang="scss">
@import "@/style/footer";

li {
  list-style: none;
}

a {
  text-decoration: none;
  color: inherit;
}

.container {
  @include desktop-middle;
}

.n-config-provider {
  width: 100%;

  .navbar {
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    transition: transform 0.3s ease-in-out;
    background: rgba($basic-color, .9);
    backdrop-filter: blur(.9);
    z-index: 99;
    color: rgba($white, .7);
    display: flex;
    justify-content: center;


    &.hide {
      transform: translateY(-100%);
    }

    #logo {
      width: 12rem;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;

      &:hover {
        cursor: pointer;
      }

      @media screen and (max-width: 768px) {
        width: 3rem;
      }

      span {
        font-size: inherit;
        font-weight: bold;
        pointer-events: none;
      }
    }

  }

  .navbar-desktop {
    height: 80px;
    font-size: 1.5rem;

    .container {
      box-sizing: border-box;
      display: flex;
      align-items: center;
      position: relative;

      &:after {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        max-width: 1440px;
        height: 1px;
        background: #fff;
      }
    }

    ul {
      height: 100%;
      padding-left: 3rem;
      display: flex;
      flex: 1;
      position: relative;
      justify-content: center;
      color: rgba($white, .7);

      &:before {
        content: '';
        position: absolute;
        bottom: 0;
        width: inherit;
        height: 3px;
        background: $key-color;
      }

      .is__active {
        color: $key-color;
      }

      .menu__item {
        height: 100%;
        display: flex;
        align-items: center;
        margin-right: 3rem;
        position: relative;
        font-weight: 600;
        transition: color .3s linear;

        &:hover {
          color: $white;

          .n-icon-wrapper {
            color: $white;
          }
        }

        &__first:hover {

          &.is__active {
            color: $key-color;
          }

          &:hover ~ * {
            #menu__line {
              transform: translateX(-20.5rem);
              width: 6.5rem;
            }
          }
        }

        &__second:hover {

          &.is__active {
            color: $key-color;
          }

          &:hover ~ * {
            #menu__line {
              transform: translateX(-12rem);
              width: 9rem;
            }
          }
        }

        &__third:hover {

          &.is__active {
            color: $key-color;
          }

          &:hover {
            #menu__line {
              transform: translateX(0);
              width: 9rem;
            }
          }
        }

        .n-icon-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
          background: transparent;
          margin-right: .2rem;
          cursor: pointer;
          color: rgba($white, .7);

          &.active {
            background: $key-color;
            color: $basic-color;

            .n-icon {
              font-size: 1.5rem;
            }
          }

          .n-icon {
            font-size: 2rem;
          }
        }


        a {
          font-size: inherit;
          display: inline-block;
        }
      }

      #menu__line {
        position: absolute;
        width: 6rem;
        height: 100%;
        left: 0;
        bottom: 0;
        //border-bottom: 5px solid $key-color;
        z-index: 200;
        transition: all 0.5s ease;
        pointer-events: none;

        &:after {
          position: absolute;
          content: '';
          height: 5px;
          background: $key-color;
          border-radius: 5px;
          width: 100%;
          left: 0;
          bottom: 0;
        }

        &.active__first {
          transform: translateX(-20.5rem);
          width: 6.5rem;
        }

        &.active__second {
          transform: translateX(-12rem);
          width: 9rem;
        }

        &.active__third {
          transform: translateX(0);
          width: 9rem;
        }
      }
    }

    #operator {
      width: 10rem;
      height: 100%;
    }
  }

  .navbar-mobile {
    height: 3rem;
    border-bottom: 1px solid white;
    overflow: hidden;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 .5rem;

  }
}

:deep(.n-scrollbar) {
  .n-scrollbar-content {
    min-height: 100vh;
    position: relative;
    padding-top: 80px;

    @media screen and (max-width: 789px) {
      padding-top: 0;
    }

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
}

//:deep(.n-drawer-content-wrapper) {
//  //width: calc(100% - 10rem);
//
//  :deep(.n-drawer-body-content-wrapper) {
//    display: flex;
//    flex-direction: column;
//    justify-content: space-between;
//    align-items: center;
//  }
//
//}
:deep(.n-drawer-body-content-wrapper) {
  display: flex;
  flex-direction: column;
  justify-content: center;

  .drawer-container {
    .menu__item {
      .n-icon {
        margin-right: .3rem;
      }

      display: flex;
      align-items: center;
      font-size: 1.2rem;
      font-weight: bold;
      margin-bottom: 2rem;
      font-family: "Goudy Stout", serif;
      transition: all .3s linear;

      &:after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 4rem;
        height: 2px;
        background: $key-color;

        transition: all .3s linear;
      }

      &.is__active {
        color: $font-red;
        position: relative;

        &:after {
          width: 4rem;
        }
      }
    }
  }


}
</style>

<style lang="scss">
html, body, #app {
  min-height: 100%;
  background: $basic-color;
  height: 100%;
}

#app {
  display: flex;
}

* {
  box-sizing: border-box;
  margin: 0;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.4);
}

</style>
