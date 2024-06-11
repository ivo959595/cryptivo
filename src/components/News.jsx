import React from "react";
import { useState } from "react";

import { Select, Typography, Row, Col, Avatar, Card } from "antd";

import moment from "moment";

import { useGetCryptoNewsQuery } from "../services/cryptoNewsApi";

const { Text, Title } = Typography;
const { Option } = Select;

const News = ({ simplified }) => {
  const { data: cryptoNews } = useGetCryptoNewsQuery();

  //console.log(cryptoNews.data)

  const demoImage =
    "https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News";

  if (!cryptoNews?.data) return "Loading...";

  return (
    <Row gutter={[24, 24]}>
      {cryptoNews.data.map((news, i) => (
        <Col xs={24} sm={12} lg={8} key={i}>
          <Card hoverable className="news-card">
            <a href={news.url} target="_blank" rel="noreferrer">
              <div className="news-image-container">
                <Title className="news-title" level={4}>
                  {news.title}
                </Title>
                <img src={news.thumbnail ? news.thumbnail : demoImage} />
              </div>
              <p>
                {news.description && news.description.length > 100
                  ? `${news.description.substring(0, 100)}...`
                  : news.description}
              </p>

              <div>
                <Text>{moment(news.createdAt).startOf("ss").fromNow()}</Text>
              </div>
            </a>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default News;
