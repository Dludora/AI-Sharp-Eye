<template>
    <div class="process">
        <div class="container" style="position: relative;">
            <n-image
                    :class="{'loading': loading || finished}"
                    :src="preViewSrc"
                    object-fit="contain"
                    v-if="finished || loading"
            />
            <Transition name="fade" mode="out-in">
                <div v-if="!finished">
                    <n-upload
                            :class="{'loading': loading || finished}"
                            :max="1"
                            :disabled="loading || finished"
                            @update:file-list="uploadFile"
                            accept="image/png, image/jpeg, image/jpg"
                            :default-upload="false"
                    >
                        <n-upload-dragger>
                            <transition name="load" mode="out-in">
                                <div v-if="!loading && !finished">
                                    <div>
                                        <n-icon size="6rem">
                                            <PureLogo/>
                                        </n-icon>
                                    </div>
                                    <n-text style="font-size: 16px">
                                        点击或者拖动图片到该区域来上传
                                    </n-text>
                                    <n-p depth="3" style="margin: 8px 0 0 0">
                                        目前支持jpeg、png、jpg格式的图片
                                    </n-p>
                                </div>
                                <div class="load" v-else-if="!finished">
                                    <span class="loader" v-show="loading"/>
                                </div>
                            </transition>
                        </n-upload-dragger>
                    </n-upload>
                </div>
                <div v-else>
                    <n-image class="finished"
                             :src="returnSrc"
                             object-fit="contain"
                             style="overflow: hidden"
                    />
                </div>
            </Transition>
        </div>
        <div class="next" v-if="finished">
            <div @click="finished=false;returnSrc='';preViewSrc='';">
                继续上传
                <n-icon size="1.5rem">
                    <ChevronForward/>
                </n-icon>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import axios from "axios"
import {useRouter} from "vue-router";
import {darkTheme, type GlobalThemeOverrides, type UploadFileInfo, useMessage} from "naive-ui";
import {ref} from "vue"
import PureLogo from '@/components/Logo/PureLogo.vue'
import {ChevronForward} from "@vicons/ionicons5"

const theme = darkTheme
const themeOverrides: GlobalThemeOverrides = {
    Upload: {
        'draggerBorder': 'none',
        'draggerBorderHover': 'none'
    }
}
const router = useRouter()
const message = useMessage()

// 1：选择文件 2：确定上传 3: 继续上传
/*
* mode == 0: 无事发生
* mode == 1: 选好文件
* mode == 2: 正在上传
* mode == 3: 上传成功
* */
const loading = ref(false)
const finished = ref(false)
const preViewSrc = ref("")
const returnSrc = ref("")
const uploadFile = async (fileList: UploadFileInfo[]) => {
    const formData = new FormData()
    formData.append('img', fileList[0].file)

    let reader = new FileReader()
    if (fileList[0].file) {
        reader.readAsDataURL(fileList[0].file)
        reader.onloadend = function () {
            preViewSrc.value = reader.result as string
        }
    }
    loading.value = true
    const res = await axios.post('upload/test', formData)
    loading.value = false
    finished.value = true
    returnSrc.value = res.data.pic
    const msg = res.data.msg
    if (msg) {
        message.success('上传成功')
    } else {
        message.error('上传失败！')
    }
}
</script>

<style scoped lang="scss">
$base: #263238;
$lite: #FFF;
$brand: #FF3D00;
$size: 48px;

div {
  @media screen and (max-width: 426px) {
    width: 100%;
  }
}

.process {
  width: 100%;
  min-height: calc(100vh - 80px);
  max-width: 1440px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .container {
    width: 48rem;
    height: 14rem;
    display: flex;
    justify-content: center;

    @media screen and (max-width: 426px) {
      width: 100%;
      height: 30rem;
      align-items: center;
      flex-direction: column;
      padding: 0 .5rem;
    }

    .n-image {
      width: 0;
      margin-right: 0;
      background: $secondary-color;
      box-shadow: 0 0 20px 3px $secondary-color;
      transition: width .6s ease;
      box-sizing: content-box;

      display: flex;
      justify-content: center;

      &.loading, &.finished {
        width: 22rem;
        margin-right: 4rem;

        @media screen and (max-width: 426px) {
          width: 100%;
          height: 14rem;
          margin-right: 0;
        }
      }

      &.finished {
        margin: 0;
        @media screen and (max-width: 426px) {
          margin-top: 1rem;
        }
      }

      img {
        transition: all .3s ease;
      }
    }


    .more {
      //position: absolute;
      //left: 0;
      //top: -4rem;
    }
  }


  .n-upload {
    background: $secondary-color;
    box-shadow: 0 0 20px 3px $secondary-color;
    width: 32rem;
    height: 14rem;
    transition: width .6s ease;

    @media screen and (max-width: 426px) {
      width: 100%;
    }

    &-dragger {
      width: 32rem;
      height: 14rem;
      animation-direction: reverse;
      transition: width .6s ease;

      @media screen and (max-width: 426px) {
        width: 100%;
      }

      .load {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }

    &.loading {
      width: 22rem;

      .n-upload-dragger {
        width: 22rem;
        padding: 0;

        @media screen and (max-width: 426px) {
          width: calc(100% - 1rem);
        }
      }
    }
  }

  .next {
    height: 5rem;
    width: 100%;
    max-width: 768px;
    padding: 1rem;
    color: white;

    @include button(0)


  }
}

.load-enter-active, .load-leave-active {
  transition: opacity .3s linear;
}

.load-enter-from, .load-leave-to {
  opacity: 0;
}

.load-enter-to, .load-leave-from {
  opacity: 1;
}


.fade-enter-active, .fade-leave-active {
  transition: opacity .5s ease;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

.fade-enter-to, .fade-leave-from {
  opacity: 1;
}

.loader {
  width: 3rem;
  height: 3rem;
  border: 3px dotted $white;
  border-style: solid solid dotted dotted;
  border-radius: 50%;
  display: inline-block;
  position: relative;
  z-index: 3;
  animation: rotation 2s linear infinite;

  &:after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    border: 3px dotted $key-color;
    border-style: solid solid dotted;
    width: calc($size / 2);
    height: calc($size / 2);
    border-radius: 50%;
    animation: rotationBack 1s linear infinite;
    transform-origin: center center;
  }
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes rotationBack {
  0% {
    transform: rotate(0deg)
  }
  100% {
    transform: rotate(-360deg)
  }
}


</style>