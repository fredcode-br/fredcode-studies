import style from './Button.module.scss'

type Props = {
    children: React.ReactNode;
    type?: "button" | "submit" | "reset" | undefined;
  };

function Button ({ children, type }: Props) {

    return (
        <button className={style.botao} type={type}>
            {children}
        </button>
    )
}

export default Button;