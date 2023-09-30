import style from './Button.module.scss'

type Props = {
    children: React.ReactNode;
  };

function Button ({ children }: Props) {
    
    return (
        <button className={style.botao}>
            {children}
        </button>
    )
}

export default Button;