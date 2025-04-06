import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Camera, Hand, Mic } from "lucide-react";

function HomePage() {
  return (
    <div className="text-center py-20 bg-gradient-to-r from-blue-100 via-blue-200 to-blue-300 min-h-[75vh] flex flex-col items-center justify-center relative overflow-hidden">
      <div className="absolute top-10 left-10 opacity-20">
        <Hand className="w-48 h-48 text-blue-300 rotate-[20deg]" />
      </div>
      <div className="absolute bottom-10 right-10 opacity-20">
        <Hand className="w-48 h-48 text-blue-300 -rotate-[20deg]" />
      </div>

      <h1 className="text-5xl font-extrabold text-blue-800 mb-4 animate-fade-in z-10">
        Sign Language Translator
      </h1>
      <p className="text-lg text-blue-900 mb-6 max-w-xl z-10">
        Empowering communication through AI and machine learning. Break the barriers of silence and make the world more inclusive.
      </p>
      <Link to="/translator" className="z-10">
        <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-xl text-lg shadow-md transition duration-300">
          Start Translating
        </Button>
      </Link>
      <div className="mt-10 text-blue-800 text-sm italic z-10">Built with ❤️ by Team <strong>Hack_Horizon</strong></div>
    </div>
  );
}

function TranslatorPage() {
  return (
    <main className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card className="shadow-xl bg-white">
        <CardContent className="p-4">
          <h2 className="text-lg font-semibold mb-2 text-blue-700">Live Camera Feed</h2>
          <div className="w-full h-64 bg-blue-100 flex flex-col items-center justify-center rounded-xl">
            <Camera className="w-12 h-12 text-blue-600 mb-2" />
            <span className="text-blue-600">Webcam Placeholder</span>
          </div>
        </CardContent>
      </Card>

      <Card className="shadow-xl bg-white">
        <CardContent className="p-4">
          <h2 className="text-lg font-semibold mb-2 text-blue-700">Translated Text</h2>
          <Textarea
            className="w-full h-64 resize-none"
            placeholder="Translation output will appear here..."
            readOnly
          />
        </CardContent>
      </Card>

      <Card className="shadow-xl bg-white col-span-1 md:col-span-2">
        <CardContent className="p-4 flex items-center gap-4">
          <Mic className="w-6 h-6 text-blue-600" />
          <p className="text-blue-700">Future enhancement: Speech Output for translated text.</p>
        </CardContent>
      </Card>
    </main>
  );
}

function AboutPage() {
  return (
    <section className="px-6 py-10">
      <Card className="max-w-3xl mx-auto shadow-xl bg-white">
        <CardContent className="p-6">
          <h2 className="text-xl font-bold mb-4 text-blue-700">About the Project</h2>
          <p className="text-gray-700">
            Our AI-based Sign Language Translator enables real-time gesture
            translation into text and speech using computer vision and machine
            learning. It aims to bridge communication gaps for the deaf and
            hard-of-hearing community.
          </p>
          <div className="mt-4">
            <strong>GitHub Repo:</strong> <a href="#" className="text-blue-500 underline">Link here</a>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-blue-50 text-gray-800">
        <nav className="bg-white shadow p-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-blue-700">Sign Language Translator</h1>
          <div className="space-x-4">
            <Link to="/">
              <Button variant="ghost">Home</Button>
            </Link>
            <Link to="/translator">
              <Button variant="ghost">Translator</Button>
            </Link>
            <Link to="/about">
              <Button variant="ghost">About</Button>
            </Link>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/translator" element={<TranslatorPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}
