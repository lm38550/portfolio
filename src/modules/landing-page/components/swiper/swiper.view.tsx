"use client"

import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination} from "swiper/modules";
import {Typography} from "@/ui/design-system/typography/typography";
import {Button} from "@/ui/design-system/button/button";
import {
    RiAppleFill,
    RiArrowLeftLongLine,
    RiArrowRightLongLine,
    RiGithubFill,
    RiUbuntuFill,
    RiWindowsFill
} from "react-icons/ri";
import {v4 as uuidv4} from "uuid";
import Image from "next/image";
import {ProjectList} from "@/ui/components/project-presentation/project-links";

export const SwiperView = () => {
    const projects = ProjectList.filter((project) => project.isMain);

    return (
        <div className="relative flex min-h-190 flex-col items-center justify-between bg-day-100 dark:bg-night-100">

            <Typography variant="h2">Mes projets</Typography>

            {/* Bottom buttons */}
            <div className="flex flex-row items-center gap-4 p-4">
                    <Button
                        icon={<RiArrowRightLongLine/>}
                        size="large"
                        baseUrl="/projects"
                        linkType="internal"
                    >
                        Tous mes projets
                    </Button>

                    <Button
                        variant="secondary"
                        icon={<RiGithubFill/>}
                        size="large"
                        baseUrl="https://github.com/lm38550"
                        linkType="external"
                    >
                        Mon GitHub
                    </Button>

            </div>
            <Swiper
                modules={[Navigation, Pagination]}
                slidesPerView="auto"
                spaceBetween={30}
                centeredSlides={true}
                loop={true}
                speed={600}
                watchOverflow={true}
                watchSlidesProgress={true}
                initialSlide={0}
                navigation={{
                    nextEl: ".project-slider-next",
                    prevEl: ".project-slider-prev",
                    disabledClass: "disabled"
                }}
                pagination={{
                    el: ".project-slider-pagination",
                    type: "bullets",
                    modifierClass: "slider-pagination",
                    bulletClass: "slider-pagination__item",
                    bulletActiveClass: "active",
                    clickable: true
                }}
                breakpoints={{
                    768: {
                        spaceBetween: 40
                    }
                }}
                className="project-slider  w-full min-h-170 !overflow-visible"
            >
                <div className="absolute inset-0 bg-gradient-to-r w-100 from-day-100 dark:from-night-100 via-transparent to-transparent z-20 pointer-events-none"></div>
                <div className="absolute right-0 inset-y-0 bg-gradient-to-l w-100 from-day-100 dark:from-night-100 via-transparent to-transparent z-20 pointer-events-none"></div>
                {projects.map((project) => (
                    <SwiperSlide
                        key={uuidv4()}
                        className="group !flex !w-auto py-6 transition-all duration-500 ease-out [&.swiper-slide-active]:z-10"
                    >
                        <div
                            className="
                                grid
                                min-h-60
                                w-[calc(100dvw-60px)]
                                max-w-[400px]
                                grid-cols-1
                                items-center
                                rounded
                                border-1
                                bg-day-200
                                p-2
                                shadow-none
                                transition-all
                                duration-500
                                ease-out
                                dark:bg-night-200
                                group-[.swiper-slide-active]:-translate-y-3
                                group-[.swiper-slide-active]:shadow-2xl
                            "
                        >
                            {/* Image */}
                            <div className="relative h-full min-h-40 w-full overflow-hidden rounded">
                                {project.imageUrl === "" ? (
                                    <Image
                                        src="/img/no-image.png"
                                        alt="Image indiquant qu'il n'y a pas d'image pour ce projet"
                                        fill
                                        className="rounded object-cover"
                                    />
                                ) : (
                                    <Image
                                        src={project.imageUrl}
                                        alt={project.imageAlt}
                                        fill
                                        className="rounded object-cover"
                                    />
                                )}
                            </div>

                            {/* Content */}
                            <div className="flex flex-col items-center gap-3">

                                <Typography
                                    variant="h3"
                                    component="h1"
                                    className="text-center"
                                >
                                    {project.title}
                                </Typography>

                                <Typography
                                    variant="body-sm"
                                    component="p"
                                    className="whitespace-pre-line text-center"
                                >
                                    {project.description}
                                </Typography>

                                {/* Technologies / tags */}
                                <div className="flex items-center gap-2">

                                    <div
                                        className="
                                            flex
                                            border-r-2
                                            border-day-800
                                            pr-1
                                            dark:border-night-800
                                        "
                                    >
                                        {project.compatible_windows && (
                                            <RiWindowsFill
                                                size={30}
                                                className="text-day-800 dark:text-night-800"
                                            />
                                        )}

                                        {project.compatible_linux && (
                                            <RiUbuntuFill
                                                size={30}
                                                className="text-day-800 dark:text-night-800"
                                            />
                                        )}

                                        {project.compatible_mac && (
                                            <RiAppleFill
                                                size={30}
                                                className="text-day-800 dark:text-night-800"
                                            />
                                        )}
                                    </div>

                                    {project.tags.map((tag) => (
                                        <Typography
                                            variant="caption-sm"
                                            component="p"
                                            key={uuidv4()}
                                            className="
                                                rounded
                                                bg-day-400
                                                p-2
                                                dark:bg-night-400
                                            "
                                        >
                                            {tag}
                                        </Typography>
                                    ))}

                                </div>

                                {/* GitHub uniquement sur le projet central */}
                                <div
                                    className="
                                        flex
                                        items-center
                                        gap-2
                                        overflow-hidden
                                        max-h-0
                                        opacity-0
                                        -translate-y-2
                                        pointer-events-none
                                        transition-all
                                        duration-500
                                        ease-out
                                        group-[.swiper-slide-active]:max-h-20
                                        group-[.swiper-slide-active]:translate-y-0
                                        group-[.swiper-slide-active]:opacity-100
                                        group-[.swiper-slide-active]:pointer-events-auto
                                    "
                                >
                                    <Button
                                        variant="secondary"
                                        iconPosition="right"
                                        icon={<RiGithubFill/>}
                                        linkType="external"
                                        baseUrl={project.gitUrl}
                                    >
                                        Projet GitHub
                                    </Button>
                                </div>

                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Pagination */}
            <div
                className="
                    project-slider-pagination
                    flex
                    items-center
                    justify-center
                    gap-2
                    pt-5
                "
            />


        </div>
    );
}