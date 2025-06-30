import mongoose { Document, Schema } from 'mongoose';

export interface IUser extends Document {
    username: string;
    email: string;
    password: string;
    savedRecipes; mongoose.Types.ObjectId[];
}

const UserSchema: Schema<Iuser> = newSchema(
    {
        username: { type: String, required: true, unique: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        savedRecipes: [{ type: mongoose.Types.ObjectId, ref: 'Recipe' }],
    },
    {
        timestamps: true,  
    }
);

const User = mongoose.model<IUser>('User', UserSchema);

export default User;
