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
    height="55.5vh"
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
      <v-col>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="white" d="m9.55 15.15l8.475-8.475q.3-.3.713-.3t.712.3q.3.3.3.713t-.3.712l-9.2 9.2q-.3.3-.7.3t-.7-.3L4.55 13q-.3-.3-.288-.712t.313-.713q.3-.3.713-.3t.712.3z"/></svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="white" d="m6 17.3l-4.25-4.25q-.3-.3-.288-.7t.313-.7q.3-.275.7-.288t.7.288l3.55 3.55l1.4 1.4l-.725.7q-.3.275-.7.288T6 17.3m5.65 0L7.4 13.05q-.275-.275-.275-.687t.275-.713q.3-.3.713-.3t.712.3l3.525 3.525l8.5-8.5q.3-.3.7-.287t.7.312q.275.3.288.7t-.288.7l-9.2 9.2q-.3.3-.7.3t-.7-.3m.7-4.95l-1.425-1.4l4.25-4.25q.275-.275.688-.275t.712.275q.3.3.3.713t-.3.712z"/></svg><br>
        <v-text class="text-white">18:12</v-text>
      </v-col>
    </v-row>
  </v-container>
  <v-container align="right">
    <v-row>
      <v-col>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="white" d="m9.55 15.15l8.475-8.475q.3-.3.713-.3t.712.3q.3.3.3.713t-.3.712l-9.2 9.2q-.3.3-.7.3t-.7-.3L4.55 13q-.3-.3-.288-.712t.313-.713q.3-.3.713-.3t.712.3z"/></svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="white" d="m6 17.3l-4.25-4.25q-.3-.3-.288-.7t.313-.7q.3-.275.7-.288t.7.288l3.55 3.55l1.4 1.4l-.725.7q-.3.275-.7.288T6 17.3m5.65 0L7.4 13.05q-.275-.275-.275-.687t.275-.713q.3-.3.713-.3t.712.3l3.525 3.525l8.5-8.5q.3-.3.7-.287t.7.312q.275.3.288.7t-.288.7l-9.2 9.2q-.3.3-.7.3t-.7-.3m.7-4.95l-1.425-1.4l4.25-4.25q.275-.275.688-.275t.712.275q.3.3.3.713t-.3.712z"/></svg><br>
        <v-text class="text-white">18:12</v-text>
      </v-col>
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
