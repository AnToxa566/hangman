import styles from './styles.module.scss';

interface Props {
  onChange: () => void;
  checked?: boolean;
  label?: string;
  className?: string;
}

const Checkbox: React.FC<Props> = ({
  onChange,
  checked,
  label,
  className = '',
}) => {
  return (
    <div className={`${styles.checkbox} ${className}`}>
      <div className={styles.track}>
        <input
          className={styles.input}
          id="checkbox"
          type="checkbox"
          checked={checked}
          onChange={() => onChange()}
        />
        <label className={styles.thumb} htmlFor="checkbox"></label>
      </div>

      <span className={styles.label}>{label}</span>
    </div>
  );
};

export { Checkbox };
