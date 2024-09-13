import { useMemo } from "react";
import Checkboxes from "../checkbox/Checkboxes1";
import PropTypes from "prop-types";
import styles from "./TextCell3.module.css";
import Checkboxes1 from "../checkbox/Checkboxes1";

const TextCell3 = ({
  className = "",
  id,
  strike,
  toggleImportant,
  checkSmall,
  toggleComplete,
  title,
  phstar,
  propWidth,
  propBorder,
  propColor,
}) => {
  const frameDiv4Style = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const title1Style = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);


  return (
    <div className={[styles.textCell, className].join(" ")}  >
      <div style={{ cursor: "pointer", }} onClick={() => toggleComplete(id)} >

        {checkSmall ?
          <Checkboxes1
            checkSmall="/check-small.svg"
            checkboxesPosition="unset"
            containerBackgroundColor="#357937"
          />
          :
          <Checkboxes
            checkboxesPosition="unset"
            containerBorder="2px solid #1e1e1e"
          />
        }



      </div>
      {
        strike ? (
          <del>{title}</del>
        ) : (
          title
        )
      }
      <div className={styles.checkboxesParent} style={frameDiv4Style}>
        <div className={styles.title} style={title1Style}>
        </div>
      </div>
      <img className={styles.phstarIcon} alt="" src={phstar} onClick={() => toggleImportant(id)} />
    </div>
  );
};

TextCell3.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  phstar: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
  propBorder: PropTypes.any,
  propColor: PropTypes.any,
};

export default TextCell3;
