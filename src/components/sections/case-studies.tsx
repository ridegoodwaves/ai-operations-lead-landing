'use client';

import { motion } from 'framer-motion';
import { Quote, TrendingUp, Clock, DollarSign, Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const caseStudies = [
  {
    company: "TechFlow SaaS",
    industry: "B2B Software",
    employees: "45",
    arr: "$2.1M",
    challenge: "Manual customer support workflows consuming 40% of team resources",
    solution: "Implemented AI-powered ticket routing and automated response system",
    results: [
      { metric: "Support Efficiency", value: "+180%", icon: TrendingUp },
      { metric: "Response Time", value: "-75%", icon: Clock },
      { metric: "Cost Savings", value: "$125K/year", icon: DollarSign }
    ],
    testimonial: "The AI workflows we built together transformed our customer support from a cost center into a competitive advantage. Response times dropped from hours to minutes, and our team can now focus on complex customer issues instead of routine inquiries.",
    author: "Sarah Chen",
    title: "VP of Customer Success",
    avatar: "SC"
  },
  {
    company: "DataVault Analytics",
    industry: "Data Analytics",
    employees: "32",
    arr: "$1.8M",
    challenge: "Time-intensive data processing bottlenecks limiting client delivery speed",
    solution: "Built automated data pipeline with AI-driven quality checks and insights generation",
    results: [
      { metric: "Processing Speed", value: "+250%", icon: TrendingUp },
      { metric: "Error Reduction", value: "-90%", icon: Clock },
      { metric: "Revenue Growth", value: "+65%", icon: DollarSign }
    ],
    testimonial: "Our AI-powered data pipeline is a game-changer. We went from delivering insights in weeks to delivering them in days. This speed advantage helped us close deals we couldn't compete for before.",
    author: "Marcus Rodriguez",
    title: "CTO & Co-founder",
    avatar: "MR"
  },
  {
    company: "GrowthLab Marketing",
    industry: "Digital Marketing",
    employees: "28",
    arr: "$1.5M",
    challenge: "Inconsistent content quality and slow campaign optimization cycles",
    solution: "Developed AI content optimization system with automated A/B testing framework",
    results: [
      { metric: "Content Output", value: "+300%", icon: TrendingUp },
      { metric: "Campaign ROI", value: "+85%", icon: DollarSign },
      { metric: "Optimization Speed", value: "-60%", icon: Clock }
    ],
    testimonial: "The AI system doesn't just generate content—it learns what works for each client and continuously improves performance. Our clients are seeing results they've never experienced before.",
    author: "Jessica Park",
    title: "Head of Strategy",
    avatar: "JP"
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
      staggerChildren: 0.2
    }
  }
};

export function CaseStudies() {
  return (
    <section id="case-studies" className="py-24 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">
              Real Results from
              <br />
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Real Companies
              </span>
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              See how growth-stage companies are transforming their operations with hands-on AI implementation.
            </p>
          </motion.div>

          {/* Case Studies */}
          <div className="space-y-12">
            {caseStudies.map((study, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="overflow-hidden border-slate-200 dark:border-slate-700 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-0">
                    <div className="grid lg:grid-cols-2 gap-0">
                      {/* Company Info & Results */}
                      <div className="p-8 lg:p-12 bg-white dark:bg-slate-800">
                        <div className="flex items-center gap-4 mb-6">
                          <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center text-white font-bold">
                            {study.company.charAt(0)}
                          </div>
                          <div>
                            <h3 className="text-xl font-bold font-heading">{study.company}</h3>
                            <p className="text-slate-600 dark:text-slate-300">{study.industry} • {study.employees} employees • {study.arr} ARR</p>
                          </div>
                        </div>

                        <div className="mb-6">
                          <h4 className="font-semibold text-lg mb-2">Challenge</h4>
                          <p className="text-slate-600 dark:text-slate-300 mb-4">{study.challenge}</p>
                          
                          <h4 className="font-semibold text-lg mb-2">Solution</h4>
                          <p className="text-slate-600 dark:text-slate-300">{study.solution}</p>
                        </div>

                        {/* Results */}
                        <div className="grid grid-cols-3 gap-4">
                          {study.results.map((result, resultIndex) => (
                            <div key={resultIndex} className="text-center p-4 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-700 dark:to-slate-600 rounded-lg">
                              <result.icon className="w-6 h-6 text-accent mx-auto mb-2" />
                              <div className="text-2xl font-bold text-accent">{result.value}</div>
                              <div className="text-xs text-slate-600 dark:text-slate-300">{result.metric}</div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Testimonial */}
                      <div className="p-8 lg:p-12 bg-gradient-to-br from-primary/5 to-secondary/5 dark:from-primary/10 dark:to-secondary/10 flex flex-col justify-center">
                        <Quote className="w-8 h-8 text-primary mb-4" />
                        <blockquote className="text-lg leading-relaxed mb-6 text-slate-700 dark:text-slate-200">
                          &ldquo;{study.testimonial}&rdquo;
                        </blockquote>
                        
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold">
                            {study.avatar}
                          </div>
                          <div>
                            <div className="font-semibold">{study.author}</div>
                            <div className="text-slate-600 dark:text-slate-300">{study.title}</div>
                          </div>
                        </div>

                        {/* Star Rating */}
                        <div className="flex gap-1 mt-4">
                          {[...Array(5)].map((_, starIndex) => (
                            <Star key={starIndex} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Stats Section */}
          <motion.div variants={fadeInUp} className="mt-20 text-center">
            <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {[
                { number: "50+", label: "AI Workflows Deployed", color: "from-primary to-blue-600" },
                { number: "180%", label: "Average Efficiency Gain", color: "from-secondary to-cyan-500" },
                { number: "$2.5M", label: "Total Cost Savings", color: "from-accent to-green-500" },
                { number: "98%", label: "Client Satisfaction", color: "from-purple-500 to-pink-500" }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className={`text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                    {stat.number}
                  </div>
                  <div className="text-slate-600 dark:text-slate-300 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}