import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    userName: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },

    bio: {
      type: String,
      trim: true,
      default: "",
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },

    password: {
      type: String,
      required: true,
    },

    profilePicture: {
      type: String,
      default: "",
    },

    blogs: [
      {
        type: Schema.Types.ObjectId,
        ref: "Post",
      },
    ],
  },

  { timestamps: true }
);

export default mongoose.models.User ||
  mongoose.model("User", UserSchema, "users");
