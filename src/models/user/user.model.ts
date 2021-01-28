import { Document, model, Model, Schema } from "mongoose";

// 유저 스키마 만들기
var UserSchema: Schema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  favorites: [String],
  data: [Schema.Types.Mixed],
});

export interface IUser extends Document {
  email: string;
  password: string;
  favorites?: string[];
  data?: any[];
}

// 유저 모델 생성
var UserModel: Model<IUser> = model<IUser>("User", UserSchema);

export default UserModel;

// var user = new UserModel({ name: "Jane", password: "rhskflwk!23" });
// user.username; // IUser properties are available
// user.save(); // mongoose Document methods are available

// UserModel.findOne({}, (err: any, user: IUser) => {
//   user.username; // IUser properties are available
//   user.save(); // mongoose Document methods are available
// });
