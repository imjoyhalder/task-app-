

'use client'

import { useActionState } from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { AuthService } from "@/services/auth.service"

export function LoginForm({ className, ...props }: React.ComponentProps<"div">) {
  
  const loginAction = new AuthService().loginAction.bind(new AuthService())
  const [state, formAction, isPending] = useActionState(loginAction, null)

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="overflow-hidden p-0">
        <CardContent className="grid p-0 md:grid-cols-2">
          
          <form action={formAction} className="p-6 md:p-8">
            <FieldGroup>
              <div className="flex flex-col items-center gap-2 text-center">
                <h1 className="text-2xl font-bold">Welcome back</h1>
                <p className="text-balance text-muted-foreground">
                  Login to your Acme Inc account
                </p>
              </div>
              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input
                  id="email"
                  name="email" 
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </Field>
              <Field>
                <div className="flex items-center">
                  <FieldLabel htmlFor="password">Password</FieldLabel>
                  <a href="#" className="ml-auto text-sm underline-offset-2 hover:underline">
                    Forgot your password?
                  </a>
                </div>
                <Input 
                  id="password" 
                  name="password" 
                  type="password" 
                  required 
                />
              </Field>
              <Field>
                {/* Button automatically shows loading state when isPending is true */}
                <Button type="submit" disabled={isPending}>
                  {isPending ? "Logging in..." : "Login"}
                </Button>
              </Field>

 
              {state?.message && (
                <p className={`text-center text-sm ${state.success ? 'text-green-600' : 'text-red-500'}`}>
                  {state.message}
                </p>
              )}

              
              
              <FieldDescription className="text-center">
                Don&apos;t have an account? <a href="#">Sign up</a>
              </FieldDescription>
            </FieldGroup>
          </form>
          {/* ... image block remains unchanged ... */}
          <div className="relative hidden bg-muted md:block">
            <img src="/placeholder.svg" alt="Image" className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale" />
          </div>
        </CardContent>
      </Card>
      {/* ... footer remains unchanged ... */}
    </div>
  )
}