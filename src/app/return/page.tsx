'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea'; // Ensure this path is correct or update it to the correct path

const ReturnPage = () => {
  const [formData, setFormData] = useState({
    orderId: '',
    reason: '',
    agreed: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target as HTMLInputElement | HTMLTextAreaElement;
    const checked = (e.target as HTMLInputElement).checked;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.agreed) return;
    alert('Return request submitted successfully!');
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Return Request</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">Order ID</label>
          <Input
            type="text"
            name="orderId"
            value={formData.orderId}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">Reason for Return</label>
          <Textarea
            name="reason"
            value={formData.reason}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            name="agreed"
            checked={formData.agreed}
            onChange={handleChange}
            className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
          />
          <label className="ml-2 text-gray-700 text-sm">
            I have read and agree to the Returns & Refund Policy
          </label>
        </div>
        <Button
          type="submit"
          disabled={!formData.agreed}
          className="w-full bg-blue-600 text-white rounded-lg p-2 disabled:opacity-50"
        >
          Submit Return Request
        </Button>
      </form>
    </div>
  );
};

export default ReturnPage;