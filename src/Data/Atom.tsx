import { atom } from "recoil";
import { Tweets } from "./Data";

type Tweet = {
  "id": number,
  "email": string,
  "description": string,
  "userName"?:string,
  "image":string,
  "likeCount": number,
  "commentCount": number,
  "isLiked"?:boolean,
  "isCommented"?:boolean
}

export const tweetData = atom<Tweet[]>({
  key: "tweetData",
  default: [...Tweets],
});

type TodoItem = string

export const todoItem=atom<TodoItem[]>({
  key : "todo",
  default :[]
})

type User ={
  name:string,
  email:string
}

export const user=atom<User>({
  key : "user",
  default :{
    name:"",
    email:""
  }
})
export const login=atom<boolean>({
  key : "isLogedIn",
  default :false
})