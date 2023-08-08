import styles from "@/components/Calendar/Feed/Feed.module.scss";

import React, { useState, useEffect } from "react";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import ProgressBar from "@mui/material/LinearProgress";

import QRCode from "react-qr-code";

import { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { parseDate } from "./util";
const mediumRssFeed = "https://www.tagesschau.de/api2u/homepage";

function Feed() {
  const MAX_ARTICLES = 10;

  const [articles, setArticles] = useState();

  const [progress, setProgress] = useState(0);

  const [reset, setReset] = useState(false);

  useEffect(() => {
    const loadArticles = async () => {
      fetch(mediumRssFeed, { headers: { Accept: "application/json" } })
        .then((res) => res.json())
        .then((data) => data.news.filter((item) => item.title.length > 0))
        .then((newArticles) => newArticles.slice(0, MAX_ARTICLES))
        .then((articles) => setArticles(articles))
        .catch((error) => console.log(error));
    };

    loadArticles();
  }, [MAX_ARTICLES]);

  return (
    <div className={styles.body}>
      <Container maxWidth="lg" className={styles.cardContainer}>
        <Card className={styles.rootTitle}>
          <h1>News</h1>
        </Card>
        <Swiper
          modules={[Autoplay, Pagination]}
          pagination={{
            clickable: false
          }}
          loop={true}
          autoplay={{
            delay: 30000,
            disableOnInteraction: false
          }}
          onSlideChange={() => {
            setReset(true);
            setProgress(0);
            setInterval(() => {
              setReset(false);
              setProgress(100);
            }, 200);
          }}
        >
          {articles
            ? articles.map((item: any) => (
                <SwiperSlide key={item.externalId}>
                  <Card className={styles.rootNews}>
                    <CardActionArea>
                      <CardMedia
                        className={styles.media}
                        image={item.teaserImage.imageVariants["1x1-840"]}
                        title={item.teaserImage.alttext}
                      />
                      <div className={styles.textContainer}>
                        <CardContent className={styles.card}>
                          <Typography
                            gutterBottom
                            textAlign={"start"}
                            color={"rgba(0, 0, 0, 0.6)"}
                          >
                            {item.topline}
                          </Typography>
                          <Typography
                            gutterBottom
                            variant="h5"
                            component="h2"
                            textAlign={"start"}
                          >
                            {item.title}
                          </Typography>
                          <Typography
                            gutterBottom
                            variant={"body2"}
                            component={"p"}
                            className={styles.text}
                          >
                            {"content" in item
                              ? item["content"][0]["value"].replace(/<\/?[^>]+(>|$)/g, "")
                              : "..."}
                          </Typography>
                          <div className={styles.modalFooter}>
                            <Typography
                              variant="body2"
                              color="textSecondary"
                              component="p"
                              className={styles.date}
                            >
                              {parseDate(item.date)}
                            </Typography>
                            <Typography
                              variant="body2"
                              color="textSecondary"
                              component="p"
                              className={styles.tag}
                            >
                              {item.tags[0].tag}, {item.tags[1].tag}
                            </Typography>
                          </div>
                        </CardContent>
                        <ProgressBar
                          variant="determinate"
                          value={progress}
                          defaultValue={0}
                          color={"primary"}
                          className={styles.progressBar}
                          sx={{
                            "& .MuiLinearProgress-bar": {
                              transition: reset ? "none" : "transform 30s linear"
                            }
                          }}
                        />
                      </div>
                    </CardActionArea>
                  </Card>
                  <Card className={styles.rootQr}>
                    <div className={styles.qrContainer}>
                      <QRCode
                        bgColor="#fafafa"
                        fgColor="#15171b"
                        value={item.shareURL}
                        className={styles.qr}
                      />
                    </div>
                  </Card>
                </SwiperSlide>
              ))
            : "Keine Artikel."}
        </Swiper>
      </Container>
    </div>
  );
}

export default Feed;
