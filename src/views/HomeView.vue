<!--<template>-->
<!--  <main>-->
<!--    <div class="header container">-->
<!--      <div class="box">-->
<!--        <div>-->
<!--          <div class="logo">-->
<!--            <el-icon :size="40">-->
<!--              <svg-->
<!--                  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512">-->
<!--                <path-->
<!--                    d="M416 64H96a64.07 64.07 0 0 0-64 64v256a64.07 64.07 0 0 0 64 64h320a64.07 64.07 0 0 0 64-64V128a64.07 64.07 0 0 0-64-64zm-80 64a48 48 0 1 1-48 48a48.05 48.05 0 0 1 48-48zM96 416a32 32 0 0 1-32-32v-67.63l94.84-84.3a48.06 48.06 0 0 1 65.8 1.9l64.95 64.81L172.37 416zm352-32a32 32 0 0 1-32 32H217.63l121.42-121.42a47.72 47.72 0 0 1 61.64-.16L448 333.84z"-->
<!--                    fill="currentColor"></path>-->
<!--              </svg>-->
<!--            </el-icon>-->
<!--            <h1>-->
<!--              识别真伪-->
<!--            </h1>-->
<!--          </div>-->
<!--          <h2>-->
<!--            最佳资质检测应用-->
<!--          </h2>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--    <div class="upload container">-->
<!--      <div class="box-size">-->
<!--        <div v-if="before">-->
<!--          <div class="upload-container" id="upload-container">-->
<!--            <el-upload-->
<!--                class="upload-demo"-->
<!--                drag-->
<!--                :on-success="uploadSuccess"-->
<!--                :on-error="uploadError"-->
<!--                :http-request="uploadFile"-->
<!--                :before-upload="beforeUpload"-->
<!--            >-->
<!--              <div>-->
<!--                <el-icon :size="70" color="#CEE4F2">-->
<!--                  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"-->
<!--                       viewBox="0 0 512 512">-->
<!--                    <path-->
<!--                        d="M384 80H128c-26 0-43 14-48 40L48 272v112a48.14 48.14 0 0 0 48 48h320a48.14 48.14 0 0 0 48-48V272l-32-152c-5-27-23-40-48-40z"-->
<!--                        fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32"></path>-->
<!--                    <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"-->
<!--                          stroke-width="32" d="M48 272h144"></path>-->
<!--                    <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"-->
<!--                          stroke-width="32" d="M320 272h144"></path>-->
<!--                    <path d="M192 272a64 64 0 0 0 128 0" fill="none" stroke="currentColor" stroke-linecap="round"-->
<!--                          stroke-linejoin="round" stroke-width="32"></path>-->
<!--                    <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"-->
<!--                          stroke-width="32" d="M144 144h224"></path>-->
<!--                    <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"-->
<!--                          stroke-width="32" d="M128 208h256"></path>-->
<!--                  </svg>-->
<!--                </el-icon>-->
<!--              </div>-->
<!--              <el-button color="#CEE4F2">-->
<!--                <el-icon class="el-icon&#45;&#45;left" size="25">-->
<!--                  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"-->
<!--                       viewBox="0 0 512 512">-->
<!--                    <path-->
<!--                        d="M416 221.25V416a48 48 0 0 1-48 48H144a48 48 0 0 1-48-48V96a48 48 0 0 1 48-48h98.75a32 32 0 0 1 22.62 9.37l141.26 141.26a32 32 0 0 1 9.37 22.62z"-->
<!--                        fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32"></path>-->
<!--                    <path d="M256 56v120a32 32 0 0 0 32 32h120" fill="none" stroke="currentColor" stroke-linecap="round"-->
<!--                          stroke-linejoin="round" stroke-width="32"></path>-->
<!--                    <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"-->
<!--                          stroke-width="32" d="M176 288h160"></path>-->
<!--                    <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"-->
<!--                          stroke-width="32" d="M176 368h160"></path>-->
<!--                  </svg>-->
<!--                </el-icon>-->
<!--                选择图片-->
<!--              </el-button>-->
<!--              <div class="el-upload__text">-->
<!--                或拖放图片至此处-->
<!--              </div>-->
<!--            </el-upload>-->
<!--          </div>-->
<!--        </div>-->
<!--        <div v-else>-->

