import styles from './MenuItem.module.css'

type MenuItemProps = {
    title: string;
    description?: string;
    price: string;
  };
  
  const MenuItem = ({ title, description, price }: MenuItemProps) => {
    return (
      <li className={styles.menuItem}>
        <div className={styles.menuItemText}>
          <h4 className={styles.menuItemTitle}>{title}</h4>
          {description && <p className={styles.menuItemDescription}>{description}</p>}
        </div>
        <p className={styles.menuItemPrice}>{price}</p>
      </li>
    );
  };
  
  export default MenuItem;
  