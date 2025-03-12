'use client';

import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';

const formFields = [
  { name: 'name', label: 'Name', type: 'text', placeholder: 'John Doe' },
  { name: 'phone', label: 'Phone Number', type: 'text', placeholder: 'Phone' },
  { name: 'isAgency', label: 'Are you an agency?', type: 'text', placeholder: 'Yes/No' },
  { name: 'portfolio', label: 'Link to your portfolio', type: 'text', placeholder: 'Portfolio Link' },
  { name: 'teamSize', label: 'How big is your team?', type: 'text', placeholder: '5-10' },
  { name: 'adSpend', label: 'How much do you spend on ads a month?', type: 'text', placeholder: '$5000' },
  { name: 'message', label: "Anything you'd like to say?", type: 'textarea', placeholder: 'Message' },
];

export default function ContactForm() {
  const { register, handleSubmit, control, reset } = useForm();

  const onSubmit = async (data) => {
    try {
      await axios.post('/api/submit', data);
      alert('Form submitted successfully!');
      reset();
    } catch (error) {
      alert('Error submitting form!');
    }
  };

  return (
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
          Submit
        </button>
      </form>
    </div>
  );
}
