import {reactive} from "vue";

export const store = reactive(
    {
        "isAuth": localStorage.getItem("token") !== null,
        "isAdmin": localStorage.getItem("user_role") === "ADMIN",
    }
)