"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ChevronRight,
  ChevronLeft,
  Sparkles,
  CheckCircle,
} from "lucide-react";
import Button from "@/components/ui/Button";

interface QuizProps {
  isOpen: boolean;
  onClose: () => void;
}

const questions = [
  {
    id: 1,
    question: "What is your primary skin concern?",
    options: [
      { value: "aging", label: "Fine lines & wrinkles", icon: "🌟" },
      { value: "acne", label: "Acne & breakouts", icon: "✨" },
      { value: "pigmentation", label: "Dark spots & uneven tone", icon: "🎨" },
      { value: "texture", label: "Rough texture & pores", icon: "💎" },
      { value: "volume", label: "Volume loss & sagging", icon: "🌸" },
    ],
  },
  {
    id: 2,
    question: "How would you describe your skin type?",
    options: [
      { value: "dry", label: "Dry - Often feels tight", icon: "🏜️" },
      { value: "oily", label: "Oily - Shiny by midday", icon: "💧" },
      { value: "combination", label: "Combination - Mixed zones", icon: "⚖️" },
      { value: "sensitive", label: "Sensitive - Easily irritated", icon: "🌿" },
      { value: "normal", label: "Normal - Balanced", icon: "😊" },
    ],
  },
  {
    id: 3,
    question: "What's your age range?",
    options: [
      { value: "20s", label: "20-29", icon: "💫" },
      { value: "30s", label: "30-39", icon: "⭐" },
      { value: "40s", label: "40-49", icon: "✨" },
      { value: "50s", label: "50-59", icon: "🌟" },
      { value: "60+", label: "60+", icon: "💎" },
    ],
  },
  {
    id: 4,
    question: "How much downtime can you accommodate?",
    options: [
      { value: "none", label: "None - Back to routine immediately", icon: "⚡" },
      { value: "minimal", label: "1-2 days", icon: "📅" },
      { value: "moderate", label: "3-5 days", icon: "🗓️" },
      { value: "extended", label: "1 week or more", icon: "🏖️" },
    ],
  },
  {
    id: 5,
    question: "What's your budget range for treatments?",
    options: [
      { value: "budget", label: "Under $500", icon: "💰" },
      { value: "moderate", label: "$500 - $1,500", icon: "💵" },
      { value: "premium", label: "$1,500 - $3,000", icon: "💎" },
      { value: "luxury", label: "$3,000+", icon: "👑" },
    ],
  },
];

const getRecommendations = (answers: Record<number, string>) => {
  const recommendations = [];

  // Based on primary concern
  if (answers[1] === "aging") {
    recommendations.push({
      name: "Botox & Dysport",
      match: 95,
      description: "Smooth fine lines and prevent new wrinkles",
    });
    recommendations.push({
      name: "Dermal Fillers",
      match: 90,
      description: "Restore volume and youthful contours",
    });
  }

  if (answers[1] === "acne") {
    recommendations.push({
      name: "HydraFacial",
      match: 95,
      description: "Deep cleanse and clear congested pores",
    });
    recommendations.push({
      name: "Chemical Peels",
      match: 88,
      description: "Reduce breakouts and improve clarity",
    });
  }

  if (answers[1] === "pigmentation") {
    recommendations.push({
      name: "IPL Treatment",
      match: 92,
      description: "Target and fade dark spots",
    });
    recommendations.push({
      name: "Chemical Peels",
      match: 85,
      description: "Even skin tone and brighten complexion",
    });
  }

  if (answers[1] === "texture") {
    recommendations.push({
      name: "Microneedling with PRP",
      match: 94,
      description: "Refine texture and minimize pores",
    });
    recommendations.push({
      name: "Laser Resurfacing",
      match: 88,
      description: "Smooth skin and boost collagen",
    });
  }

  if (answers[1] === "volume") {
    recommendations.push({
      name: "Dermal Fillers",
      match: 96,
      description: "Restore volume and lift sagging areas",
    });
    recommendations.push({
      name: "PRP Therapy",
      match: 82,
      description: "Natural rejuvenation and skin tightening",
    });
  }

  // Add HydraFacial as a universal recommendation
  if (!recommendations.find((r) => r.name === "HydraFacial")) {
    recommendations.push({
      name: "HydraFacial",
      match: 85,
      description: "Universal skin health and hydration",
    });
  }

  return recommendations.slice(0, 3);
};

