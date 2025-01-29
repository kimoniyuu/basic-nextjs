'use server'

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const createCamps = async(prevState:any, formData:FormData) => {
    // const title = formData.get('title');
    // const location = formData.get('location');
    await new Promise((resolve) =>setInterval(resolve, 1000));
    const rawData = Object.fromEntries(formData);

    console.log(rawData);
    // revalidatePath('/camps');
    // redirect('/');
    return 'createCamps success';
}

export const fetchCamps = async() => {
    //prisma.camp.findMany({});
    const camps = [
        {id:1, title: 'title1'},
        {id:2, title: 'title2'},
        {id:3, title: 'location3'},
    ]
    return camps;
}