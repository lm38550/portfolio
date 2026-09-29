"use client"
import {Studies, Experiences} from "@/types/about";
import {StudiesList} from "@/modules/about/component/studies-list";
import {ExperienceList} from "@/modules/about/component/experiences-list";


import {motion, number} from "framer-motion";
import {RiSuitcaseLine, RiGraduationCapLine, RiMapPin2Line, RiCalendar2Line} from "react-icons/ri";
import {Typography} from "@/ui/design-system/typography/typography";

let years =Array.from(
    new Set(
        StudiesList.map(item => item.end.getFullYear()).concat(
            ExperienceList.map(item => item.end.getFullYear())))
    ).sort((a : number, b: number) => b - a);

if (years.at(years.length-1) != undefined && years.at(years.length-1) != 0) {
    let realYears = Array<number>();
    let change : number = years.pop() as number;
    realYears.push(change);
    realYears = realYears.concat(years);
    years = realYears;
}



function TimeLineCardStudie({item}: {item : Studies}) {
    return (
        <motion.div
            initial={{opacity: 0, x : -30}}
            whileInView={{opacity: 1, x : 0}}
            viewport={{once : true, amount : 0.3}}
            transition={{duration: 0.6, ease: "easeOut"}}
            className="relative"
        >
            {/* Connector vers l'axe central */}
            <div className={`absolute top-1/2 hidden h-px w-10 -translate-y-1/2
                bg-gradient-to- r day-500 to-transparent lg:block -right-10`}
            />

            <div className={`group rounded border bg-day-100 dark:bg-night-100 p-6 shadow-sm
                transition-all duration-300 hover:-translate-y-1 hover:shadow-xl 
                border-day-200 dark:border-night-200 hover:border-day-300 dark:hover:border-night-300`}
            >
                <div className="flex items-start gap-4">
                    {/* Icon */}
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded bg-day-200 dark:bg-night-200 text-day-500">
                        <RiGraduationCapLine size={24}/>
                    </div>

                    <div className="min-w-0 flex-1">
                        {/* Title */}
                        <Typography variant="h4" component="h4">
                            {item.title}
                        </Typography>

                        {/* Place + period */}
                        <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-slate-500">
                            <Typography variant="caption-base" component="span" className="inline-flex items-center gap-1.5">
                                <RiMapPin2Line size={14} />
                                {item.university}
                            </Typography>
                            <Typography variant="caption-base" component="span" className="inline-flex items-center gap-1.5">
                                <RiCalendar2Line size={14} />
                                {(item.end.getFullYear() < 0) ?
                                    "Depuis " + item.begin.getMonth() + "/" + item.begin.getFullYear()
                                    :
                                    item.begin.getMonth() + "/" + item.begin.getFullYear() + " - " + item.end.getMonth() + "/" + item.end.getFullYear()
                                }
                            </Typography>
                        </div>

                        {/* Description */}
                        <Typography variant="body-base" component="p" className="mt-4">
                            {item.description}
                        </Typography>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

function TimeLineCardExperience({item}: {item : Experiences}) {
    return (
        <motion.div
            initial={{opacity: 0, x : 30}}
            whileInView={{opacity: 1, x : 0}}
            viewport={{once : true, amount : 0.3}}
            transition={{duration: 0.6, ease: "easeOut"}}
            className="relative"
        >
            {/* Connector vers l'axe central */}
            <div className={`absolute top-1/2 hidden h-px w-10 -translate-y-1/2
                bg-gradient-to- r day-500 to-transparent lg:block -right-10`}
            />

            <div className={`group rounded border bg-day-100 dark:bg-night-100 p-6 shadow-sm
                transition-all duration-300 hover:-translate-y-1 hover:shadow-xl 
                border-day-200 dark:border-night-200 hover:border-day-300 dark:hover:border-night-300`}
            >
                <div className="flex items-start gap-4">
                    {/* Icon */}
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded bg-day-200 dark:bg-night-200 text-day-500">
                        <RiSuitcaseLine size={24}/>
                    </div>

                    <div className="min-w-0 flex-1">
                        {/* Title */}
                        <Typography variant="h4" component="h4">
                            {item.title}
                        </Typography>

                        {/* Place + period */}
                        <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-slate-500">
                            <Typography variant="caption-base" component="span" className="inline-flex items-center gap-1.5">
                                <RiMapPin2Line size={14} />
                                {item.place}
                            </Typography>
                            <Typography variant="caption-base" component="span" className="inline-flex items-center gap-1.5">
                                <RiCalendar2Line size={14} />
                                {(item.end.getFullYear() < 0) ?
                                    "Depuis " + item.begin.getMonth() + "/" + item.begin.getFullYear()
                                    :
                                    item.begin.getMonth() + "/" + item.begin.getFullYear() + " - " + item.end.getMonth() + "/" + item.end.getFullYear()
                                }
                            </Typography>
                        </div>

                        {/* Description */}
                        <Typography variant="body-base" component="p" className="mt-4">
                            {item.description}
                        </Typography>
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
            className="relative overflow-hidden bg-day-100 dark:bg-night-100 py-14"
        >
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{opacity: 0, y: -20}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                    transition={{duration: 0.5}}
                    className="mx-auto mb-20 text-center"
                >
                    <Typography variant="h1" component="h1">
                        Mon parcours
                    </Typography>
                </motion.div>

                {/* ========================= */}
                {/* DESKTOP */}
                {/* ========================= */}

                <div className="relative block">
                    {/* Axe central */}
                    <div className="absolute bottom-0 left-1/2 top-0 w-px -translate-x-1/2 bg-day-300 dark:bg-night-300" />

                    {/* Header des deux colonnes */}
                    <div className="mb-12 grid grid-cols-[1fr_120px_1fr] items-center gap-8">
                        {/* Education */}
                        <div className="flex items-center justify-end gap-4 pr-4">
                            <div className="text-right">
                                <Typography variant="body-base" component="p" className="text-day-500 dark:text-day-500">
                                    Parcours académique
                                </Typography>
                                <Typography variant="h4" component="h4" className="mt-1">
                                    Études
                                </Typography>
                            </div>

                            <div className="flex h-14 w-14 items-center justify-center rounded bg-day-200 dark:bg-night-200 text-day-500">
                                <RiGraduationCapLine size={28} />
                            </div>
                        </div>

                        {/* Centre */}
                        <div />

                        {/* Experience */}
                        <div className="flex items-center gap-4 pl-4">
                            <div className="flex h-14 w-14 items-center justify-center rounded bg-day-200 dark:bg-night-200 text-day-500">
                                <RiSuitcaseLine size={27} />
                            </div>

                            <div>
                                <Typography variant="body-base" component="p" className="text-day-600 dark:text-day-600">
                                    Parcours professionnel
                                </Typography>
                                <Typography variant="h4" component="h4" className="mt-1">
                                    Expériences
                                </Typography>
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

                            const isCurrent = year < 0;
                            return (
                                <div
                                    key={year}
                                    className="grid grid-cols-[1fr_130px_1fr] items-center gap-8"
                                >
                                    {/* LEFT — Education */}
                                    <div className="flex justify-end">
                                        {education ? (
                                            <div className="w-full max-w-xl">
                                                <TimeLineCardStudie item={education} />
                                            </div>
                                        ) : (
                                            <div className="h-1" />
                                        )}
                                    </div>

                                    {/* CENTER — Year */}
                                    <div className="relative flex justify-center self-start">
                                        <div className="relative z-10 flex h-12 min-w-[70px] items-center justify-center rounded-full
                                            border border-day-300 dark:border-night-300 bg-day-100 dark:bg-night-100 px-4 shadow-sm">
                                            <Typography variant="body-base" component="p">
                                                {isCurrent ? (
                                                    "En cours"
                                                    ) : (
                                                    year
                                                    )}
                                            </Typography>
                                        </div>
                                    </div>

                                    {/* RIGHT — Experience */}
                                    <div>
                                        {experience ? (
                                            <div className="w-full max-w-xl">
                                                <TimeLineCardExperience item={experience} />
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