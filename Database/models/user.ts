import { Schema, model, connect } from 'mongoose';

interface IUser {
  IP: string;
  meta: string;
  id: string
}

const userSchema = new Schema<IUser>({
  IP: { type: String, required: true },
  meta: { type: String, required: true },
  id: { type: String, required: true },
});

// 3. Create a Model.
export const User = model<IUser>('User', userSchema);