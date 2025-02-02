'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';

const PrivacyPolicy = () => {
  const [agreed, setAgreed] = useState(false);

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Privacy Policy</h2>
      <div className="h-64 overflow-y-auto p-4 border border-gray-200 rounded-md bg-gray-50">
        <p className="text-gray-600 mb-2">Your privacy is important to us. This Privacy Policy outlines how we collect, use, and protect your information.</p>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>We collect personal information such as name, email, and payment details for order processing.</li>
          <li>Your information is securely stored and not shared with third parties without consent.</li>
          <li>Cookies may be used to enhance user experience.</li>
          <li>You can request data deletion at any time by contacting support.</li>
          <li>Policy updates will be communicated via email or website notification.</li>
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
          I have read and agree to the Privacy Policy
        </label>
      </div>
      <Button disabled={!agreed} className="mt-4 w-full bg-blue-600 text-white rounded-lg p-2 disabled:opacity-50">
        Accept & Continue
      </Button>
    </div>
  );
};

export default PrivacyPolicy;
