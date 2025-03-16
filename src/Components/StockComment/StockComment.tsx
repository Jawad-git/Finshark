import React, { useEffect, useState } from "react";
import styles from "./StockComponent.module.css";
import StockCommentForm from "./StockCommentForm/StockCommentForm";
import { commentGetApi, commentPostApi } from "../../Services/CommentService";
import { toast } from "react-toastify";
import { CommentGet } from "../../Models/Comment";
import StockCommentList from "../StockCommentList/StockCommentList";
import Spinner from "../Spinner/Spinner";
interface Props {
  stockSymbol: string;
}
type CommentFormInputs = {
  title: string;
  content: string;
};

const StockComment = ({ stockSymbol }: Props) => {
  const [comments, setComments] = useState<CommentGet[] | null>(null);
  const [loading, setLoading] = useState<boolean>();

  useEffect(() => {
    getComments();
  }, []);

  const handleComment = async (e: CommentFormInputs) => {
    try {
      var result = await commentPostApi(e.title, e.content, stockSymbol);
      if (result) {
        toast.success("Comment added successfully");
        getComments();
      }
    } catch (e: any) {
      toast.warning("what happened here");
    }
  };
  const getComments = async () => {
    setLoading(true);
    try {
      var res = await commentGetApi(stockSymbol);
      setLoading(false);
      setComments(res?.data!);
    } catch (e: any) {
      toast.warning(`what happened here ${e}`);
    }
  };
  return (
    <div className="flex flex-col">
      {loading ? <Spinner /> : <StockCommentList comments={comments!} />}
      <StockCommentForm symbol={stockSymbol} handleComment={handleComment} />
    </div>
  );
};

export default StockComment;
