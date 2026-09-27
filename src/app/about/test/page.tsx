"use client";

import { motion } from "framer-motion";
import {
    BriefcaseBusiness,
    GraduationCap,
    MapPin,
    CalendarDays,
} from "lucide-react";

type TimelineItem = {
    year: number;
    type: "education" | "experience";
    title: string;
    place: string;
    period: string;
    description: string;
};

const timeline: TimelineItem[] = [
    {
        year: 2024,
        type: "experience",
        title: "Développeur Full Stack",
        place: "SoftTech",
        period: "2024 — Aujourd'hui",
        description:
            "Conception et développement de nouvelles fonctionnalités, maintenance et amélioration des performances.",
    },
    {
        year: 2021,
        type: "experience",
        title: "Stage Développeur Web",
        place: "Agence Web",
        period: "2021 — 2022",
        description:
            "Développement de fonctionnalités front-end avec React et intégration continue.",
    },
    {
        year: 2022,
        type: "education",
        title: "Licence Informatique",
        place: "Université de Lyon",
        period: "2021 — 2024",
        description:
            "Spécialisation en développement logiciel et bases de données.",
    },
    {
        year: 2020,
        type: "education",
        title: "Baccalauréat",
        place: "Lycée Jean Moulin",
        period: "2020",
        description:
            "Baccalauréat Scientifique, mention Bien.",
    },
    {
        year: 2023,
        type: "experience",
        title: "Alternance Développeur Full Stack",
        place: "TechCorp",
        period: "2023 — 2024",
        description:
            "Développement d'applications web avec Next.js, Node.js et PostgreSQL.",
    },
    {
        year: 2024,
        type: "education",
        title: "Master Informatique",
        place: "Université de Lyon",
        period: "2024 — 2026",
        description:
            "Spécialisation en intelligence artificielle et développement web.",
    },
];

const educationItems = timeline.filter(
    (item) => item.type === "education"
);

const experienceItems = timeline.filter(
    (item) => item.type === "experience"
);

const years = Array.from(
    new Set(timeline.map((item) => item.year))
).sort((a, b) => b - a);

