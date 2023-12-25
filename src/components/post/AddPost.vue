<template>
  <v-sheet width="600" class="mx-auto" color="#001427">
    <v-container fast-fail @submit.prevent>
      <v-file-input
          label="Выбрать фото"
          variant="outlined"
          class="text-white pa-0 ma-0"
          prepend-icon=""
        ></v-file-input>
      <v-text-field
        v-model="title"
        label="Заголовок"
        :rules="titleRules"
        variant="outlined"
      ></v-text-field>
      <v-textarea
        :rules="descriptionRules"
        label="Описание"
        variant="outlined"
      ></v-textarea>
      <v-btn type="submit" block class="mt-2">Опубликовать</v-btn>
    </v-container>
  </v-sheet>
</template>
<script>
export default {
  data: () => ({
    title: '',
    titleRules: [
      value => {
        if (value?.length > 5 & value?.length < 31) return true
        return 'Заголок не может быть меньше 5 букв и больше 30'
      },
    ],
    descriptionRules: [
      value => {
        if (value?.length > 5) return true
        return 'Описание не может быть пустым и должно содержать минимум 5 букв'
      },
    ],
  }),
}
</script>
<script setup></script>
