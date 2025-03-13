'use client';

import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';

const formFields = [
  { name: 'brandName', label: 'Brand Name', type: 'text', placeholder: 'Acme Inc.' },
  { name: 'phone', label: 'Phone Number', type: 'text', placeholder: 'Phone' },
  { name: 'revenue', label: 'Revenue', type: 'text', placeholder: '$10k' },
  { name: 'adSpend', label: 'How much do you spend on ads a month?', type: 'text', placeholder: '$2000' },
  { name: 'message', label: "Anything you'd like to say?", type: 'textarea', placeholder: 'Message' },
];

export default function ContactForm() {
  const { register, handleSubmit, control, reset } = useForm();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = (data) => {
    setIsSubmitted(true); // Instantly show success message
    reset(); // Clear form
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      {isSubmitted ? (
        // 🎉 Success Message
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md text-center">
          <h2 className="text-3xl font-bold text-purple-600 mb-4">🎉 Congratulations!</h2>

          <div className="flex justify-center items-center w-16 h-16 mx-auto mb-4 bg-purple-600 text-white rounded-full text-3xl">
            ✔
          </div>

          <h2 className="text-2xl font-bold text-gray-900">Thank you for reaching out!</h2>
          <p className="text-gray-500 mb-6">We have received your details. Our team will contact you soon.</p>

          <button 
            className="w-full bg-purple-600 text-white p-3 rounded-md font-semibold hover:bg-purple-700 transition-all"
            onClick={() => setIsSubmitted(false)}
          >
            Submit Another Response
          </button>
        </div>
      ) : (
        // 📝 Contact Form
        <div className="max-w-2xl mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              {formFields.map((field) => (
                <div key={field.name} className="flex flex-col">
                  <label className="block text-gray-700 font-medium mb-1">{field.label}</label>
                  {field.type === 'textarea' ? (
                    <Controller
                      name={field.name}
                      control={control}
                      render={({ field }) => (
                        <textarea
                          {...field}
                          className="w-full px-3 py-2 border border-gray-600 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder={field.placeholder}
                        />
                      )}
                    />
                  ) : (
                    <input
                      type={field.type}
                      {...register(field.name)}
                      className="w-full px-3 py-2 border border-gray-600 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder={field.placeholder}
                    />
                  )}
                </div>
              ))}
            </div>
            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition"
            >
              Continue
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
