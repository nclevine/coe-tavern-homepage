type MenuItemProps = {
    title: string;
    description?: string;
    price: string;
  };
  
  const MenuItem = ({ title, description, price }: MenuItemProps) => {
    return (
      <li>
        <h4>{title}</h4>
        {description && <p>{description}</p>}
        <p>{price}</p>
      </li>
    );
  };
  
  export default MenuItem;
  