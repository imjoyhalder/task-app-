"use client"
import { FormEvent, useState } from "react";
import { Label } from "./label";

export default function BasicForm() {
    const [formData, setFormData] = useState({ email: "", password: "" })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target 
        setFormData({ ...formData, [name]: value })
    }

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault(); 
        console.log("Form submitted with data: ", formData);
    }

    return (
        // Fix: Call handleSubmit directly as a reference
        <form onSubmit={handleSubmit}>
            <Label>Login Form</Label>
            
            <Label htmlFor="email">Email: </Label>
            <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
            />
            
            <Label htmlFor="password">Password: </Label>
            {/* Fix: Self-closing tag */}
            <input
                id="password"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
            />
            
            <button type="submit">Submit</button>
        </form>
    )
}