import { Axios } from "./@axios";

export const  userService = {
   url:'users',
   get:function(){
     return Axios.get(this.url);
   }
}