<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--    <div class="profile container">-->
<!--      <div class="grid">-->
<!--        <div v-for="(profile, index) in profiles" class="profile-item">-->
<!--          <el-icon size="50">-->
<!--            <Idea v-if="index === 0"/>-->
<!--            <Search v-else-if="index === 1"/>-->
<!--            <Sunny v-else-if="index === 2"/>-->
<!--            <Hand v-else-if="index === 3"/>-->
<!--            <AirPlay v-else-if="index === 4"/>-->
<!--          </el-icon>-->
<!--          <h2 style="margin-top: 10px">{{ profile.title }}</h2>-->
<!--          <p style="margin-top: 20px">{{ profile.content }}</p>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--  </main>-->
<!--</template>-->

<!--<script setup lang="ts">-->
<!--import {Idea, Search, Sunny, Hand, AirPlay} from '@/components/icons'-->
<!--import {reactive, ref} from "vue"-->
<!--import {useRouter, useRoute} from 'vue-router'-->
<!--import type {UploadFile, UploadFiles} from "element-plus"-->
<!--import axios from "axios"-->
<!--import {ElMessage, ElLoading} from "element-plus"-->

<!--const route = useRoute()-->
<!--const router = useRouter()-->
<!--const loading = ref(true)-->
<!--const before = ref<boolean>(true)-->
<!--type profile = {-->
<!--  title: string,-->
<!--  content: string-->
<!--}-->
<!--const profiles = reactive<profile[]>([-->
<!--  {-->
<!--    title: '如何对图像进行检测',-->
<!--    content: '将图像文件拖放到方框中。您可以立即对文件进行检测。'-->
<!--  },-->
<!--  {-->
<!--    title: '资质证明、检测报告识别真伪',-->
<!--    content: '在线判断资质证明、检测报告是否经过图像篡改，为快速判断图像类文件真伪提供便利。'-->
<!--  },-->
<!--  {-->
<!--    title: '一键添加、在线识别',-->
<!--    content: '一键添加本地图片，在线识别图像真伪，操作简单，不占用本地空间'-->
<!--  },-->
<!--  {-->
<!--    title: '图像加密上传，维护用户隐私',-->
<!--    content: '资质证明、检测报告加密传输，维护用户隐私安全'-->
<!--  },-->
<!--  {-->
<!--    title: '多端使用，满足用户需求',-->
<!--    content: '设计更为简单易用的网页端，与更加安全的软件端，根据用户需求提供多客户端使用的便利'-->
<!--  }-->
<!--])-->
<!--const uploadSuccess = (response: any, uploadFile: UploadFile, uploadFiles: UploadFiles) => {-->
<!--  // console.log(uploadFile)-->
<!--}-->
<!--const uploadError = (response: any, uploadFile: UploadFile, uploadFiles: UploadFiles) => {-->
<!--  console.log('error')-->
<!--}-->
<!--const uploadFile = async (file: any) => {-->
<!--  const formData = pure.svg FormData()-->
<!--  formData.append('img', file.file)-->
<!--  let loadingInstance = ElLoading.service({target: document.querySelector('.el-upload-dragger') as HTMLElement, background: '#A6702E', text: '正在上传图片'})-->
<!--  const res = await axios.post('upload/test', formData)-->
<!--  loadingInstance.close()-->
<!--  const msg = res.data.msg-->
<!--  if (msg === 1) {-->
<!--    ElMessage({-->
<!--      message: '上传成功',-->
<!--      type: 'success',-->
<!--    })-->
<!--    router.push({path: '/showPic', query: {url: res.data.pic}})-->
<!--  } else {-->
<!--    ElMessage.error('上传失败！')-->
<!--  }-->
<!--}-->
<!--const beforeUpload = (file: any) => {-->
<!--  // console.log(file)-->
<!--  // 先检查文件类型-->
<!--  const imgType = ['image/webp', 'image/png', 'image/jpeg', 'image/jpg']-->
<!--  if (!imgType.some(item => item === file.type)) {-->
<!--    // if (!imgType.includes(file.type)) {-->
<!--    // 如果不存在-->
<!--    ElMessage.error('请检查上传的图片格式是否为webp/png/jpeg/jpg格式')-->
<!--    return false// 上传停止-->
<!--  }-->
<!--  // 其次检查文件大小,不能超过5M-->
<!--  const maxSize = 5 * 1024 * 1024-->
<!--  if (file.size > maxSize) {-->
<!--    ElMessage.error('上传的文件大小不能大于5M!')-->
<!--    return false-->
<!--  }-->
<!--  return true-->
<!--}-->

