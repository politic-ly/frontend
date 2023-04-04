import React from "react";
import { Card, CircularProgress } from "@mui/material";

const NewsCard = ({
  headline,
  description,
  date,
  time,
  img,
  source,
  type = "standard",
  url,
  loading,
}) => {
  return (
    <div className={`newsCard--${type}`}>
      {loading ? (
        <CircularProgress color="secondary" />
      ) : (
        <>
          <Card
            className="newsCard--card"
            style={{
              background: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${img})`,
            }}
            onClick={() => window.open(url)}
          >
            <p className="newsCard--sourceTag">
              <span>{source}</span>
            </p>
          </Card>
          <div className="newsCard--content">
            <h2>{headline}</h2>
            <p>
              {date} | {time}
            </p>
            <p>{description}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default NewsCard;
