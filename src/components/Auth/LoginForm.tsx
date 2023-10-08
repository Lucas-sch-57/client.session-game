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
const Loginform = () => {
    const [error, setError] = useState<boolean>(false);
    const { login } = useUser();
    const loginFormSchema = z.object({
        email: z.string().email({ message: "Veuillez entrer une adresse email valide" }),
        password: z.string(),
    });

    const loginForm = useForm<z.infer<typeof loginFormSchema>>({
        resolver: zodResolver(loginFormSchema),
        defaultValues: {
            email: "",
            password: "",
        }
    })

    const onLoginFormSubmit = async (data: z.infer<typeof loginFormSchema>) => {
        login(data).then((res) => {
            setError(res !== 200);
        })
    }

    return (
        <Form {...loginForm}>
            {error && (
                <AlertBox message="Une erreur est survénue lors de la connexion veuillez réessayer" />
            )}
            <form onSubmit={loginForm.handleSubmit(onLoginFormSubmit)} className="space-y-8 p-10 border border-secondary-foreground w-full">
                <FormField
                    control={loginForm.control}
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
                    control={loginForm.control}
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
                <Button type="submit">Login</Button>
            </form>
        </Form>
    )
}

export default Loginform;