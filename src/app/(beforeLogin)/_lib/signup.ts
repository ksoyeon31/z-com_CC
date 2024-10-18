"use server";
import { redirect } from "next/navigation";



export default async (prevState: any, formData: FormData) => {

    if (!formData.get('id')) {
        return { message: 'no_id' };
    }
    if (!formData.get('name')) {
        return { message: 'no_name' };
    }
    if (!formData.get('password')) {
        return { message: 'no_password' };
    }
    if (!formData.get('image')) {
        return { message: 'no_image' };
    }

    let shouldRedirect = false;
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api.users`, {
            method: 'post',
            body: formData,
            credentials: 'include',
            // 위의 코드가 있어야 쿠키가 전달이 됨
        })
        console.log(response.status);
        if (response.status === 403) {
            return { message: 'user_exists' }
        }
        console.log(await response.json())
        shouldRedirect = true;
    } catch (err) {
        console.error(err);
        return;
    }

    if (shouldRedirect) {
        redirect('/home'); // redirect문은 try/catch문 안에서 쓰면 x >> shouldRedirect 같은 변수 하나 만들어서 사용
        return undefined;
    }
}
