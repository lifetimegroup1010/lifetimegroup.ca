// src/components/InquiryForm.js
import React from 'react';

function InquiryForm() {
    return (
        <div className="inquiry-form">
            <h2>Inquiry Form</h2>
            <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSehg4S8PcLJBjhU4bwMMTbvFmcNW52Gn-2ZFHCQOCjPgRsC2w/viewform?embedded=true"
                width="640"
                height="1099"
                frameBorder="0"
                marginHeight="0"
                marginWidth="0"
            >
                Loading…
            </iframe>
        </div>
    );
}

export default InquiryForm;
