"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { STAGGER_CONTAINER, STAGGER_ITEM } from "@/lib/constants";

export default function OnboardingFormSection() {
  const [formData, setFormData] = useState({
    businessName: "",
    businessType: "",
    whatsappNumber: "",
    services: "",
    pricing: "",
    businessHours: "",
    commonQuestions: "",
    bookingProcess: "",
    bookingRules: "",
    responseRules: "",
    escalationRules: "",
    toneAndStyle: "",
    prohibitedTopics: "",
    additionalInfo: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Format form data for WhatsApp message
    const message = `
*New Automation Setup Request*

*Business Information:*
Business Name: ${formData.businessName}
Business Type: ${formData.businessType}
WhatsApp Number: ${formData.whatsappNumber}

*Services:*
${formData.services}

*Pricing:*
${formData.pricing || 'Not provided'}

*Business Hours:*
${formData.businessHours}

*Common Questions:*
${formData.commonQuestions || 'Not provided'}

*Booking Process:*
${formData.bookingProcess}

*Chatbot Behavior & Rules:*

*Booking Rules:*
${formData.bookingRules || 'Not provided'}

*Response Rules:*
${formData.responseRules || 'Not provided'}

*Escalation Rules:*
${formData.escalationRules || 'Not provided'}

*Tone & Style:*
${formData.toneAndStyle || 'Not provided'}

*Prohibited Topics:*
${formData.prohibitedTopics || 'Not provided'}

*Additional Info:*
${formData.additionalInfo || 'Not provided'}
    `.trim();

    // Send to WhatsApp
    const whatsappNumber = '6287809998198';
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="onboarding" className="py-24 md:py-32 border-t border-border bg-background">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={STAGGER_CONTAINER}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {/* Header */}
          <motion.div variants={STAGGER_ITEM} className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground mb-4">
              Get Started with Automation
            </h2>
            <p className="text-lg text-muted-foreground">
              Fill out this form so we can understand your business and set up your automation system.
            </p>
          </motion.div>

          {/* Form */}
          <motion.form
            variants={STAGGER_ITEM}
            onSubmit={handleSubmit}
            className="space-y-6 bg-card p-6 sm:p-8 rounded-2xl border border-border"
          >
            {/* Business Name */}
            <div>
              <label htmlFor="businessName" className="block text-sm font-medium text-foreground mb-2">
                Business Name *
              </label>
              <input
                type="text"
                id="businessName"
                name="businessName"
                required
                value={formData.businessName}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-foreground/20"
                placeholder="e.g., Salon Cantik"
              />
            </div>

            {/* Business Type */}
            <div>
              <label htmlFor="businessType" className="block text-sm font-medium text-foreground mb-2">
                Business Type *
              </label>
              <select
                id="businessType"
                name="businessType"
                required
                value={formData.businessType}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-foreground/20"
              >
                <option value="">Select your business type</option>
                <option value="clinic">Clinic / Medical</option>
                <option value="salon">Salon / Beauty</option>
                <option value="property">Property Agent</option>
                <option value="workshop">Workshop / Repair</option>
                <option value="ecommerce">E-commerce</option>
                <option value="professional">Professional Services</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* WhatsApp Number */}
            <div>
              <label htmlFor="whatsappNumber" className="block text-sm font-medium text-foreground mb-2">
                WhatsApp Business Number *
              </label>
              <input
                type="tel"
                id="whatsappNumber"
                name="whatsappNumber"
                required
                value={formData.whatsappNumber}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-foreground/20"
                placeholder="e.g., +62 812 3456 7890"
              />
            </div>

            {/* Services */}
            <div>
              <label htmlFor="services" className="block text-sm font-medium text-foreground mb-2">
                Services You Offer *
              </label>
              <textarea
                id="services"
                name="services"
                required
                value={formData.services}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-foreground/20 resize-none"
                placeholder="List your main services, one per line&#10;e.g.,&#10;- Haircut&#10;- Hair coloring&#10;- Manicure"
              />
            </div>

            {/* Pricing */}
            <div>
              <label htmlFor="pricing" className="block text-sm font-medium text-foreground mb-2">
                Pricing Information
              </label>
              <textarea
                id="pricing"
                name="pricing"
                value={formData.pricing}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-foreground/20 resize-none"
                placeholder="List your prices&#10;e.g.,&#10;- Haircut: Rp 50,000&#10;- Hair coloring: Rp 200,000"
              />
            </div>

            {/* Business Hours */}
            <div>
              <label htmlFor="businessHours" className="block text-sm font-medium text-foreground mb-2">
                Business Hours *
              </label>
              <textarea
                id="businessHours"
                name="businessHours"
                required
                value={formData.businessHours}
                onChange={handleChange}
                rows={3}
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-foreground/20 resize-none"
                placeholder="e.g.,&#10;Monday-Friday: 9 AM - 6 PM&#10;Saturday: 9 AM - 3 PM&#10;Sunday: Closed"
              />
            </div>

            {/* Common Questions */}
            <div>
              <label htmlFor="commonQuestions" className="block text-sm font-medium text-foreground mb-2">
                Common Customer Questions
              </label>
              <textarea
                id="commonQuestions"
                name="commonQuestions"
                value={formData.commonQuestions}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-foreground/20 resize-none"
                placeholder="What questions do customers ask most often?&#10;e.g.,&#10;- Do you accept walk-ins?&#10;- What payment methods do you accept?&#10;- Do you have parking?"
              />
            </div>

            {/* Booking Process */}
            <div>
              <label htmlFor="bookingProcess" className="block text-sm font-medium text-foreground mb-2">
                How do customers currently book? *
              </label>
              <textarea
                id="bookingProcess"
                name="bookingProcess"
                required
                value={formData.bookingProcess}
                onChange={handleChange}
                rows={3}
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-foreground/20 resize-none"
                placeholder="Describe your current booking process"
              />
            </div>

            {/* Business Rules & Logic Section */}
            <div className="pt-6 border-t border-border">
              <h3 className="text-lg font-semibold text-foreground mb-4">Chatbot Behavior & Rules</h3>
              <p className="text-sm text-muted-foreground mb-6">
                Define how the chatbot should behave and respond to customers
              </p>
            </div>

            {/* Booking Rules */}
            <div>
              <label htmlFor="bookingRules" className="block text-sm font-medium text-foreground mb-2">
                Booking Rules & Restrictions
              </label>
              <textarea
                id="bookingRules"
                name="bookingRules"
                value={formData.bookingRules}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-foreground/20 resize-none"
                placeholder="e.g.,&#10;- Minimum 24 hours advance booking&#10;- No same-day appointments on weekends&#10;- Maximum 2 appointments per customer per week&#10;- Require deposit for bookings over Rp 500,000"
              />
            </div>

            {/* Response Rules */}
            <div>
              <label htmlFor="responseRules" className="block text-sm font-medium text-foreground mb-2">
                Response Rules & Guidelines
              </label>
              <textarea
                id="responseRules"
                name="responseRules"
                value={formData.responseRules}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-foreground/20 resize-none"
                placeholder="e.g.,&#10;- Always greet with business name&#10;- Ask for customer name before booking&#10;- Confirm booking details before finalizing&#10;- Send reminder 1 day before appointment"
              />
            </div>

            {/* Escalation Rules */}
            <div>
              <label htmlFor="escalationRules" className="block text-sm font-medium text-foreground mb-2">
                When to Transfer to Human
              </label>
              <textarea
                id="escalationRules"
                name="escalationRules"
                value={formData.escalationRules}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-foreground/20 resize-none"
                placeholder="e.g.,&#10;- Customer requests refund&#10;- Complaint about service quality&#10;- Special requests not in standard services&#10;- Customer asks to speak to manager"
              />
            </div>

            {/* Tone and Style */}
            <div>
              <label htmlFor="toneAndStyle" className="block text-sm font-medium text-foreground mb-2">
                Chatbot Tone & Communication Style
              </label>
              <textarea
                id="toneAndStyle"
                name="toneAndStyle"
                value={formData.toneAndStyle}
                onChange={handleChange}
                rows={3}
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-foreground/20 resize-none"
                placeholder="e.g.,&#10;- Friendly and professional&#10;- Use emojis sparingly&#10;- Address customers as 'Kak' or 'Bapak/Ibu'&#10;- Keep responses concise"
              />
            </div>

            {/* Prohibited Topics */}
            <div>
              <label htmlFor="prohibitedTopics" className="block text-sm font-medium text-foreground mb-2">
                Topics to Avoid / Not Handle
              </label>
              <textarea
                id="prohibitedTopics"
                name="prohibitedTopics"
                value={formData.prohibitedTopics}
                onChange={handleChange}
                rows={3}
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-foreground/20 resize-none"
                placeholder="e.g.,&#10;- Medical advice (for salons)&#10;- Price negotiations&#10;- Competitor comparisons"
              />
            </div>

            {/* Additional Info */}
            <div>
              <label htmlFor="additionalInfo" className="block text-sm font-medium text-foreground mb-2">
                Additional Information
              </label>
              <textarea
                id="additionalInfo"
                name="additionalInfo"
                value={formData.additionalInfo}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-foreground/20 resize-none"
                placeholder="Anything else we should know about your business?"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full bg-foreground text-background hover:bg-foreground/90 px-6 py-4 rounded-xl font-semibold transition-all text-base shadow-lg hover:shadow-xl"
              >
                Submit & Start Automation Setup
              </button>

              <p className="text-sm text-muted-foreground text-center mt-4">
                We'll review your information and contact you within 24 hours to set up your system.
              </p>
            </div>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
}
