import React from "react";
import PropTypes from "prop-types";
import styles from "./MemeThumbnail.module.css";
import { useSelector, useDispatch } from "react-redux";
import FlexThumbnail from "../../layout/FlexThumbnail/FlexThumbnail";
import MemeViewer from "../MemeViewer/MemeViewer";
import { changeCurrent } from "../../../store/current";
import { Link } from "react-router-dom";

const MemeThumbnail = (props) => {
  return (
    <div className={styles.MemeThumbnail} data-testid="MemeThumbnail">
      <FlexThumbnail>
        {props.memes.map((m, mposition) => (
          <Link to={"/editor/" + m.id} key={"link-thumb-" + mposition}>
            <MemeViewer
              key={"thumb-" + mposition}
              meme={m}
              image={props.images.find((i) => i.id === m.imageId)}
              basePath=""
            ></MemeViewer>
          </Link>
        ))}
      </FlexThumbnail>
    </div>
  );
};

MemeThumbnail.propTypes = {};

MemeThumbnail.defaultProps = {};

export default MemeThumbnail;

export const MemeThumbnailStoredData = (props) => {
  const dispatch = useDispatch();
  const mms = useSelector((s) => s.ressources.memes);
  const imgs = useSelector((s) => s.ressources.images);
  return (
    <MemeThumbnail
      {...props}
      images={imgs}
      memes={mms}
      onMemeClick={(id) => {
        dispatch(changeCurrent(mms.find((m) => m.id === id)));
      }}
    ></MemeThumbnail>
  );
};
