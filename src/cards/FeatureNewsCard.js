import { Card, CircularProgress } from "@mui/material";

const FeatureNewsCard = ({
  headline,
  description,
  date,
  time,
  img,
  source,
  loading
}) => {
  return (
    <div className="featureNewsCard">
      <Card
        className="featureNewsCard--card"
        style={{
          backgroundSize: "cover",
          background: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${img})`,
        }}
      >
        {loading ? (
          <CircularProgress color="secondary" />
        ) : (
          <>
            <p className="featureNewsCard--sourceTag">
              <span>{source}</span>
            </p>
            <div className="featureNewsCard--chevrons">
              {/* <ChevronLeft onClick={() => rotateFeatureBackward()} />
                <ChevronRight onClick={() => rotateFeatureForward()} /> */}
            </div>
            <div className="featureNewsCard--content">
              <h2>{headline}</h2>
              <p>
                {date} | {time}
              </p>
              <p>{description}</p>
            </div>
          </>
        )}
      </Card>
    </div>
  );
};

export default FeatureNewsCard