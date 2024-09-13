import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./Checkboxes1.module.css";

const Checkboxes1 = ({
  className = "",
  checkSmall,
  checkboxesPosition,
  containerBackgroundColor,
}) => {
  const checkboxesStyle = useMemo(() => {
    return {
      position: checkboxesPosition,
    };
  }, [checkboxesPosition]);

  const containerStyle = useMemo(() => {
    return {
      backgroundColor: containerBackgroundColor,
    };
  }, [containerBackgroundColor]);

  return (
    <div
      className={[styles.typeselectedStateenabled, className].join(" ")}
      style={checkboxesStyle}
    >
      <div className={styles.stateLayer}>
        <div className={styles.container} style={containerStyle} />
        <img className={styles.checkSmallIcon} alt="" src={checkSmall} />
      </div>
    </div>
  );
};

Checkboxes1.propTypes = {
  className: PropTypes.string,
  checkSmall: PropTypes.string,

  /** Style props */
  checkboxesPosition: PropTypes.any,
  containerBackgroundColor: PropTypes.any,
};

export default Checkboxes1;
