import React, { useState, useEffect } from "react";
import NewsCard from "../cards/NewsCard";
import axios from "axios";
import NewsCarousel from "../cards/NewsCarousel";

const News = () => {
  const [articleData, setArticleData] = useState([]);
  const [currentFeatureIndex, setCurrentFeatureIndex] = useState(0);
  const [carouselData, setCarouselData] = useState([]);
  const [otherNewData, setOtherNewsData] = useState([]);
  const [loading, setLoading] = useState(true);

  // useEffects
  useEffect(() => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=88ad83eafcfd4208aca0a5cdc71ccad3"
      )
      .then(function (response) {
        var ranNums = shuffle([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
        const newsPageData = getSubarray(ranNums, response.data.articles);
        setArticleData(response.data.articles);
        setCarouselData(newsPageData[0]);
        setOtherNewsData(newsPageData[1]);
        setLoading(false);
      });
  }, []);

  // functions
  const shuffle = (array) => {
    var i = array.length,
      j = 0,
      temp;
    while (i--) {
      j = Math.floor(Math.random() * (i + 1));

      // swap randomly chosen element with current element
      temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  };

  const getSubarray = (indexList, data) => {
    var tempArray = [];
    var tempArray2 = [];
    for (var j = 0; j < 7; j++) {
      if (j < 3) {
        tempArray.push(data[indexList[j]]);
      } else {
        tempArray2.push(data[indexList[j]]);
      }
    }
    return [tempArray, tempArray2];
  };

  const formatDate = (crappyDate) => {
    const formattedYear = crappyDate.substring(0, 4);
    const formattedDay = parseInt(crappyDate.substring(9, 11));
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const formattedMonth =
      months[`${parseInt(crappyDate.substring(5, 7)) - 1}`];
    const formattedDate =
      formattedMonth + " " + formattedDay + ", " + formattedYear;
    return formattedDate;
  };

  const formatTime = (crappyTime) => {
    let formattedHour = parseInt(crappyTime.substring(11, 13));
    formattedHour = formattedHour > 12 ? formattedHour - 12 : formattedHour;
    const formattedMin = parseInt(crappyTime.substring(14, 16));
    const timeOfDay =
      (formattedHour > -1) & (formattedHour < 12) ? " AM" : " PM";
    return formattedHour + ":" + formattedMin + timeOfDay;
  };

  return (
    <div className="newsPage page-wrapper">
      <span>
        <h2>
          <b>Local News</b>
        </h2>
        <p className="page-subtitle">
          <i>Major Headlines in Your Area</i>
        </p>
      </span>
      <div className="newsPage--wrapper">
        <NewsCarousel
          articleData={articleData}
          currentFeatureIndex={currentFeatureIndex}
          carouselData={carouselData}
          loading={loading}
          formatTime={formatTime}
          formatDate={formatDate}
        />
        <div className="newsPage--otherArticles">
          {otherNewData.map((article, i) => {
            return (
              <NewsCard
                key={i}
                headline={article.title}
                date={formatDate(article.publishedAt)}
                time={formatTime(article.publishedAt)}
                description={article.description}
                source={article.author}
                img={article.urlToImage}
                url={article.url}
                loading={loading}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default News;
