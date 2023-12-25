<template>
  <v-container>
    <v-row>
      <v-col cols="5" class="my-7">
        <router-link :to="{name: 'Chats'}">
          <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
        >
          <path
            fill="white"
            d="M20 11v2H8l5.5 5.5l-1.42 1.42L4.16 12l7.92-7.92L13.5 5.5L8 11z"
          />
        </svg>
        </router-link>
        
      </v-col>
      <v-col cols="5" class="my-7">
        <v-text class="text-white fs-5 mx-16">@viliskas</v-text>
      </v-col>
      <v-col cols="2" align="right">
        <v-img
          alt="Avatar"
          src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
          width="122"
          style="border-radius: 10px; border: 1px solid #f4d58d"
          class="v-col-6"
        >
        </v-img>
      </v-col>
    </v-row>
  </v-container>
  <!-- scroll -->
  <v-infinite-scroll
    height="570"
    side="none"
  >
<v-container>
    <v-row>
      <v-col>
        <v-card
          width="600"
          color="white"
          subtitle="@viliskas"
          text="Привет, как твои дела?"
          variant="tonal"
        ></v-card>
      </v-col>
    </v-row>
  </v-container>
  <v-container align="right">
    <v-row>
      <v-col>
        <v-card
          align="left"
          width="600"
          color="white"
          subtitle="@dangers"
          text="Мотоцикл сегодня купил, а твои как?"
          variant="tonal"
        ></v-card>
      </v-col>
    </v-row>
  </v-container>
  <v-container>
    <v-row>
      <v-col>
        <v-card
          width="600"
          color="white"
          subtitle="@viliskas"
          text="Привет, как твои дела?"
          variant="tonal"
        ></v-card>
      </v-col>
    </v-row>
  </v-container>
  <v-container>
    <v-row>
      <v-col>
        <v-card
          width="600"
          color="white"
          subtitle="@viliskas"
          text="Привет, как твои дела?"
          variant="tonal"
        ></v-card>
      </v-col>
    </v-row>
  </v-container>
  <v-container>
    <v-row>
      <v-col>
        <v-card
          width="600"
          color="white"
          subtitle="@viliskas"
          text="Привет, как твои дела?"
          variant="tonal"
        ></v-card>
      </v-col>
    </v-row>
  </v-container>
  <v-container>
    <v-row>
      <v-col>
        <v-card
          width="600"
          color="white"
          subtitle="@viliskas"
          text="Привет, как твои дела?"
          variant="tonal"
        ></v-card>
      </v-col>
    </v-row>
  </v-container>
  </v-infinite-scroll>
  <!-- end scroll -->
  <v-form>
    <v-container>
      <v-row>
        <v-col class="py-0" cols="11">
          <v-text-field
            v-model="message"
            variant="outlined"
            clear-icon="mdi-close-circle"
            clearable
            placeholder="Напишите сообщение"
            type="text"
            class="text-white"
            @click:append-inner="toggleMarker"
            @click:append="sendMessage"
            @click:prepend="changeIcon"
            @click:clear="clearMessage"
          ></v-text-field>
        </v-col>
        <v-col cols="1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="60"
            height="60"
            viewBox="0 4 30 30"
          >
            <path
              fill="white"
              d="M4 18.5v-5.154L9.846 12L4 10.654V5.5L19.423 12z"
            />
          </svg>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>
<script setup></script>
<style scoped>
button {
  border-radius: 10px;
}
/* width */
  ::-webkit-scrollbar {
    display: none;
  }
</style>
