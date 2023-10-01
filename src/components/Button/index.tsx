import style from './Button.module.scss'

type Props = {
    children: React.ReactNode;
    type?: "button" | "submit" | "reset" | undefined;
    onClick?: () => void
  };

function Button ({ children, type, onClick }: Props) {

    return (
        <button className={style.botao} type={type} onClick={onClick}>
            {children}
        </button>
    )
}

export default Button;