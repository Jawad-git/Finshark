import React from "react";
import styles from "./StockCommentList.module.css";
import { CommentGet } from "../../Models/Comment";
import StockCommentListItem from "./StockCommentListItem/StockCommentListItem";

interface Props {
  comments: CommentGet[];
}

const StockCommentList = ({ comments }: Props) => {
  return (
    <>
      {comments
        ? comments.map((comment, index) => (
            <div key={index}>
              <StockCommentListItem comment={comment} />
            </div>
          ))
        : ""}
    </>
  );
};

export default StockCommentList;
