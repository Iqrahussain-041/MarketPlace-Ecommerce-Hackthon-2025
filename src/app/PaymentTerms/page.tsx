'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';

const PaymentTerms = () => {
  const [agreed, setAgreed] = useState(false);

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Payment Terms & Conditions</h2>
      <div className="h-64 overflow-y-auto p-4 border border-gray-200 rounded-md bg-gray-50">
        <p className="text-gray-600 mb-2">By making a purchase, you agree to the following terms:</p>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>We accept Credit/Debit Cards, PayPal, and Bank Transfers.</li>
          <li>Prices are subject to change without prior notice.</li>
          <li>Refunds follow our standard Refund Policy.</li>
          <li>Fraudulent transactions will be reported.</li>
          <li>Order confirmation is sent via email after a successful payment.</li>
        </ul>
      </div>
      <div className="mt-4 flex items-center">
        <input
          type="checkbox"
          id="agree"
          checked={agreed}
          onChange={() => setAgreed(!agreed)}
          className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
        />
        <label htmlFor="agree" className="ml-2 text-gray-700 text-sm">
          I have read and agree to the Payment Terms & Conditions
        </label>
      </div>
      <Button disabled={!agreed} className="mt-4 w-full bg-blue-600 text-white rounded-lg p-2 disabled:opacity-50">
        Proceed to Payment
      </Button>
    </div>
  );
};

export default PaymentTerms;
