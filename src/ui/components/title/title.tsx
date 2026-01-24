interface Props {
    title: string;
    subtitle: string;
}

export const Title = ({ title, subtitle }: { title: string; subtitle: string }) => {
    return (
        <main className="min-h-screen flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold">{title}</h1>
            <p className="mt-4 text-lg text-gray-500">{subtitle}</p>
        </main>
    );
};
