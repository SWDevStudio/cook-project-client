<template>
  <form @submit.prevent="onSubmit" class="surface-card p-4 shadow-2 border-round w-full lg:w-6">
    <div class="text-center mb-5">
      <img src="images/blocks/logos/hyper.svg" alt="Image" height="50" class="mb-3">
      <div class="text-900 text-3xl font-medium mb-3">Welcome Back</div>
      <span class="text-600 font-medium line-height-3">Don't have an account?</span>
      <a class="font-medium no-underline ml-2 text-blue-500 cursor-pointer">Create today!</a>
    </div>

    <div>
      <label for="email1" class="block text-900 font-medium mb-2">Email</label>
      <InputText v-model="form.email" id="email1" type="text" class="w-full mb-3"/>

      <label for="password1" class="block text-900 font-medium mb-2">Password</label>
      <InputText v-model="form.password" id="password1" type="password" class="w-full mb-3"/>

      <div class="flex align-items-center justify-content-between mb-6">
        <div class="flex align-items-center">
          <Checkbox id="rememberme1" :binary="true" class="mr-2"></Checkbox>
          <label for="rememberme1">Remember me</label>
        </div>
        <a class="font-medium no-underline ml-2 text-blue-500 text-right cursor-pointer">Forgot password?</a>
      </div>
      {{ errorMessage }}
      <Button label="Sign In" icon="pi pi-user" class="w-full" type="submit"/>
    </div>
  </form>
</template>

<script setup lang="ts">
import {AuthController} from "../entities/auth/AuthController";
import {reactive, ref, Ref} from "vue";
import {AuthDto} from "../entities/auth/dto/AuthDto";
import router from "../router";
import {AxiosError} from "axios";

const authController = AuthController.instance

const form: AuthDto = reactive({
  email: 'mytest@test.ru',
  password: '1234567891'
})

let errorMessage: Ref<string> = ref('')
const viewServerError = (err: AxiosError<any>) => {
  errorMessage.value = err.response?.data?.error?.message || ''
}

const onSubmit = () =>
    authController
        .login(form)
        .then(() => router.push('./personal-area'))
        .catch(viewServerError)

</script>

<style scoped>

</style>