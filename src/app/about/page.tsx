import React from "react";

export default function AboutPage() {
    return (
        <div className="max-w-3xl mx-auto py-12 px-4 text-gray-c">
            <h1 className="text-4xl font-bold text-center mb-6">About</h1>

            <p className="mb-4 text-lg">
                Welcome to <span className="font-semibold">cerk</span> — a personal blog built with Next.js, focused on sharing insights, stories, and inspiration at the intersection of technology, nature, and creativity.
            </p>

            <p className="mb-4 text-lg">
                This project is a modern, fast, and SEO-friendly blog, fully styled and deployed using Vercel. It’s a personal pet project designed to level up frontend skills and create highly-optimized, production-ready sites.
            </p>

            <p className="mb-2 text-lg font-bold">Features:</p>
            <ul className="list-disc ml-6 mb-4 text-lg">
                <li>Built with <code>create-next-app</code></li>
                <li>Fully static export + Vercel deployment</li>
                <li>SEO-first approach (meta tags, OpenGraph, <code>itemProp</code>, etc.)</li>
                <li>Lazy loading for images</li>
                <li>Mobile-first responsive design</li>
                <li>Clean, minimal UI</li>
            </ul>

            <p className="mb-4 text-lg">
                <strong>Author:</strong> Oleksandr Hridzhak
            </p>
        </div>
    );
}
