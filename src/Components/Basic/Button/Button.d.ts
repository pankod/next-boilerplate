declare namespace IButton {
    interface IProps {
        children?: React.ReactNode;
        className?: string;
        onClick?: (event: MouseEvent<HTMLDivElement, MouseEvent>) => void;
        disabled?: boolean;
    }
}
