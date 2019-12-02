declare namespace ILocaleButton {
    export interface IProps {
        lang: string;
        onClick: (param: any) => void;
        isActive: boolean;
    }
}

export { ILocaleButton };
