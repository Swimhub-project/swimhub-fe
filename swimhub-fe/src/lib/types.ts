export interface ResultType {
  userId: number;
  title: string;
  tags: string[];
  body: string;
}

export interface SignUpType {
  username: string;
  email: string;
  password: string;
  repeat_password: string;
}

export interface SignUpApiErrorType {
  code: number;
  message: string;
  params: string[];
}
