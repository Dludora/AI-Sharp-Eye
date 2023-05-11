<template>
    <main>
        <div class="mission">
            <div class="introduce">
                <h1>
                    我们欢迎任何有效的反馈与交流。期待您的来信。
                </h1>
            </div>
            <div class="img"></div>
        </div>
        <div class="contact">
            <div class="guide">
                <div class="head">
                    联系方式 Contact us
                </div>
                <div class="content">
                    您的宝贵意见，会使我们走地更远
                </div>
            </div>
            <div class="info">
                <div class="card">
                    <div class="icon">
                        <n-icon size="3rem">
                            <Mail/>
                        </n-icon>
                    </div>
                    <div class="title">
                        邮箱
                    </div>
                    <div class="content">
                        <h4>
                            koushurui@outlook.com
                        </h4>
                        <h4>
                            koushurui@outlook.com
                        </h4>
                        <h4>
                            599050584@qq.com
                        </h4>
                    </div>

                </div>
                <div class="card">
                    <div class="icon">
                        <n-icon size="3rem">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                 viewBox="0 0 24 24">
                                <path d="M19.23 15.26l-2.54-.29a1.99 1.99 0 0 0-1.64.57l-1.84 1.84a15.045 15.045 0 0 1-6.59-6.59l1.85-1.85c.43-.43.64-1.03.57-1.64l-.29-2.52a2.001 2.001 0 0 0-1.99-1.77H5.03c-1.13 0-2.07.94-2 2.07c.53 8.54 7.36 15.36 15.89 15.89c1.13.07 2.07-.87 2.07-2v-1.73c.01-1.01-.75-1.86-1.76-1.98z"
                                      fill="currentColor"></path>
                            </svg>
                        </n-icon>
                    </div>
                    <div class="title">
                        电话
                    </div>
                    <div class="content">
                        <h4>
                            189-0349-7520
                        </h4>
                        <h4>
                            189-0349-7520
                        </h4>
                        <h4>
                            18045281767
                        </h4>
                    </div>
                </div>
            </div>
        </div>


    </main>
</template>

<script setup lang="ts">
import {Mail} from '@vicons/ionicons5'
</script>

<style scoped lang="scss">
main {
  height: 100%;
  min-height: calc(100vh - 80px);
  width: 100%;
  max-width: 1440px;
  color: $white;

  .mission {
    display: flex;
    color: $white;
    height: 42rem;

    overflow: hidden;
    background-image: url("@/assets/about.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    @media screen and (max-width: 768px) {
      flex-direction: column;
    }

    .introduce {
      height: 100%;
      box-sizing: content-box;
      font-weight: 400;
      flex: 1;
      background: rgba($secondary-color, .9);
      backdrop-filter: blur(5px);
      display: flex;
      align-items: center;
      justify-content: center;

      h1 {
        text-align: center;
        font-size: 2.5rem;
        margin: 3rem;
      }
    }

    .img {
      flex: 1;
    }
  }

  .contact {
    padding: 5rem;
    margin-top: 3rem;

    @media screen and (max-width: 768px) {
      padding: 1rem;
    }
  }

  .guide {
    width: 100%;
    box-sizing: border-box;
    height: 9rem;
    background: $secondary-color;
    border-radius: 1rem;
    padding: 2rem;

    .head {
      height: 3rem;
      font-size: 2rem;
      position: relative;
      font-weight: bold;
      margin-left: 1rem;
      overflow: hidden;

      &:before {
        content: '';
        position: absolute;
        top: 0;
        left: -1rem;
        width: 6rem;
        height: 3px;
        background: $key-color;
      }
    }

    .content {
      height: 3rem;

      h4 {
        margin-bottom: .6rem;
      }
    }
  }

  .info {
    width: 100%;
    margin-top: 3rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(32rem, 1fr));
    grid-column-gap: calc((100% - 32rem * 2) / 2);

    @media screen and (max-width: 769px) {
      grid-template-columns: repeat(auto-fit, minmax(100%, 1fr));

      grid-row-gap: 3rem;
    }

    .card {
      height: 24rem;
      background: $secondary-color;
      transition: all .3s ease;
      border-radius: 1.4rem;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;

      &:hover {
        box-shadow: 3px 3px 8px 4px $secondary-color;
      }

      @media screen and (max-width: 768px) {
        width: 100%;
      }

      .icon {
        margin-bottom: 1.6rem;
      }

      .title {
        font-size: 1.8rem;
        margin-bottom: .4rem;
        font-weight: 600;
      }
    }


  }
}
</style>