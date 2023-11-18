export interface GenUserData {
    id: string;
    name: string;
    user_name: string;
    email: string;
    role: string;
    status: string;
    created_on: Date;
    updated_on: Date;
    is_teacher: boolean;
    bio: string;
    is_bio_public: boolean;
    moderator_notes: string[];
    password: string;
    repeatPassword: string;
    userID: string;
  }