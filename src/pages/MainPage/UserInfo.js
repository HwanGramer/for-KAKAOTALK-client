import axios from "axios";

export default {
    USER_NUMBER : null,
    USER_ID : null ,
    USER_NAME : null ,
    USER_TEL : null ,
    USER_SEX : null ,
    USER_PROFILEIMG : null , 
    USER_SOCKET : null,
    USER_STATUS : null ,
    USER_FRIEND_LIST : null,
    UserInfoPush : function(data){ //? this 바인딩 잘해야된다
        this.USER_NUMBER = data.user_number
        this.USER_ID = data.user_id
        this.USER_NAME = data.user_name;
        this.USER_TEL = data.user_tel
        this.USER_SEX = data.user_sex
        this.USER_PROFILEIMG = data.user_img
        this.USER_SOCKET = data.user_socket
        this.USER_STATUS = data.user_status
        this.USER_FRIEND_LIST = data.friend_list
    },
    userInforeload : function(){

    }
}

