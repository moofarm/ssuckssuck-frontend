import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createInstance } from "../api/http-client";
import { categoryMap, subCategory } from "../utils/types";

const client = createInstance();

const initialState = {
  isLoading: false,
  isNicknameDupl: false,
  user: {
    email: "wislely@naver.com",
    name: "H",
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
      if (action.payload === "ETC") state.user.subCategory = "";
      else state.user.subCategory = subCategory[categoryMap[action.payload][0]];
    },
    changeSubCategory: (state, action) => {
      state.user.subCategory = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(signup.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(signup.fulfilled, (state, action) => {
      state.isLoading = false;
      state.loginedUser = action.payload.data.data;
    });
    builder.addCase(signup.rejected, (state, action) => {
      alert("회원가입 실패!\nError Message:", action.error.message);
    });
    builder.addCase(checkNicknameDupl.fulfilled, (state, action) => {
      state.isNicknameDupl = action.payload.data.data.duplication;
      if (state.isNicknameDupl) alert("중복된 닉네임 입니다!");
      else alert("사용 가능한 닉네임 입니다.");
    });
    builder.addCase(checkNicknameDupl.rejected, (state, action) => {
      alert(
        "닉네임을 제대로 설정하지 않으면 회원 가입이 불가합니다!\n Error Message: " +
          action.error.message,
      );
    });
  },
});

export const { changeNickname, changeMainCategory, changeSubCategory } = userSlice.actions;

export default userSlice.reducer;
