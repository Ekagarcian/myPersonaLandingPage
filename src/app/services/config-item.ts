export interface ConfigItem {

    configuration: {
        id: number;
        name: string;
        data: {
            title: string;
            description: string;
            detail: string;
            buttontext: string;
            IconBlock: {
                id: number;
                icon: string;
                title: string;
                description: string;
            }[];
            }
    }
