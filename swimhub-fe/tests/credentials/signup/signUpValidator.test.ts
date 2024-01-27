import signUpValidator from "../../../src/pages/credentials/functions/signUpValidate";
import SignUpType from "../../../src/lib/types";

const mock_1: SignUpType = {
  username: "",
  email: "johndoe",
  password: "doe123",
  repeat_password: "doe123",
};

const mock_2: SignUpType = {
  username: "johndoe",
  email: "johndoe@",
  password: "doe123",
  repeat_password: "doe123",
};

const mock_3: SignUpType = {
  username: "johndoe",
  email: "johndoe@email.com",
  password: "doe123",
  repeat_password: "doe123",
};

const mock_4: SignUpType = {
  username: "johndoe",
  email: "johndoe",
  password: "do",
  repeat_password: "doe123",
};

const mock_5: SignUpType = {
  username: "johndoe",
  email: "johndoe",
  password: "doe123",
  repeat_password: "doe123",
};

describe("It should validate email, posswords", () => {});
