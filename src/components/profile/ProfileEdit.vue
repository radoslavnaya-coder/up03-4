<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="2" md="4">
        <v-text-field
          variant="outlined"
          class="text-white"
          v-model="firstname"
          :rules="nameRules"
          :counter="10"
          label="Изменить id"
          placeholder="@"
          required
        >
        </v-text-field>
      </v-col>
      <v-col cols="2">
        <v-btn color="#708D81" class="mt-4 ty-2" style="border-radius: 10px">
          Изменить
        </v-btn>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col cols="3">
        <v-img
          alt="Avatar"
          src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
          width="122"
          style="border-radius: 10px; border: 1px solid #f4d58d"
          class="v-col-9"
        >
        </v-img>
      </v-col>
      <v-col cols="3">
        <v-file-input
          label="Выбрать фото"
          variant="outlined"
          class="text-white v-col-10 pa-0 ma-0"
          prepend-icon=""
        ></v-file-input>
        <v-btn color="#708D81" class="mt-4" style="border-radius: 10px">
          Изменить
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  data: () => ({
    valid: false,
    firstname: "@",
    nameRules: [
      (value) => {
        if (value) return true;

        return "Используйте идентификатор @";
      },
      (value) => {
        if (value?.length <= 13) return true;

        return "Имя не может быть длиннее 12 знаков";
      },
    ],
  }),
};
</script>
