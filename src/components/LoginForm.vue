<template>
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