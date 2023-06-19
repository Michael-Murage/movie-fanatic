export interface MovieCard {
    id: string,
    originalTitleText: {
        text: string,
        __typename: string
    },
    primaryImage: {
        caption: {
            plainText: string,
            __typename: string
        },
        height: number,
        id: string,
        url: string,
        width: number,
        __typename: string
    } | null,
    releaseDate: {
        day: number,
        month: number,
        year: number,
        __typename: string
    },
    releaseYear: {
        year: number,
        endYear: number,
        __typename: string
    },
    titleText: {
        text: string,
        __typename: string
    },
    titleType: {
        categories: object[], // array of objects
        displayableProperty: {
            value: {
                plainText: string,
                __typename: string
            },
            __typename: string
        }
        canHaveEpisodes: boolean,
        id: string,
        isEpisode: boolean,
        isSeries: boolean,
        text: string,
        __typename: string
    }
};