function TimelineCard({
                          item,
                      }: {
    item: TimelineItem;
}) {
    const isEducation = item.type === "education";

    return (
        <motion.div
            initial={{
                opacity: 0,
                x: isEducation ? -30 : 30,
            }}
            whileInView={{
                opacity: 1,
                x: 0,
            }}
            viewport={{
                once: true,
                amount: 0.3,
            }}
            transition={{
                duration: 0.5,
                ease: "easeOut",
            }}
            className="relative"
        >
            {/* Connector vers l'axe central */}
            <div
                className={`
          absolute top-1/2 hidden h-px w-10 -translate-y-1/2
          bg-gradient-to-${isEducation ? "r" : "l"}
          from-${isEducation ? "blue-500" : "violet-500"}
          to-transparent
          lg:block
          ${isEducation ? "-right-10" : "-left-10"}
        `}
            />

            {/* Petit point sur le connecteur */}
            <div
                className={`
          absolute top-1/2 hidden h-2.5 w-2.5
          -translate-y-1/2 rounded-full
          border-2 border-white
          shadow-sm
          lg:block
          ${isEducation ? "-right-[45px] bg-blue-500" : "-left-[45px] bg-violet-500"}
        `}
            />

            <div
                className={`
          group rounded-2xl border bg-white p-6
          shadow-sm transition-all duration-300
          hover:-translate-y-1 hover:shadow-xl
          ${
                    isEducation
                        ? "border-blue-100 hover:border-blue-200"
                        : "border-violet-100 hover:border-violet-200"
                }
        `}
            >
                <div className="flex items-start gap-4">
                    {/* Icon */}
                    <div
                        className={`
              flex h-12 w-12 shrink-0 items-center justify-center
              rounded-xl
              ${
                            isEducation
                                ? "bg-blue-50 text-blue-600"
                                : "bg-violet-50 text-violet-600"
                        }
            `}
                    >
                        {isEducation ? (
                            <GraduationCap size={24} strokeWidth={1.8} />
                        ) : (
                            <BriefcaseBusiness size={23} strokeWidth={1.8} />
                        )}
                    </div>

                    <div className="min-w-0 flex-1">
                        {/* Title */}
                        <h3 className="text-lg font-semibold tracking-tight text-slate-900">
                            {item.title}
                        </h3>

                        {/* Place + period */}
                        <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-slate-500">
              <span className="inline-flex items-center gap-1.5">
                <MapPin size={14} />
                  {item.place}
              </span>

                            <span className="text-slate-300">•</span>

                            <span className="inline-flex items-center gap-1.5">
                <CalendarDays size={14} />
                                {item.period}
              </span>
                        </div>

                        {/* Description */}
                        <p className="mt-4 text-sm leading-6 text-slate-600">
                            {item.description}
                        </p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

function MobileTimelineCard({
                                item,
                            }: {
    item: TimelineItem;
}) {
    const isEducation = item.type === "education";

    return (
        <motion.div
            initial={{
                opacity: 0,
                y: 20,
            }}
            whileInView={{
                opacity: 1,
                y: 0,
            }}
            viewport={{
                once: true,
                amount: 0.2,
            }}
            transition={{
                duration: 0.4,
            }}
            className="relative pl-10"
        >
            {/* Ligne */}
            <div className="absolute left-[7px] top-0 h-full w-px bg-slate-200" />

            {/* Point */}
            <div
                className={`
          absolute left-0 top-7 h-4 w-4 rounded-full
          border-4 border-white shadow-sm
          ${
                    isEducation
                        ? "bg-blue-500"
                        : "bg-violet-500"
                }
        `}
            />

            {/* Année */}
            <div
                className={`
          mb-3 inline-flex rounded-full px-3 py-1
          text-xs font-semibold
          ${
                    isEducation
                        ? "bg-blue-50 text-blue-600"
                        : "bg-violet-50 text-violet-600"
                }
        `}
            >
                {item.year}
            </div>

            <div
                className={`
          rounded-2xl border bg-white p-5 shadow-sm
          ${
                    isEducation
                        ? "border-blue-100"
                        : "border-violet-100"
                }
        `}
            >
                <div className="flex items-start gap-3">
                    <div
                        className={`
              flex h-10 w-10 shrink-0 items-center
              justify-center rounded-lg
              ${
                            isEducation
                                ? "bg-blue-50 text-blue-600"
                                : "bg-violet-50 text-violet-600"
                        }
            `}
                    >
                        {isEducation ? (
                            <GraduationCap size={20} />
                        ) : (
                            <BriefcaseBusiness size={20} />
                        )}
                    </div>

                    <div>
                        <h3 className="font-semibold text-slate-900">
                            {item.title}
                        </h3>

                        <p className="mt-1 text-sm text-slate-500">
                            {item.place}
                        </p>

                        <p className="mt-3 text-sm leading-6 text-slate-600">
                            {item.description}
                        </p>

                        <p className="mt-3 text-xs font-medium text-slate-400">
                            {item.period}
                        </p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default function Timeline() {
    return (
        <section
            id="parcours"
            className="relative overflow-hidden bg-slate-50 py-24"
        >
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{
                        opacity: 0,
                        y: 20,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    viewport={{
                        once: true,
                    }}
                    transition={{
                        duration: 0.5,
                    }}
                    className="mx-auto mb-20 max-w-2xl text-center"
                >
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            Mon parcours
          </span>

                    <h2 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                        Études & Expériences
                    </h2>

                    <p className="mt-5 text-lg leading-8 text-slate-600">
                        Mon parcours académique et professionnel, en parallèle.
                    </p>
                </motion.div>

                {/* ========================= */}
                {/* DESKTOP */}
                {/* ========================= */}

                <div className="relative hidden lg:block">
                    {/* Axe central */}
                    <div className="absolute bottom-0 left-1/2 top-0 w-px -translate-x-1/2 bg-slate-200" />

                    {/* Header des deux colonnes */}
                    <div className="mb-12 grid grid-cols-[1fr_120px_1fr] items-center gap-8">
                        {/* Education */}
                        <div className="flex items-center justify-end gap-4 pr-4">
                            <div className="text-right">
                                <p className="text-sm font-medium text-blue-600">
                                    Parcours académique
                                </p>

                                <h3 className="mt-1 text-3xl font-bold text-slate-900">
                                    Études
                                </h3>
                            </div>

                            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                                <GraduationCap size={28} />
                            </div>
                        </div>

                        {/* Centre */}
                        <div />

                        {/* Experience */}
                        <div className="flex items-center gap-4 pl-4">
                            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-50 text-violet-600">
                                <BriefcaseBusiness size={27} />
                            </div>

                            <div>
                                <p className="text-sm font-medium text-violet-600">
                                    Parcours professionnel
                                </p>

                                <h3 className="mt-1 text-3xl font-bold text-slate-900">
                                    Expériences
                                </h3>
                            </div>
                        </div>
                    </div>

                    {/* Timeline */}
                    <div className="space-y-10">
                        {years.map((year) => {
                            const education = educationItems.find(
                                (item) => item.year === year
                            );

                            const experience = experienceItems.find(
                                (item) => item.year === year
                            );

                            return (
                                <div
                                    key={year}
                                    className="grid grid-cols-[1fr_120px_1fr] items-center gap-8"
                                >
                                    {/* LEFT — Education */}
                                    <div className="flex justify-end">
                                        {education ? (
                                            <div className="w-full max-w-xl">
                                                <TimelineCard item={education} />
                                            </div>
                                        ) : (
                                            <div className="h-1" />
                                        )}
                                    </div>

                                    {/* CENTER — Year */}
                                    <div className="relative flex justify-center">
                                        <div className="relative z-10 flex h-12 min-w-[70px] items-center justify-center rounded-full border border-slate-200 bg-white px-4 text-sm font-bold text-slate-700 shadow-sm">
                                            {year}
                                        </div>
                                    </div>

                                    {/* RIGHT — Experience */}
                                    <div>
                                        {experience ? (
                                            <div className="w-full max-w-xl">
                                                <TimelineCard item={experience} />
                                            </div>
                                        ) : (
                                            <div className="h-1" />
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* ========================= */}
                {/* MOBILE */}
                {/* ========================= */}

                <div className="space-y-8 lg:hidden">
                    {timeline
                        .slice()
                        .sort((a, b) => a.year - b.year)
                        .map((item, index) => (
                            <MobileTimelineCard
                                key={`${item.year}-${item.type}-${index}`}
                                item={item}
                            />
                        ))}
                </div>
            </div>
        </section>
    );
}