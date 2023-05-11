<template>
    <div class="homepage">
<!--        <div class="brand">-->
<!--            AI<img src="@/assets/logo/4.png">火眼-->
<!--        </div>-->
        <div class="vast__title">
            <div class="description">
                <span>
                    判断<a>资质证明</a>、<a>收支凭据</a>、<a>检测报告</a><br>
                    是否经过<a>图像篡改</a>，<br>为判断图像类文件<a>真伪</a><br>提供便利
                </span>
            </div>
            <div class="start button">
                <div @click="router.push('/process')">
                    马上开始
                    <n-icon size="1.5rem">
                        <ChevronForward/>
                    </n-icon>
                </div>
            </div>
        </div>
        <div class="feature feature1">
            <div class="steps">
                <div class="step feature1">
                    <n-icon size="5rem">
                        <Search/>
                    </n-icon>
                    <div class="introduce">
                        采用<a>RRU-Net</a>扩大篡改部分差异，<br>
                        同时对资质图像进行特殊<a>预处理</a>，<br>
                        <a>精准捕捉</a>微小的图像篡改区域
                    </div>
                </div>
                <div class="step feature2">
                    <n-icon size="5rem">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                             viewBox="0 0 32 32">
                            <path d="M15 17.18l-2.59-2.59L11 16l4 4l7-7l-1.41-1.41L15 17.18z"
                                  fill="currentColor"></path>
                            <path d="M30 15h-2.05A12.007 12.007 0 0 0 17 4.05V2h-2v2.05A12.007 12.007 0 0 0 4.05 15H2v2h2.05A12.007 12.007 0 0 0 15 27.95V30h2v-2.05A12.007 12.007 0 0 0 27.95 17H30zM17 25.95V23h-2v2.95A10.017 10.017 0 0 1 6.05 17H9v-2H6.05A10.017 10.017 0 0 1 15 6.05V9h2V6.05A10.017 10.017 0 0 1 25.95 15H23v2h2.949A10.017 10.017 0 0 1 17 25.95z"
                                  fill="currentColor"></path>
                        </svg>
                    </n-icon>
                    <div class="introduce">
                        资质图像检测<a>在线进行</a>，<br>
                        <a>无需搭建</a>庞大的资质证明后端数据库，<br>
                        仅根据数字图像进行<a>轻量化检测</a>
                    </div>
                </div>
                <div class="step feature3">
                    <n-icon size="5rem">
                        <HardwareChip/>
                    </n-icon>
                    <div class="introduce">
                        采用<a>模型融合技术</a>，<br>
                        检测<a>同源图像篡改</a>与<a>异源图像篡改</a>的多种篡改手段，<br>
                        提高<a>模型泛化性</a>
                    </div>
                </div>
            </div>
            <div class="essay end">
                    <span>
                        专业资质检测，<br>
                        精确定位<a>复制移动</a>、<a>拼接</a>、<a>篡改</a>等多种手段的篡改区域。<br>
                        <br>
                        <br>
                        将光标放在图片上以查看指引
                    </span>
                <div class="button">
                    <div @click="router.push('/about')">
                        联系我们
                        <n-icon size="1.5rem">
                            <ChevronForward/>
                        </n-icon>
                    </div>
                </div>
            </div>
        </div>
        <div class="feature feature-reverse">
            <div class="essay start">
                    <span>
                        <a>多端使用</a>，满足用户需求。<br>
                        <a>web端</a>、<a>桌面端</a>、<a>微信小程序</a>多平台支持，<br>
                        根据客户需求提供多客户端使用的便利。
                        <br>
                        <br>
                        将光标放在图片上以查看指引
                    </span>
                <div class="button">
                    <div>
                        下载桌面端
                        <n-icon size="1.5rem" style="margin-left: .3rem">
                            <Download/>
                        </n-icon>
                    </div>
                </div>
            </div>
            <div class="steps">
                <div class="step feature1">
                    <n-icon size="5rem">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                             viewBox="0 0 32 32">
                            <path d="M26 2h4v4h-4z" fill="currentColor"></path>
                            <path d="M26 8h4v4h-4z" fill="currentColor"></path>
                            <path d="M20 2h4v4h-4z" fill="currentColor"></path>
                            <path d="M20 8h4v4h-4z" fill="currentColor"></path>
                            <path d="M28 16v6H4V6h12V4H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h8v4H8v2h16v-2h-4v-4h8a2 2 0 0 0 2-2v-6zM18 28h-4v-4h4z"
                                  fill="currentColor"></path>
                        </svg>
                    </n-icon>
                    <div class="introduce">
                        <a>跨平台、跨设备，</a>轻量操作、快速浏览
                        <br>
                        <div @click="router.push('/')" class="introduce-button">点击跳转</div>
                    </div>
                </div>
                <div class="step feature2">
                    <n-icon size="5rem">
                        <LogoWechat/>
                    </n-icon>
                    <div class="introduce">
                        资质图像检测<a>在线进行</a>，<br>
                        <a>无需搭建</a>庞大的资质证明后端数据库，<br>
                        仅根据数字图像进行<a>轻量化检测</a>
                    </div>
                </div>
                <div class="step feature3">
                    <n-icon size="5rem">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                             viewBox="0 0 24 24">
                            <g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                               stroke-linejoin="round">
                                <rect x="3" y="5" width="18" height="14" rx="2"></rect>
                                <path d="M6 8h.01"></path>
                                <path d="M9 8h.01"></path>
                            </g>
                        </svg>
                    </n-icon>
                    <div class="introduce">
                        图形界面，更高的性能、更好的用户体验。
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import {ChevronForward} from "@vicons/ionicons5"
import {Search, HardwareChip, Download, LogoWechat} from '@vicons/ionicons5'
import router from "@/router";

