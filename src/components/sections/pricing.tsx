'use client';

import { motion } from 'framer-motion';
import { Check, ArrowRight, Calendar, Users, Zap, Star } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const pricingFeatures = [
  "Weekly 4-hour embedded consulting sessions",
  "Hands-on AI workflow development & deployment", 
  "Custom automation & system integration",
  "Performance monitoring & optimization",
  "Team training & knowledge transfer",
  "24/7 technical support & troubleshooting",
  "Monthly strategic planning sessions",
  "ROI tracking & performance reporting",
  "Access to proprietary AI frameworks",
  "Priority feature requests & customizations"
];

const additionalServices = [
  {
    title: "AI Readiness Assessment",
    description: "Comprehensive audit of your current systems and AI implementation opportunities",
    price: "$2,500",
    duration: "One-time"
  },
  {
    title: "Team Training Workshop",
    description: "Full-day intensive training for your team on AI tools and best practices",
    price: "$5,000",
    duration: "Per workshop"
  },
  {
    title: "Custom AI Model Development",
    description: "Bespoke AI model development for unique business requirements",
    price: "$15,000+",
    duration: "Project-based"
  }
];

const faqs = [
  {
    question: "What&apos;s included in the weekly sessions?",
    answer: "Each 4-hour session includes hands-on development work, system integration, performance optimization, and strategic planning. We work directly with your team to implement and refine AI workflows."
  },
  {
    question: "How quickly will we see results?",
    answer: "Most clients see initial results within 2-3 weeks. Significant improvements typically manifest within the first month as we implement and optimize your first AI workflows."
  },
  {
    question: "What if we need more than 4 hours per week?",
    answer: "We can scale up to additional sessions as needed. Many clients start with our standard package and expand based on project requirements and results."
  },
  {
    question: "Do you work with our existing tools?",
    answer: "Absolutely. We integrate with your current tech stack and work within your existing workflows. Our goal is to enhance what you have, not replace it."
  }
];

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

export function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-white dark:bg-slate-900">
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
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Simple, Transparent
              </span>
              <br />
              Pricing
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              One straightforward retainer that includes everything you need to transform your business with AI.
            </p>
          </motion.div>

          {/* Main Pricing Card */}
          <motion.div variants={fadeInUp} className="mb-16">
            <Card className="relative overflow-hidden border-2 border-primary/20 shadow-2xl">
              {/* Popular badge */}
              <div className="absolute top-0 right-8 bg-gradient-to-r from-primary to-secondary text-white px-6 py-2 rounded-b-lg text-sm font-medium">
                Most Popular
              </div>
              
              <CardHeader className="text-center pb-8 pt-12">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-3xl font-heading mb-2">
                  Fractional AI Operations Lead
                </CardTitle>
                <CardDescription className="text-lg">
                  Weekly embedded consulting for growth-stage companies
                </CardDescription>
                
                <div className="flex items-baseline justify-center gap-2 mt-8">
                  <span className="text-5xl font-bold font-heading">$10,000</span>
                  <span className="text-xl text-slate-600 dark:text-slate-300">/month</span>
                </div>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
                  Billed monthly • Cancel anytime after 3 months
                </p>
              </CardHeader>

              <CardContent className="px-8 pb-8">
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Features */}
                  <div>
                    <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
                      <Check className="w-5 h-5 text-accent" />
                      What&apos;s Included
                    </h4>
                    <ul className="space-y-3">
                      {pricingFeatures.map((feature, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                          <span className="text-slate-600 dark:text-slate-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Key Benefits */}
                  <div>
                    <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
                      <Star className="w-5 h-5 text-accent" />
                      Key Benefits
                    </h4>
                    <div className="space-y-4">
                      <div className="p-4 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg">
                        <div className="flex items-center gap-3 mb-2">
                          <Calendar className="w-5 h-5 text-primary" />
                          <span className="font-medium">Weekly Sessions</span>
                        </div>
                        <p className="text-sm text-slate-600 dark:text-slate-300">
                          Consistent progress with regular check-ins and hands-on development
                        </p>
                      </div>
                      
                      <div className="p-4 bg-gradient-to-r from-accent/5 to-primary/5 rounded-lg">
                        <div className="flex items-center gap-3 mb-2">
                          <Users className="w-5 h-5 text-accent" />
                          <span className="font-medium">Embedded Approach</span>
                        </div>
                        <p className="text-sm text-slate-600 dark:text-slate-300">
                          Work directly with your team, not as an external consultant
                        </p>
                      </div>
                      
                      <div className="p-4 bg-gradient-to-r from-secondary/5 to-accent/5 rounded-lg">
                        <div className="flex items-center gap-3 mb-2">
                          <Zap className="w-5 h-5 text-secondary" />
                          <span className="font-medium">Immediate Impact</span>
                        </div>
                        <p className="text-sm text-slate-600 dark:text-slate-300">
                          See results within weeks, not months of planning
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 text-center">
                  <Button 
                    size="xl" 
                    variant="gradient" 
                    className="w-full md:w-auto"
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Start Your AI Transformation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-4">
                    Free consultation • No setup fees • 3-month minimum commitment
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Additional Services */}
          <motion.div variants={fadeInUp} className="mb-16">
            <h3 className="text-2xl font-bold font-heading text-center mb-8">
              Additional Services
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {additionalServices.map((service, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-primary mb-2">{service.price}</div>
                    <div className="text-sm text-slate-500 dark:text-slate-400">{service.duration}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>

          {/* FAQ Section */}
          <motion.div variants={fadeInUp}>
            <h3 className="text-2xl font-bold font-heading text-center mb-8">
              Frequently Asked Questions
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {faqs.map((faq, index) => (
                <Card key={index} className="p-6">
                  <h4 className="font-semibold mb-3">{faq.question}</h4>
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </Card>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}