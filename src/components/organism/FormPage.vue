<template>
  <div id="contact" class="min-h-screen bg-[#5a5a5a] text-white py-20 md:px-12">
    <div class="px-10">
      <Title
        class="md:text-5xl text-[2rem] w-[18rem] leading-12 md:w-[40rem] md:leading-20"
        message="Ready to power your future with sustainable energy?"
      />
      <Title
        class="text-sm my-5"
        message="Fill out the form below and let Viento's experts help"
      />
    </div>

    <div class="w-full p-10 rounded-lg">
      <form @submit.prevent="submitForm">
        <div class="grid md:grid-cols-3 grid-cols-1 gap-8">
          <InputField
            label="First Name"
            v-model="form.firstName"
            :errorMessage="!form.firstName ? 'Enter a first name.' : ''"
            required
          />

          <InputField
            label="Last Name"
            v-model="form.lastName"
            :errorMessage="!form.lastName ? 'Enter a last name.' : ''"
            required
          />

          <InputField
            label="Email"
            type="email"
            v-model="form.email"
            :errorMessage="
              !validateEmail(form.email) ? 'Enter a valid email.' : ''
            "
            required
          />

          <InputField label="Phone" v-model="form.phone" />

          <InputField
            label="Company / Organization Name"
            v-model="form.company"
          />

          <InputField label="Location" v-model="form.location" />
        </div>

        <div class="w-full mt-12">
          <label class="block mb-2 font-semibold text-lg"
            >How can we help?</label
          >
          <textarea
            v-model="form.message"
            class="w-full p-3 border-t-0 border-r-0 border-l-0 border-white bg-transparent ring-0 outline-none text-lg"
          ></textarea>
        </div>

        <div class="flex justify-center items-center w-full">
          <Button
            class="px-32 py-2 whitespace-nowrap  bg-[#5cffff] my-16 md:text-[0.9rem] text-black rounded"
            message="Contact Us"
          />
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import InputField from "../molecules/InputField.vue";
import Button from "../atom/Button.vue";
import Title from "../atom/Title.vue";
const form = reactive({
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  company: "",
  location: "",
  message: "",
});

const validateEmail = (email) => /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);

const submitForm = () => {
  if (!form.firstName || !form.lastName || !validateEmail(form.email)) {
    alert("Please complete the form correctly.");
    return;
  }
  alert("Form submitted!");
};
</script>