</script>

<style scoped lang="scss">
a {
  color: $font-red;
}

span {
  line-height: 2.5rem;
  @media screen and (max-width: 768px) {
    text-align: center;
  }
}



.homepage {
  width: 100%;
  max-width: 1440px;
  padding: 0 5%;
  color: rgba($white, .8);
  font-size: 1.2rem;
  min-height: calc(100vh - 80px);

  //@media screen and (max-width: 376px) {
  //  padding: 0 5%;
  //}

  .vast__title {
    box-sizing: border-box;
    margin-top: calc(120px);
    margin-bottom: 150px;
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 768px) {
      flex-direction: column;
      padding: 1rem;
      justify-content: center;
    }


    .description {
      display: flex;
      flex-direction: column;


    }

    .button {
      @include button(0);

      @media screen and (max-width: 768px) {
        justify-content: center;
      }
    }
  }

  .feature {
    margin-top: 130px;
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 768px) {
      flex-direction: column;
      padding: 1rem;
      justify-content: center;
    }

    &.feature-reverse {
      @media screen and (max-width: 768px) {
        flex-direction: column-reverse;
        padding: 1rem;
        justify-content: center;
      }
    }

    .steps {
      height: 360px;
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
      text-shadow: 4px 4px 6px rgba(0, 0, 0, 0.35);

      display: flex;

      @media screen and (max-width: 376px) {
        flex-direction: column;

      }

      .step {
        height: 360px;
        width: 140px;
        max-width: 90%;

        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        position: relative;

        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 30px 0 30px 0;
        margin: 0 6px;
        border: 1px solid #ffffff;
        transition: all .5s ease;

        @media screen and (max-width: 376px) {
          margin: 6px 0;
        }

        .n-icon {
          position: absolute;
          left: calc(50% - 2.5rem);
          top: calc(50% - 2.5rem);
          opacity: 1;
          transition: opacity .3s ease;
        }

        .introduce {
          width: 160px;
          max-width: 90%;
          transition-delay: .3s;
          transition: opacity .2s ease;
          opacity: 0;

          @media screen and (max-width: 768px) {
            padding: 1rem;
          }

          @media screen and (max-width: 376px) {
            width: 100%;
          }

          &-button {
            cursor: pointer;
            margin-top: 2rem;
            text-align: center;
            height: 2rem;
            transition: color .3s ease;

            &:hover {
              color: $key-color;
            }
          }
        }

        &:hover {
          width: 300px;

          .introduce {
            opacity: 1;
          }

          .n-icon {
            opacity: 0;
          }
        }
      }

    }

    .essay {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      line-height: 1.5rem;

      &.start {
        .button {
          @include button(1);

          @media screen and (max-width: 768px) {
            @include button(2)
          }
        }
      }

      &.end {
        .button {
          @include button(0);

          @media screen and (max-width: 768px) {
            @include button(2)
          }
        }
      }
    }
  }

}


</style>