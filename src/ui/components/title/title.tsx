interface Props {
    title: string;
    subtitle: string;
}

export const Title = ({ title, subtitle }: { title: string; subtitle: string }) => {
    return (
        <main className="min-h-screen flex flex-col items-center justify-center">
            <h1 className="text-5xl text-day-800 dark:text-night-800">{title}</h1>
            <p className="text-4xl text-day-800 dark:text-night-800">{subtitle}</p>
            <p className="text-3xl text-day-800 dark:text-night-800">{subtitle}</p>
            <p className="text-2xl text-day-800 dark:text-night-800">{subtitle}</p>
            <p className="text-xl text-day-800 dark:text-night-800">{subtitle}</p>
            <p className="text-lg text-day-800 dark:text-night-800">{subtitle}</p>
            <p className="text-base text-day-800 dark:text-night-800">{subtitle}</p>
            <p className="text-sm text-day-800 dark:text-night-800">{subtitle}</p>
        </main>
    );
};
