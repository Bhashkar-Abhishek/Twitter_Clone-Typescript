import styles from "./SidebarOption.module.css";

interface SidebarOptionProps {
  active:boolean,
  text:string,
  Icon: React.ComponentType
}

const SidebarOption : React.FC<SidebarOptionProps> = ({ active, text, Icon }) => {
  return (
    <div className={`${styles.sidebarOption} ${active && styles.sidebarOption2}`}>   
        <Icon />
      <h2>{text}</h2>
    </div>
  );
};

export default SidebarOption;
