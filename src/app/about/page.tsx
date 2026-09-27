"use client"
import {Studies, Experiences} from "@/types/about";
import {StudiesList} from "@/modules/about/component/studies-list";
import {ExperienceList} from "@/modules/about/component/experiences-list";


import { motion } from "framer-motion";
import {BriefcaseBusiness, GraduationCap, MapPin, CalendarDays} from "lucide-react";

const years =Array.from(
    new Set(
        StudiesList.map(item => item.end.getFullYear()).concat(
            ExperienceList.map(item => item.end.getFullYear())))
).sort((a : number, b: number) => b - a).filter((year: number) => year > 0);

function TimeLineCard({item}: {item : Studies | Experiences}) {
    return (
        <motion.div
            initial={{opacity: 0}}
            whileInView={{opacity: 1, x : 0}}
            viewport={{once : true, amount : 0.3}}
            transition={{duration: 0.2, ease: "easeOut"}}
            className="relative"
        >
            {/* Connector vers l'axe central */}
            <div className={`absolute top-1/2 hidden h-px w-10 -translate-y-1/2
                bg-gradient-to- r blue-500 to-transparent lg:block -right-10`}
            />

            <div className={`group rounded-2xl border bg-white p-6 shadow-sm
                transition-all duration-300 hover:-translate-y-1 hover:shadow-xl 
                border-blue-100 hover:border-blue-200`}
            >
                <div className="flex items-start gap-4">
                    {/* Icon */}
                    <div className={`flex h-12 w-12 shrink-0 items-center justify-center
                        rounded-xl bg-blue-50 text-blue-600`}
                    >
                        <GraduationCap size={24} strokeWidth={1.8} />
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
                                    "A CHANGER"
                            </span>
                            <span className="text-slate-300">•</span>
                            <span className="inline-flex items-center gap-1.5">
                                <CalendarDays size={14} />
                                {item.begin.getMonth() + "/" + item.begin.getFullYear() + " - " + item.end.getMonth() + "/" + item.end.getFullYear()}
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
    )
}

export default function Home() {
    return (
        <section
            id="parcours"
            className="relative overflow-hidden bg-slate-50 py-24"
        >
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                    transition={{duration: 0.5}}
                    className="mx-auto mb-20 max-w-2xl text-center"
                >
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
                            const education = StudiesList.find(
                                (item) => item.end.getFullYear() === year
                            );

                            const experience = ExperienceList.find(
                                (item) => item.end.getFullYear() === year
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
                                                <TimeLineCard item={education} />
                                            </div>
                                        ) : (
                                            <div className="h-1" />
                                        )}
                                    </div>

                                    {/* CENTER — Year */}
                                    <div className="relative flex justify-center self-start">
                                        <div className="relative z-10 flex h-12 min-w-[70px] items-center justify-center rounded-full border border-slate-200 bg-white px-4 text-sm font-bold text-slate-700 shadow-sm">
                                            {year}
                                        </div>
                                    </div>

                                    {/* RIGHT — Experience */}
                                    <div>
                                        {experience ? (
                                            <div className="w-full max-w-xl">
                                                <TimeLineCard item={experience} />
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
            </div>
        </section>
    );
}