<!--</script>-->

<!--<style scoped lang="scss">-->
<!--main {-->
<!--  display: flex;-->
<!--  flex-direction: column;-->
<!--  //justify-content: space-between;-->
<!--  min-height: 100vh;-->
<!--  min-width: 100%;-->

<!--  .header {-->
<!--    //background: $IKEAOrganising-2-hex;-->
<!--    .box {-->

<!--      & > div {-->
<!--        padding: 24px 0;-->

<!--        .logo {-->
<!--          display: flex;-->
<!--          align-items: center;-->

<!--          .el-icon {-->
<!--            margin-right: 12px;-->
<!--            color: $IKEAOrganising-4-hex;-->
<!--          }-->

<!--          h1 {-->
<!--            margin: 0;-->
<!--            line-height: 36px;-->
<!--            font-size: 30px;-->
<!--          }-->

<!--        }-->

<!--        h2 {-->
<!--          font-family: "Source Sans Pro", Helvetica, Arial, sans-serif;-->
<!--          font-weight: 300;-->
<!--          text-align: center;-->
<!--          color: rgb(33, 33, 33);-->
<!--          line-height: 30px;-->
<!--          font-size: 22px;-->
<!--        }-->
<!--      }-->
<!--    }-->
<!--  }-->

<!--  .upload {-->
<!--    //background: $IKEAOrganising-3-hex;-->


<!--    .box-size > div {-->
<!--      padding: 0 30px;-->

<!--      .upload-container {-->
<!--        padding: 12px;-->
<!--        height: 300px;-->
<!--        background: $IKEAOrganising-4-hex;-->

<!--        .upload-demo {-->
<!--          :deep(.el-upload-dragger) {-->
<!--            width: 1116px;-->
<!--            height: 276px;-->
<!--            background: $IKEAOrganising-5-hex;-->
<!--            border: 1px dashed $IKEAOrganising-6-hex;-->
<!--          }-->

<!--          :deep(.el-upload-list) {-->
<!--            margin-top: 15px;-->
<!--          }-->

<!--          .el-button {-->
<!--            width: 180px;-->
<!--            height: 54px;-->
<!--            font-size: 20px;-->
<!--            font-weight: bold;-->
<!--            margin-top: 10px;-->
<!--          }-->

<!--          .el-upload__text {-->
<!--            margin-top: 20px;-->
<!--            color: $IKEAOrganising-3-hex;-->
<!--          }-->
<!--        }-->
<!--      }-->
<!--    }-->

<!--  }-->

<!--  .profile {-->
<!--    margin-top: 60px;-->

<!--    .grid {-->
<!--      display: grid;-->
<!--      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));-->
<!--      grid-column-gap: 2rem;-->
<!--      grid-row-gap: 6rem;-->
<!--      width: 1140px;-->

<!--      .profile-item {-->
<!--        display: flex;-->
<!--        justify-content: space-between;-->
<!--        align-items: center;-->
<!--        flex-direction: column;-->
<!--      }-->
<!--    }-->
<!--  }-->

<!--  .container {-->
<!--    display: flex;-->
<!--    justify-content: center;-->

<!--    .box {-->
<!--      @media (min-width: 768px) {-->
<!--        padding: 0 30px;-->
<!--      }-->

<!--      @media (min-width: 1200px) {-->
<!--        max-width: 1200px;-->
<!--      }-->
<!--    }-->
<!--  }-->

<!--}-->
<!--</style>-->