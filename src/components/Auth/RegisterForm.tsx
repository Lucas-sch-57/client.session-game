import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input";
import { useForm } from 'react-hook-form';
import useUser from '@/hooks/useUser';
import { useState } from 'react';
import { AlertBox } from '../AlertBox';
const RegisterForm = () => {
    const [error, setError] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string>("");
    const { register } = useUser();
    const registerFormSchema = z.object({
        email: z.string().email({ message: "Veuillez entrer une adresse email valide" }),
        name: z.string(),
        first_name: z.string(),
        password: z.string().min(8, { message: "Le mot de passe doit contenir au moins 8 caractères" }).regex(/(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])/g, { message: "Le mot de passe doit contenir au moins une majuscule, une minuscule et un chiffre" })
    });

    const registerForm = useForm<z.infer<typeof registerFormSchema>>({
        resolver: zodResolver(registerFormSchema),
        defaultValues: {
            email: "",
            name: "",
            first_name: "",
            password: "",
        }
    })

    const onregisterFormSubmit = (data: z.infer<typeof registerFormSchema>) => {
        const registerData = register(data);
        registerData.then((res) => {
            if (res.status == 400) {
                res.json().then((resData) => {
                    setError(true);
                    setErrorMessage(resData.message);
                })
            }
        })
    }

    return (
        <Form {...registerForm}>
            {error && (
                <AlertBox message={errorMessage} type='error' />
            )}
            <form onSubmit={registerForm.handleSubmit(onregisterFormSubmit)} className="space-y-8 p-10 border border-accent-foreground w-full drop-shadow-lg">
                <FormField
                    control={registerForm.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input placeholder="example@example.fr" {...field} className='bg-foreground border-primary' />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={registerForm.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Nom</FormLabel>
                            <FormControl>
                                <Input placeholder="Nom..." {...field} className='bg-foreground border-primary' />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={registerForm.control}
                    name="first_name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Prénom</FormLabel>
                            <FormControl>
                                <Input placeholder="Prénom..." {...field} className='bg-foreground border-primary' />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={registerForm.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <Input type="password" placeholder="********" {...field} className='bg-foreground border-primary' />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit">S'inscrire</Button>
            </form>
        </Form>
    )
}

export default RegisterForm;