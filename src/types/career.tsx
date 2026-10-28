export interface Studies {
    title: string;
    university: string;
    begin: Date;
    end: Date;
    imageUrl: string;
    imageAlt: string;
    description : string;
    skills : Array<string>;
}

export interface Experiences {
    title: string;
    place: string;
    begin: Date;
    end: Date;
    imageUrl: string;
    imageAlt: string;
    description : string;
    skills: Array<string>;
}