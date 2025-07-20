'use client';

import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Mail, Phone, Calendar, Send, CheckCircle, MapPin } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  company: z.string().min(2, 'Company name is required'),
  role: z.string().min(2, 'Role/title is required'),
  employees: z.string().min(1, 'Please select company size'),
  arr: z.string().min(1, 'Please select ARR range'),
  currentAI: z.string().min(10, 'Please describe your current AI usage (at least 10 characters)'),
  goals: z.string().min(20, 'Please describe your goals (at least 20 characters)'),
  timeline: z.string().min(1, 'Please select your timeline'),
  budget: z.string().min(1, 'Please select your budget range'),
  message: z.string().optional()
});

type ContactFormData = z.infer<typeof contactSchema>;

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema)
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log('Form data:', data);
    setIsSubmitted(true);
    setIsSubmitting(false);
    reset();
  };

  if (isSubmitted) {
    return (
      <section id="contact" className="py-24 bg-gradient-to-br from-primary/5 to-secondary/5 dark:from-primary/10 dark:to-secondary/10">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-2xl mx-auto text-center"
          >
            <Card className="p-12">
              <div className="w-20 h-20 bg-gradient-to-r from-accent to-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl font-bold font-heading mb-4">Thank You!</h2>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
                Your consultation request has been received. We&apos;ll review your information and get back to you within 24 hours to schedule your free AI readiness assessment.
              </p>
              <Button 
                variant="outline" 
                onClick={() => setIsSubmitted(false)}
              >
                Submit Another Request
              </Button>
            </Card>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-primary/5 to-secondary/5 dark:from-primary/10 dark:to-secondary/10">
      <div className="container mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">
              Ready to Transform
              <br />
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Your Business with AI?
              </span>
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Schedule your free consultation to discuss how AI can accelerate your growth and streamline your operations.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <motion.div variants={fadeInUp} className="lg:col-span-1">
              <Card className="h-fit">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-primary" />
                    Let&apos;s Connect
                  </CardTitle>
                  <CardDescription>
                    Get started with a free 30-minute consultation to assess your AI readiness and discuss implementation strategies.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-primary" />
                    <div>
                      <div className="font-medium">Email</div>
                      <div className="text-sm text-slate-600 dark:text-slate-300">
                        hello@ai-operations-lead.com
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-primary" />
                    <div>
                      <div className="font-medium">Phone</div>
                      <div className="text-sm text-slate-600 dark:text-slate-300">
                        +1 (555) 123-4567
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-primary" />
                    <div>
                      <div className="font-medium">Location</div>
                      <div className="text-sm text-slate-600 dark:text-slate-300">
                        San Francisco, CA
                        <br />
                        (Remote consultations available)
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t">
                    <h4 className="font-medium mb-3">What to Expect:</h4>
                    <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                        Free 30-minute consultation call
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                        AI readiness assessment
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                        Custom implementation roadmap
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                        ROI projection and timeline
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={fadeInUp} className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Get Your Free AI Consultation</CardTitle>
                  <CardDescription>
                    Tell us about your business and AI goals. We&apos;ll create a custom implementation plan for your company.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Full Name *</label>
                        <Input
                          {...register('name')}
                          placeholder="John Doe"
                          className={errors.name ? 'border-red-500' : ''}
                        />
                        {errors.name && (
                          <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Email Address *</label>
                        <Input
                          {...register('email')}
                          type="email"
                          placeholder="john@company.com"
                          className={errors.email ? 'border-red-500' : ''}
                        />
                        {errors.email && (
                          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                        )}
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Company Name *</label>
                        <Input
                          {...register('company')}
                          placeholder="Acme Inc."
                          className={errors.company ? 'border-red-500' : ''}
                        />
                        {errors.company && (
                          <p className="text-red-500 text-sm mt-1">{errors.company.message}</p>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Your Role/Title *</label>
                        <Input
                          {...register('role')}
                          placeholder="CEO, CTO, VP of Operations"
                          className={errors.role ? 'border-red-500' : ''}
                        />
                        {errors.role && (
                          <p className="text-red-500 text-sm mt-1">{errors.role.message}</p>
                        )}
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Company Size *</label>
                        <select
                          {...register('employees')}
                          className={`w-full h-10 px-3 py-2 border rounded-lg bg-input text-sm ${errors.employees ? 'border-red-500' : 'border-input'}`}
                        >
                          <option value="">Select size</option>
                          <option value="1-10">1-10 employees</option>
                          <option value="11-25">11-25 employees</option>
                          <option value="26-50">26-50 employees</option>
                          <option value="51-100">51-100 employees</option>
                          <option value="100+">100+ employees</option>
                        </select>
                        {errors.employees && (
                          <p className="text-red-500 text-sm mt-1">{errors.employees.message}</p>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Annual Recurring Revenue *</label>
                        <select
                          {...register('arr')}
                          className={`w-full h-10 px-3 py-2 border rounded-lg bg-input text-sm ${errors.arr ? 'border-red-500' : 'border-input'}`}
                        >
                          <option value="">Select ARR</option>
                          <option value="< $500K">Less than $500K</option>
                          <option value="$500K - $1M">$500K - $1M</option>
                          <option value="$1M - $5M">$1M - $5M</option>
                          <option value="$5M - $10M">$5M - $10M</option>
                          <option value="$10M+">$10M+</option>
                        </select>
                        {errors.arr && (
                          <p className="text-red-500 text-sm mt-1">{errors.arr.message}</p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Current AI Usage *</label>
                      <Textarea
                        {...register('currentAI')}
                        placeholder="Describe any AI tools or workflows you're currently using..."
                        className={errors.currentAI ? 'border-red-500' : ''}
                        rows={3}
                      />
                      {errors.currentAI && (
                        <p className="text-red-500 text-sm mt-1">{errors.currentAI.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">AI Goals & Challenges *</label>
                      <Textarea
                        {...register('goals')}
                        placeholder="What specific business processes would you like to optimize with AI? What challenges are you facing?"
                        className={errors.goals ? 'border-red-500' : ''}
                        rows={4}
                      />
                      {errors.goals && (
                        <p className="text-red-500 text-sm mt-1">{errors.goals.message}</p>
                      )}
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Implementation Timeline *</label>
                        <select
                          {...register('timeline')}
                          className={`w-full h-10 px-3 py-2 border rounded-lg bg-input text-sm ${errors.timeline ? 'border-red-500' : 'border-input'}`}
                        >
                          <option value="">Select timeline</option>
                          <option value="ASAP">As soon as possible</option>
                          <option value="1-2 months">Within 1-2 months</option>
                          <option value="3-6 months">3-6 months</option>
                          <option value="6+ months">6+ months</option>
                          <option value="Just exploring">Just exploring options</option>
                        </select>
                        {errors.timeline && (
                          <p className="text-red-500 text-sm mt-1">{errors.timeline.message}</p>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Monthly Budget Range *</label>
                        <select
                          {...register('budget')}
                          className={`w-full h-10 px-3 py-2 border rounded-lg bg-input text-sm ${errors.budget ? 'border-red-500' : 'border-input'}`}
                        >
                          <option value="">Select budget</option>
                          <option value="< $5K">Less than $5,000</option>
                          <option value="$5K - $10K">$5,000 - $10,000</option>
                          <option value="$10K - $15K">$10,000 - $15,000</option>
                          <option value="$15K+">$15,000+</option>
                          <option value="To be discussed">To be discussed</option>
                        </select>
                        {errors.budget && (
                          <p className="text-red-500 text-sm mt-1">{errors.budget.message}</p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Additional Message</label>
                      <Textarea
                        {...register('message')}
                        placeholder="Any additional information you'd like to share..."
                        rows={3}
                      />
                    </div>

                    <Button 
                      type="submit" 
                      size="lg" 
                      variant="gradient" 
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        "Submitting..."
                      ) : (
                        <>
                          Get My Free Consultation
                          <Send className="ml-2 h-5 w-5" />
                        </>
                      )}
                    </Button>

                    <p className="text-sm text-slate-500 dark:text-slate-400 text-center">
                      We&apos;ll respond within 24 hours to schedule your consultation. 
                      <br />
                      No spam, no sales pressure—just valuable insights for your business.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}