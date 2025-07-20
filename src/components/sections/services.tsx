'use client';

import { motion } from 'framer-motion';
import { 
  Brain, 
  Cog, 
  Zap, 
  BarChart3, 
  Users, 
  Rocket,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const services = [
  {
    icon: Brain,
    title: "AI Strategy & Planning",
    description: "Weekly strategic sessions to identify high-impact AI opportunities and create actionable roadmaps.",
    features: [
      "AI readiness assessment",
      "ROI-focused opportunity mapping", 
      "Technology stack recommendations",
      "Implementation timeline planning"
    ]
  },
  {
    icon: Cog,
    title: "Workflow Implementation",
    description: "Hands-on development and deployment of AI-powered workflows that integrate seamlessly with your existing systems.",
    features: [
      "Custom AI workflow development",
      "System integration & automation",
      "Process optimization",
      "Quality assurance & testing"
    ]
  },
  {
    icon: BarChart3,
    title: "Performance Optimization",
    description: "Continuous monitoring and improvement of AI systems to maximize efficiency and business impact.",
    features: [
      "Performance monitoring dashboards",
      "A/B testing frameworks",
      "Cost optimization strategies",
      "Scalability planning"
    ]
  },
  {
    icon: Users,
    title: "Team Training & Support",
    description: "Upskill your team to confidently manage and extend AI implementations beyond our engagement.",
    features: [
      "Hands-on training sessions",
      "Documentation & best practices",
      "Ongoing technical support",
      "Knowledge transfer protocols"
    ]
  }
];

const valueProps = [
  {
    icon: Rocket,
    title: "Rapid Implementation",
    description: "See results in weeks, not months. Our proven frameworks accelerate time-to-value."
  },
  {
    icon: Zap,
    title: "Hands-On Approach",
    description: "We don't just advise—we build, deploy, and optimize AI solutions alongside your team."
  },
  {
    icon: BarChart3,
    title: "Measurable ROI",
    description: "Every implementation includes clear KPIs and performance metrics to track business impact."
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

export function Services() {
  return (
    <section id="services" className="py-24 bg-white dark:bg-slate-900">
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
                AI Implementation
              </span>
              <br />
              That Actually Works
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Weekly embedded consulting focused on hands-on implementation, not endless strategy sessions. 
              We build, deploy, and optimize AI workflows that drive real business results.
            </p>
          </motion.div>

          {/* Value Propositions */}
          <motion.div
            variants={fadeInUp}
            className="grid md:grid-cols-3 gap-8 mb-20"
          >
            {valueProps.map((prop, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="text-center p-6 rounded-xl bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-800 dark:to-slate-700"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-xl flex items-center justify-center mx-auto mb-4">
                  <prop.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold font-heading mb-3">{prop.title}</h3>
                <p className="text-slate-600 dark:text-slate-300">{prop.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Services Grid */}
          <motion.div
            variants={staggerContainer}
            className="grid lg:grid-cols-2 gap-8 mb-16"
          >
            {services.map((service, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-slate-200 dark:border-slate-700">
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center mb-4">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription className="text-base">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                          <span className="text-slate-600 dark:text-slate-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Process Overview */}
          <motion.div variants={fadeInUp} className="text-center">
            <h3 className="text-3xl font-bold font-heading mb-8">
              Our Weekly Engagement Process
            </h3>
            <div className="grid md:grid-cols-4 gap-6 mb-12">
              {[
                { step: "01", title: "Assess", description: "Analyze current AI readiness and identify opportunities" },
                { step: "02", title: "Plan", description: "Design implementation roadmap with clear milestones" },
                { step: "03", title: "Build", description: "Develop and deploy AI workflows with your team" },
                { step: "04", title: "Optimize", description: "Monitor performance and continuously improve results" }
              ].map((phase, index) => (
                <div key={index} className="relative">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">
                    {phase.step}
                  </div>
                  <h4 className="text-lg font-semibold mb-2">{phase.title}</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-300">{phase.description}</p>
                  {index < 3 && (
                    <ArrowRight className="hidden md:block absolute top-8 -right-3 w-6 h-6 text-slate-400" />
                  )}
                </div>
              ))}
            </div>
            
            <Button 
              size="lg" 
              variant="gradient"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Start Your AI Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}