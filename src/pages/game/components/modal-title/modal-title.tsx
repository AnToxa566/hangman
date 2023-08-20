import styles from './styles.module.scss';

interface Props {
  title: string;
  className?: string;
}

const ModalTitle: React.FC<Props> = ({ title, className = '' }) => {
  return <h2 className={`${styles.title} ${className}`}>{title}</h2>;
};

export { ModalTitle };