export default function VirtualConsultationQuiz({ isOpen, onClose }: QuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResults, setShowResults] = useState(false);
  const [email, setEmail] = useState("");

  const handleAnswer = (value: string) => {
    setAnswers((prev) => ({ ...prev, [questions[currentQuestion].id]: value }));

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      setShowResults(true);
    }
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1);
    }
  };

  const handleReset = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResults(false);
    setEmail("");
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const recommendations = getRecommendations(answers);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="relative bg-white rounded-3xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-[#2C2C2C]/60 hover:text-[#2C2C2C] transition-colors z-10"
          aria-label="Close"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Header */}
        <div className="bg-gradient-to-r from-[#B76E79] to-[#D4A5A5] p-6 text-white">
          <div className="flex items-center gap-3 mb-2">
            <Sparkles className="w-6 h-6" />
            <h2 className="text-2xl font-display font-bold">
              {showResults ? "Your Personalized Recommendations" : "Skin Assessment Quiz"}
            </h2>
          </div>
          <p className="text-white/80 text-sm">
            {showResults
              ? "Based on your answers, here are treatments tailored for you"
              : "Answer a few questions to discover your ideal treatments"}
          </p>
        </div>

        {/* Progress Bar */}
        {!showResults && (
          <div className="px-6 pt-4">
            <div className="flex justify-between text-sm text-[#2C2C2C]/60 mb-2">
              <span>
                Question {currentQuestion + 1} of {questions.length}
              </span>
              <span>{Math.round(progress)}% complete</span>
            </div>
            <div className="h-2 bg-[#D4A5A5]/20 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                className="h-full bg-gradient-to-r from-[#B76E79] to-[#D4A5A5]"
              />
            </div>
          </div>
        )}

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[50vh]">
          <AnimatePresence mode="wait">
            {!showResults ? (
              <motion.div
                key={currentQuestion}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <h3 className="text-xl font-display font-semibold text-[#2C2C2C] mb-6">
                  {questions[currentQuestion].question}
                </h3>

                <div className="space-y-3">
                  {questions[currentQuestion].options.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => handleAnswer(option.value)}
                      className={`w-full p-4 rounded-xl text-left transition-all flex items-center gap-4 ${
                        answers[questions[currentQuestion].id] === option.value
                          ? "bg-[#B76E79] text-white"
                          : "bg-[#FFFFF0] hover:bg-[#D4A5A5]/20 text-[#2C2C2C]"
                      }`}
                    >
                      <span className="text-2xl">{option.icon}</span>
                      <span className="font-medium">{option.label}</span>
                    </button>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                {/* Recommendations */}
                <div className="space-y-4 mb-8">
                  {recommendations.map((rec, index) => (
                    <motion.div
                      key={rec.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-[#FFFFF0] rounded-xl p-4 flex items-center gap-4"
                    >
                      <div className="w-14 h-14 bg-gradient-to-br from-[#B76E79] to-[#D4A5A5] rounded-xl flex items-center justify-center text-white font-bold">
                        {rec.match}%
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-[#2C2C2C]">
                          {rec.name}
                        </h4>
                        <p className="text-sm text-[#2C2C2C]/70">
                          {rec.description}
                        </p>
                      </div>
                      <CheckCircle className="w-6 h-6 text-[#9DC183]" />
                    </motion.div>
                  ))}
                </div>

                {/* Email Capture */}
                <div className="bg-[#2C2C2C] rounded-xl p-6 text-white">
                  <h4 className="font-semibold mb-2">
                    Get Your Full Personalized Plan
                  </h4>
                  <p className="text-white/70 text-sm mb-4">
                    Enter your email to receive a detailed treatment
                    recommendation with special offers.
                  </p>
                  <div className="flex gap-2">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      className="flex-1 px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#D4A5A5]"
                    />
                    <button className="px-6 py-2 bg-[#B76E79] rounded-lg font-semibold hover:bg-[#A25D66] transition-colors">
                      Send
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-[#D4A5A5]/20 flex justify-between">
          {!showResults ? (
            <>
              <button
                onClick={handleBack}
                disabled={currentQuestion === 0}
                className="flex items-center gap-2 text-[#2C2C2C]/60 hover:text-[#2C2C2C] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
                Back
              </button>
              <span className="text-sm text-[#2C2C2C]/40">
                Click an option to continue
              </span>
            </>
          ) : (
            <>
              <button
                onClick={handleReset}
                className="text-[#B76E79] font-medium hover:underline"
              >
                Retake Quiz
              </button>
              <a href="/booking">
                <Button>
                  Book Consultation
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </a>
            </>
          )}
        </div>
      </motion.div>
    </div>
  );
}
