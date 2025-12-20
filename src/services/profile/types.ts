export type Profile = {
  first_name: string;
  last_name: string;
  email: string;
  profile_image: string;
};

export type UpdateProfileDTO = {
  firstName: string;
  lastName: string;
};

export type UpdateProfileImageDTO = FormData;
