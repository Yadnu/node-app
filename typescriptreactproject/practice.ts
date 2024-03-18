interface user{
    id:string,
    firstName: string,
    email: string,
    password: string,
    age: number
}


type updatedUser = Pick<user, 'id' | 'firstName' | 'email'>;


type optionalUser = Partial<user>

function updateFunction(user: updatedUser){
    //Businesslogic
    return

}

import {z} from 'zod';

const body = z.object({
    name: z.string().optional(),
    password: z.string()
});
type updatedBody= z.infer<typeof body>;

