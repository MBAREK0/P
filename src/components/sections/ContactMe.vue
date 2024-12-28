<template>
    <section id="contact-me" class="mb-5 section">
        <router-link :to="{ name: 'portfolio', hash: '#contact-me' }">
            <div class="flex justify-start items-center mb-3 text-3xl dark:hover:text-white">
                <span>#</span>
                <h1 class="ml-2" id="t-contact-me" >{{ $t('contact_me') }}</h1>
            </div>
        </router-link>
        <p class="text-sm">
            {{ $t('contact_message') }}
        </p>
        <form class="mt-5" @submit.prevent="sendEmail">
            <div class="mb-4">
                <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{
                    $t('your_name') }}</label>
                <input v-model="name" type="text" id="name"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    :placeholder="$t('name')" required />
            </div>
            <div class="mb-4">
                <label for="email-address-icon" class="block text-sm mb-2 font-medium text-gray-900 dark:text-white">{{
                    $t('your_email') }}</label>
                <div class="relative">
                    <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                        <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                            <path
                                d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                            <path
                                d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                        </svg>
                    </div>
                    <input type="text" id="email-address-icon" v-model="email"
                        class=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="name@example.com">
                </div>
            </div>
            <div class="mb-4">
                <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{
                    $t('your_message') }}</label>
                <textarea id="message" rows="4"
                    class=" block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    :placeholder="$t('leave_comment')" v-model="message"></textarea>
            </div>
            <div class="flex justify-end">
                <button disabled type="button" v-if="loader"
                    class="py-2.5 px-5 me-2 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 inline-flex items-center">
                    <svg aria-hidden="true" role="status"
                        class="inline w-4 h-4 me-3 text-gray-200 animate-spin dark:text-gray-600" viewBox="0 0 100 101"
                        fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                            fill="currentColor" />
                        <path
                            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                            fill="#1C64F2" />
                    </svg>
                    Loading...
                </button>
                <button type="submit" v-else
                    class="flex justify-center items-center bg-blue-500 text-white text-sm font-semibold py-2 px-12 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">

                    {{ $t('send') }}
                </button>

            </div>


        </form>
    </section>
</template>

<script setup>
import { ref } from 'vue';
import emailjs from 'emailjs-com';
import { useMainStore } from '@/stores/mainStore';
import { useToast } from 'vue-toast-notification';

const toast = useToast();

const mainStore = useMainStore();


const SERVICE_ID = mainStore.service_id;
const TEMPLATE_ID = mainStore.template_id;
const USER_ID = mainStore.user_id;

const name = ref('');
const email = ref('');
const message = ref('');
const status = ref('');
const statusMessage = ref('');
const loader = ref(false);


const sendEmail = async () => {
    loader.value = true;
    if (!/\S+@\S+\.\S+/.test(email.value)) {
        status.value = 'error';
    loader.value = false;

        return showErrorToast('Please enter a valid email address.');
    }

    try {

        const response = await emailjs.send(SERVICE_ID, TEMPLATE_ID, {
            from_name: name.value,
            from_email: email.value,
            message: message.value,
            to_email: mainStore.email,
            to_name: mainStore.userName,
            reply_to: email.value,
            my_name: mainStore.userName,
            my_email: mainStore.email,
        }, USER_ID);

        if (response.status === 200) {
            status.value = 'success';
            showSuccessToast('Message sent successfully.');
        } else {
            throw new Error('Failed to send message.');
        }
    } catch (error) {
        status.value = 'error';

        showErrorToast('Failed to send message.');
    }
    loader.value = false;
};


const showSuccessToast = (msg) => {
    const Message = msg;
    toast.success(Message, {
        position: 'bottom-right',
        duration: 3000,
    });
};

const showErrorToast = (msg) => {
    const Message = msg;
    toast.error(Message, {
        position: 'bottom-right',
        duration: 3000,
    });
};

</script>
