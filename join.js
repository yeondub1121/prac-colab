import axios from 'axios'; // axios 라이브러리를 불러옵니다. 이를 통해 HTTP 요청을 쉽게 보낼 수 있습니다.

// API 요청을 보낼 기본 URL을 정의합니다.
const API_URL = 'http://localhost:8080/';

// 회원 가입 요청을 보내는 함수입니다. 사용자가 입력한 정보를 서버에 전송합니다.
export const postJoin = async info => {
  // axios를 사용하여 POST 요청을 보냅니다. URL은 API_URL에 auth/signup을 추가한 것입니다.
  // info.formData에는 사용자가 입력한 회원 가입 정보가 들어 있습니다.
  const response = await axios.post(`${API_URL}auth/signup`, info.formData);
  // 서버로부터 받은 응답 데이터를 반환합니다.
  return response.data;
};

// 로그인 요청을 보내는 함수입니다. 사용자가 입력한 로그인 정보를 서버에 전송합니다.
export const postSignup = async info => {
  // axios를 사용하여 POST 요청을 보냅니다. URL은 API_URL에 auth/login을 추가한 것입니다.
  // info.formData에는 사용자가 입력한 로그인 정보가 들어 있습니다.
  const response = await axios.post(`${API_URL}auth/login`, info.formData);
  // 서버로부터 받은 응답 데이터를 반환합니다.
  return response.data;
};

// 사용자 인증 정보를 가져오는 함수입니다. 사용자의 토큰을 서버에 전송하여 인증된 사용자 정보를 받아옵니다.
export const getAuth = async token => {
  // axios를 사용하여 GET 요청을 보냅니다. URL은 API_URL에 auth/me을 추가한 것입니다.
  // Authorization 헤더에 Bearer 토큰을 포함시켜 사용자 인증을 수행합니다.
  const response = await axios.get(`${API_URL}auth/me`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  // 서버로부터 받은 응답 데이터를 반환합니다.
  return response.data;
};