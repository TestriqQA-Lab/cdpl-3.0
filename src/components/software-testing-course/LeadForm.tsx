'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import PhoneInput from 'react-phone-number-input';

const schema = z.object({
    name: z.string().min(2, 'Name must be at least 2 characters'),
    email: z.string().email('Invalid email'),
    phone: z.string().min(10, 'Valid phone required'),
    course: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

interface LeadFormProps {
    title?: string;
    subtitle?: string;
    buttonText?: string;
    showCourse?: boolean;
}

export default function LeadForm({
    title = "Book Your Free Demo Class",
    subtitle = "Get personalized career guidance in 5 minutes",
    buttonText = "Book Free Demo Now",
    showCourse = true
}: LeadFormProps) {
    const form = useForm<FormData>({
        resolver: zodResolver(schema),
        defaultValues: { name: '', email: '', phone: '', course: '' },
    });

    const onSubmit = async () => {
        await new Promise(r => setTimeout(r, 1500));
        alert('Thank you! We’ll call you in 2 hours.');
        form.reset();
    };

    return (
        <div>
            <h3 className="text-2xl font-bold mb-2">{title}</h3>
            <p className="text-gray-600 mb-6">{subtitle}</p>

            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                <input {...form.register('name')} placeholder="Full Name" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500" />
                {form.formState.errors.name && <p className="text-red-500 text-sm">{form.formState.errors.name.message}</p>}

                <input {...form.register('email')} type="email" placeholder="Email Address" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500" />
                {form.formState.errors.email && <p className="text-red-500 text-sm">{form.formState.errors.email.message}</p>}

                <PhoneInput
                    international
                    defaultCountry="IN"
                    value={form.watch('phone')}
                    onChange={(v) => form.setValue('phone', v || '')}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
                />

                {showCourse && (
                    <select {...form.register('course')} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500">
                        <option value="">Select Course</option>
                        <option>Full Stack Testing</option>
                        <option>Automation Testing</option>
                        <option>Manual + API Testing</option>
                    </select>
                )}

                <button
                    type="submit"
                    disabled={form.formState.isSubmitting}
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-xl text-lg transition"
                >
                    {form.formState.isSubmitting ? 'Submitting...' : buttonText}
                </button>
            </form>
        </div>
    );
}