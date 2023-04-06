import React, { useState, useEffect } from "react";
import NewsCard from "./NewsCard";
import FeatureNewsCard from "./FeatureNewsCard";

const NewsCarousel = (articleData) => {
  const getCurrentFeature = () => {
    return articleData.articleData[articleData.currentFeatureIndex];
  };

  // WIP: Carousel Functionality
  // const rotateFeatureForward = () => {
  //   console.log("Your mom");
  //   let tempCarousel = [];
  //   tempCarousel = articleData.carouselData.shift();
  //   tempCarousel.push(articleData.currentFeature);
  //   articleData.setCurrentFeatureIndex(articleData.currentFeatureIndex + 1);
  //   articleData.setCurrentFeature(articleData[articleData.currentFeatureIndex]);
  // };

  // const rotateFeatureBackward = () => {
  //   console.log("Your dad");

  //   let tempCarousel = [];
  //   tempCarousel = articleData.carouselData.unshift(
  //     articleData.carouselData[articleData.carouselData.length - 1]
  //   );
  //   tempCarousel.pop();
  //   articleData.setCurrentFeatureIndex(articleData.currentFeatureIndex - 1);
  //   articleData.setCurrentFeature(articleData[articleData.currentFeatureIndex]);
  // };

  return (
    <div className="newsCarousel">
      {articleData.article && articleData.articleData.length() > 0 ? (
        <FeatureNewsCard
          headline={getCurrentFeature().title}
          date={articleData.formatDate(getCurrentFeature().publishedAt)}
          time={articleData.formatTime(getCurrentFeature().publishedAt)}
          description={getCurrentFeature().description}
          source={getCurrentFeature().author}
          img={getCurrentFeature().urlToImage}
          url={getCurrentFeature().url}
          loading={articleData.loading}
        />
      ) : null}
      <div className="newsCarousel--standardCards">
        {articleData.carouselData.map((article, i) => {
          return (
            <NewsCard
              key={i}
              headline={article.title}
              type="carousel"
              date={articleData.formatDate(article.publishedAt)}
              time={articleData.formatTime(article.publishedAt)}
              description={article.description}
              source={article.author}
              img={article.urlToImage}
              url={article.url}
              loading={articleData.loading}
            />
          );
        })}
      </div>
    </div>
  );
};

export default NewsCarousel;
