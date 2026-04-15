
export class AuthService {
    async loginAction(prevState: any, formData: FormData) {
        const email = formData.get("email");
        const password = formData.get("password");

    
        await new Promise((resolve) => setTimeout(resolve, 1500));

        console.log("Form Submitted:", { email, password });

        if (!email || !password) {
            return { success: false, message: "Please fill in all fields." };
        }

        return { success: true, message: "Login successful!" };
    }
}