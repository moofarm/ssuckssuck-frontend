import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createInstance } from "../api/http-client";
import { setAccessToken } from "../utils/cookie";

const client = createInstance();

const initialState = {
  isLoading: false,
  isNicknameDupl: false,
  user: {
    email: "",
    name: "",
    nickname: "",
    oauthServerType: "KAKAO",
    mainCategory: "",
    subCategory: "",
  },
  loginedUser: {
    email: "",
    name: "",
    nickname: "",
    oauthServerType: "",
    mainCategory: "",
    subCategory: "",
    avatarInfoVO: {
      characterId: 0,
      experience: 0,
      birthday: "",
      characterImage: "",
      expToNextGrade: 0,
      expDiffCurrGrade: 0,
      radishCount: 0,
      grade: "",
    },
    isFirst: true,
  },
};

export const login = createAsyncThunk("/api/user/login", async requestBody => {
  return await client.post("/api/user/login", requestBody).then(res => {
    return res;
  });
});

export const checkNicknameDupl = createAsyncThunk("/api/user/nickname", async nickname => {
  return await client.get("/api/user/nickname/" + nickname).then(res => {
    return res;
  });
});

export const signup = createAsyncThunk("/api/user/signup", async user => {
  return await client.post("/api/user/signup", user).then(res => {
    return res;
  });
});

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    changeNickname: (state, action) => {
      state.user.nickname = action.payload;
    },
    changeMainCategory: (state, action) => {
      state.user.mainCategory = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(login.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.isLoading = false;
      if (action.payload.data) {
        if (action.payload.data.data.isFirst) {
          state.user = {
            ...state.user,
            email: action.payload.data.data.email,
            name: action.payload.data.data.name,
            oauthServerType: action.payload.data.oauthServerType,
          };
          location.href = "/";
          setAccessToken();
        } else location.href = "/mymissions";
      } else {
        alert("로그인 실패!\nError Message: " + action.payload.message);
      }
    });
    builder.addCase(login.rejected, (state, action) => {
      alert("로그인 실패!\nError Message: " + action.error.message);
    });

    builder.addCase(signup.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(signup.fulfilled, (state, action) => {
      state.loginedUser = action.payload;
      state.isLoading = false;
    });
    builder.addCase(signup.rejected, (state, action) => {
      alert(action.error.message);
    });

    builder.addCase(checkNicknameDupl.fulfilled, (state, action) => {
      state.isNicknameDupl = action.payload.data.data.duplication;
    });
    builder.addCase(checkNicknameDupl.rejected, (state, action) => {
      alert(
        "닉네임을 제대로 설정하지 않으면 회원 가입이 불가합니다!\n Error Message: " +
          action.error.message,
      );
    });
  },
});

export const { changeNickname, changeMainCategory } = userSlice.actions;

export default userSlice.reducer;